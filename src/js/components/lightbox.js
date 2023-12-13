import Config from 'bootstrap/js/src/util/config'
import GLightbox from 'glightbox/src/js/glightbox'
import 'glightbox/dist/css/glightbox.min.css'

import Swiper from 'swiper'
import { Autoplay, Navigation, Manipulation } from 'swiper/modules'

Swiper.use([Navigation, Autoplay, Manipulation])

const NAME = 'lightbox'
const TAB_ACTIVE_CLASS = 'active'
const LIGHTBOX_WRAPPER_CLASS = 'lightbox-wrapper'
const LIGHTBOX_HEADER_ELEMENT_CLASS = 'lightbox-header'
const LIGHTBOX_FOOTER_ELEMENT_CLASS = 'lightbox-footer'
const LIGHTBOX_FOOTER_ELEMENT_HIDDEN_CLASS = 'lightbox-footer-hidden'
const LIGHTBOX_HTML = `
  <div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
      <div class="${LIGHTBOX_WRAPPER_CLASS}">
        <div class="${LIGHTBOX_HEADER_ELEMENT_CLASS}"></div>
        <div id="glightbox-slider" class="gslider"></div>
        <div class="${LIGHTBOX_FOOTER_ELEMENT_CLASS}"></div>
      </div>
      <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>
      <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>
      <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>
    </div>
  </div>
`
const CAROUSEL_HTML = `
<div class="gallery-thumbnails carousel carousel-navigation-center">
  <div class="swiper">
    <div class="swiper-wrapper"></div>
  </div>
  <div class="carousel-navigation">
    <button type="button" class="carousel-button-prev btn btn-square btn-primary">
      <i class="ofi-caret-left-fill"></i>
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary">
      <i class="ofi-caret-right-fill"></i>
    </button>
  </div>
</div>
`

const CAROUSEL_SETTINGS = {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.carousel-button-next',
    prevEl: '.carousel-button-prev',
  },
  slideToClickedSlide: true,
  watchOverflow: true,
  centeredSlides: true,
}

const DefaultType = {
  items: 'array',
  tabs: 'array',
  thumbnails: 'boolean',
}

const Default = {
  items: [],
  tabs: [],
  thumbnails: false,
}

class Lightbox extends Config {
  constructor(config) {
    super()

    this._config = this._getConfig(config)
    this._items = config.items

    this._lightbox = new GLightbox({
      elements: this._items,
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      closeOnOutsideClick: false,
      openEffect: 'fade',
      closeEffect: 'fade',
      lightboxHTML: LIGHTBOX_HTML
    })

    // Initialize thumbnails
    if (this._config.thumbnails) {
      this._createThumbnails()
    }
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  open(identifierOrIndex) {
    let index;

    // Find the item with given identifier
    if (typeof identifierOrIndex === 'string' && /^\d+$/.exec(identifierOrIndex) === null) {
      index = this._items.findIndex(item => item.identifier === identifierOrIndex)
      index = (index !== -1) ? index : 0
    } else {
      index = identifierOrIndex || 0
    }

    this._lightbox.openAt(index)
  }

  // Private
  _createThumbnails() {
    this._prepareFooter()
    this._generateThumbnails()
    this._setCarouselElements()
  }

  _onCloseLightbox() {
    if (this._lightboxFooter) {
      this._lightboxFooter.remove()
      this._lightboxFooter = null
    }

    this._carousel = null
  }

  // Private
  _prepareHeader() {
    this._lightboxHeader = this._lightbox.modal.querySelector(`.${LIGHTBOX_HEADER_ELEMENT_CLASS}`)
    this._createResizeObserver(this._lightboxHeader, 'header')
  }

  _prepareFooter() {
    this._lightboxFooter = this._lightbox.modal.querySelector(`.${LIGHTBOX_FOOTER_ELEMENT_CLASS}`)
    this._createResizeObserver(this._lightboxFooter, 'footer')
  }

  _generateThumbnails() {
    if (!this._lightboxFooter) {
      return
    }

    // Prepare carousel element
    const tempContainer = document.createElement('div')
    tempContainer.innerHTML = CAROUSEL_HTML
    const carouselWrapper = tempContainer.firstElementChild

    this._lightboxFooter.append(carouselWrapper)
    const carouselElement = carouselWrapper.querySelector('.swiper')

    if (!carouselElement) {
      return
    }

    // Initialize Swiper
    this._carousel = new Swiper(carouselElement, CAROUSEL_SETTINGS)

    // Change the lightbox slide when the carousel slide has changed and they are different
    this._carousel.on('slideChange', () => {
      if (this._blockCarouselChange) {
        return
      }

      this._setActiveElement(this._carousel.realIndex)
    })
  }

  _setCarouselElements() {
    if (!this._carousel) {
      return
    }

    // Prepare and insert new slides into the carousel
    this._blockCarouselChange = true
    this._carousel.disable()
    this._carousel.removeAllSlides()
    const slides = this._generateCarouselSlides()
    this._carousel.appendSlide(slides)
    this._carousel.enable()
    this._blockCarouselChange = false

    // Scroll to slide only when slide exist in carousel
    if (this._carousel.slides.length > this._activeElementIndex) {
      this._carousel.slideTo(this._activeElementIndex, 0)
    }
  }

  _generateCarouselSlides() {
    const slides = []

    if (!this._activeTab.thumbnails) {
      return slides
    }

    for (const element of this._activeTab.items) {
      const slide = document.createElement('div')
      slide.classList.add('swiper-slide')

      if (element.thumbnails || element.type === 'image') {
        const image = document.createElement('img')
        image.src = element.thumbnails || element.href
        image.alt = element.alt || ''
        slide.append(image)
      } else {
        slide.append(element.type)
      }

      slides.push(slide)
    }

    return slides
  }

  _setActiveElement(index = this._activeElementIndex) {
    this._activeElementIndex = index

    if (this._carousel && this._carousel.slides.length >= index) {
      this._carousel.slideTo(this._activeElementIndex)
    }

    if (this._lightbox.index !== this._activeElementIndex) {
      this._lightbox.goToSlide(this._activeElementIndex)
    }
  }

  _setSlideHeight(currentSlide) {
    if (this._descriptionObserver && this._currentDescription) {
      this._removeResizeObserver(this._descriptionObserver, this._currentDescription)
    }

    this._currentDescription = currentSlide?.slideNode?.querySelector('.gslide-description')

    if (this._currentDescription && this._currentDescription.textContent && window.getComputedStyle(this._currentDescription).position !== 'absolute') {
      this._descriptionObserver = this._createResizeObserver(this._currentDescription, 'description')
    } else {
      document.documentElement.style.setProperty('--lightbox-description-height', '0px')
    }
  }
}

class LightboxWithTabs extends Lightbox {
  constructor(config) {
    super(config);

    if (this._config.tabs.length === 0) {
      throw new Error('There are no tabs defined')
    }

    this._activeTabIndex = 0
    this._activeElementIndex = 0
    this._tabLinks = []

    // Create the necessary properties and add events to new elements after opening the lightbox
    this._lightbox.on('open', () => {
      this._prepareHeader()
      this._createTabs()
      this._bindTabEvents()

      // TODO: the thumbnails should be created/destroye per tab
      super._createThumbnails()
    })

    // Clean everything up when lightbox is closed
    this._lightbox.on('close', () => this._onCloseLightbox())
  }

  // Public
  open(identifierOrIndex) {
    let itemIndex = 0
    let tabIndex = 0

    // Find the tab and item indexes with given identifier
    // TODO: improve both statements
    if (typeof identifierOrIndex === 'string' && /^\d+$/.exec(identifierOrIndex) === null) {
      for (let i = 0; i < this._config.tabs.length; i++) {
        for (let j = 0; j < this._config.tabs[i].items.length; j++) {
          if (this._config.tabs[i].items[j].identifier === identifierOrIndex) {
            tabIndex = i
            itemIndex = j
            break
          }
        }
      }
    } else if (identifierOrIndex > 0) {
      // Find the tab and item indexes by numeric index
      let itemsCount = 0;

      for (let i = 0; i < this._config.tabs.length; i++) {
        for (let j = 0; j < this._config.tabs[i].items.length; j++) {
          if (this._config.tabs[i].items[j].identifier === identifierOrIndex) {
            if (itemsCount === identifierOrIndex) {
              tabIndex = i
              itemIndex = j
              break
            }

            itemsCount++
          }
        }
      }
    }

    this._setActiveTab(tabIndex)
    this._setLightboxElements()

    this._activeElementIndex = itemIndex
    this._lightbox.openAt(this._activeElementIndex)
  }

  // Private
  _createThumbnails() {
    // noop
  }

  _onCloseLightbox() {
    super._onCloseLightbox()

    for (const link of this._tabLinks) {
      link.remove()
    }

    this._tabLinks = []

    if (this._lightboxHeader) {
      this._lightboxHeader.remove()
      this._lightboxHeader = null
    }
  }

  _createTabs() {
    if (!this._lightboxHeader) {
      return
    }

    const tabs = document.createElement('ul')
    tabs.className = 'nav nav-underline'

    for (const [index, tab] of this._config.tabs.entries()) {
      const item = document.createElement('li')
      item.className = 'nav-item'

      const link = document.createElement('a')
      item.className = 'nav-link'
      link.textContent = tab.name || index
      link.href = '#'
      link.dataset.tab = index

      this._tabLinks.push(link)

      if (index === this._activeTabIndex) {
        link.classList.add(TAB_ACTIVE_CLASS)
      }

      item.append(link)
      tabs.append(item)
    }

    this._lightboxHeader.append(tabs)
  }

  _changeTab(tabIndex) {
    this._activeElementIndex = 0
    this._setActiveTab(tabIndex)
    this._setCarouselElements()
    this._setLightboxElements()
  }

  _setActiveTab(activeTabIndex) {
    this._activeTabIndex = activeTabIndex
    this._activeTab = this._config.tabs[activeTabIndex]

    // Set active tab class
    for (const [index, el] of this._tabLinks.entries()) {
      if (index === activeTabIndex) {
        el.classList.add(TAB_ACTIVE_CLASS)
      } else if (el.classList.contains(TAB_ACTIVE_CLASS)) {
        el.classList.remove(TAB_ACTIVE_CLASS)
      }
    }
  }

  _setLightboxElements() {
    // This is needed to avoid the error of getting the previous slide configuration when I set up new lightbox slides because it is falsely set
    this._lightbox.prevActiveSlideIndex = null
    this._lightbox.prevActiveSlide = null
    this._lightbox.setElements(this._activeTab.items)
  }

  _setCarouselElements() {
    super._setCarouselElements()

    // Hide footer when active tab has no thumbnails
    if (this._lightboxFooter) {
      this._lightboxFooter.classList.toggle(LIGHTBOX_FOOTER_ELEMENT_HIDDEN_CLASS, !this._activeTab.thumbnails)
    }
  }

  _bindTabEvents() {
    // Change tab content on tab click
    for (const link of this._tabLinks) {
      link.addEventListener('click', event => {
        event.preventDefault()

        // Do nothing if the tab is already active
        if (link.classList.contains(TAB_ACTIVE_CLASS)) {
          return
        }

        this._changeTab(link.dataset.tab)
      })
    }

    // Sync lightbox slide with thumbnails
    this._lightbox.on('slide_before_change', ({ current }) => {
      this._setActiveElement(current.index)
    })

    // After changing the slide, set the maximum image height to fit in the window
    this._lightbox.on('slide_changed', ({ current }) => {
      this._setSlideHeight(current)
    })
  }

  _updateCSSVariable(element, variableName) {
    document.documentElement.style.setProperty(`--lightbox-${variableName}-height`, `${element.getBoundingClientRect().height}px`)
  }

  _createResizeObserver(element, variableName) {
    const resizeObserver = new ResizeObserver(entries => {
      // eslint-disable-next-line no-unused-vars
      for (const entry of entries) {
        this._updateCSSVariable(element, variableName)
      }
    })

    resizeObserver.observe(element)

    this._updateCSSVariable(element, variableName)

    return resizeObserver
  }

  _removeResizeObserver(resizeObserver, element) {
    resizeObserver.unobserve(element)
  }
}

class LightboxRegistry
{
  constructor() {
    this.configs = new Map;
    this.instances = new Map;
  }

  initializeLightboxes() {
    for (const [identifier, config] of this.configs.entries()) {
      const items = []

      // Get the HTML elements and add them to items
      if (Object.prototype.hasOwnProperty.call(config, 'elements')) {
        config.elements.forEach(({ element, options }, index) => {
          const item = {...options}

          if (element.hasAttribute('href')) {
            item.href = element.href
          }

          items.push(item)

          // Open the lightbox on click
          element.addEventListener('click', e => {
            e.preventDefault()
            this.instances.get(identifier).open(index)
          });
        });
      }

      config.items = config.items ? [...items, ...config.items] : items;

      if (Object.prototype.hasOwnProperty.call(config, 'tabs') && config.tabs.length > 0) {
        this.instances.set(identifier, new LightboxWithTabs(config))
      } else {
        this.instances.set(identifier, new Lightbox(config))
      }
    }
  }

  registerFromConfigElement(el) {
    const identifier = el.dataset.ofLightboxConfig;

    if (this.configs.has(identifier)) {
      throw new Error(`You cannot have more than one lightbox config with the same identifier: ${identifier}`)
    }

    this.configs.set(identifier, JSON.parse(el.textContent.trim()));
  }

  registerFromRegularElement(el) {
    // TODO: validate options
    const options = (el.dataset.ofLightbox !== '') ? JSON.parse(el.dataset.ofLightbox) : {}
    const identifier = Object.prototype.hasOwnProperty.call(options, 'group') ? options.group : 'ungroupped'

    // Create a config if it does not exist yet
    if (!this.configs.has(identifier)) {
      this.configs.set(identifier, { elements: [] });
    }

    this.configs.get(identifier).elements.push({
      element: el,
      options,
    })
  }

  registerTriggerElement(el) {
    el.addEventListener('click', e => {
      e.preventDefault()

      const [identifier, item] = el.dataset.ofLightboxOpen.split(':');

      if (!this.instances.has(identifier)) {
        throw new Error(`The lightbox with identifier "${identifier}" does not exist`)
      }

      this.instances.get(identifier).open(item)
    })
  }
}

const registry = new LightboxRegistry();

export function initMultiple(els) {
  // First, register the configs
  [...els].filter(el => el.hasAttribute('data-of-lightbox-config')).forEach((el) => registry.registerFromConfigElement(el));

  // Then, register the HTML elements
  [...els].filter(el => el.hasAttribute('data-of-lightbox')).forEach((el) => registry.registerFromRegularElement(el));

  // Then, register the trigger elements
  [...els].filter(el => el.hasAttribute('data-of-lightbox-open')).forEach((el) => registry.registerTriggerElement(el));

  // Finally initialize the lightboxes
  registry.initializeLightboxes();
}

export default LightboxRegistry
