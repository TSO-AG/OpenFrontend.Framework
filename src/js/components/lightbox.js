import BaseComponent from 'bootstrap/js/src/base-component'
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
  id: 'string',
  open: '(string|boolean)',
  tabs: 'array',
}

const Default = {
  open: false,
  tabs: undefined,
}

class Lightbox extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._lightbox = new GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      closeOnOutsideClick: false,
      openEffect: 'fade',
      closeEffect: 'fade',
      lightboxHTML: LIGHTBOX_HTML
    })

    this._activeTabIndex = 0
    this._activeElementIndex = 0
    this._tabLinks = []
    this._initLightbox()
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
  openLightbox(elementId) {
    ({ tabIndex: this._activeTabIndex, elementIndex: this._activeElementIndex } = this._findElementById(elementId))

    this._setActiveTab(this._activeTabIndex)
    this._setLightboxElements()

    if (this._activeElementIndex) {
      this._lightbox.openAt(this._activeElementIndex)
    } else {
      this._lightbox.open()
    }
  }

  closeLightbox() {
    for (const link of this._tabLinks) {
      link.remove()
    }

    this._tabLinks = []

    if (this._lightboxHeader) {
      this._lightboxHeader.remove()
      this._lightboxHeader = null
    }

    if (this._lightboxFooter) {
      this._lightboxFooter.remove()
      this._lightboxFooter = null
    }

    this._carousel = null
  }

  // Private
  _initLightbox() {
    if (this._config.open) {
      this.openLightbox(typeof this._config.open === 'string' ? this._config.open : null)
    }

    // Open the lightbox after link click
    const links = document.querySelectorAll(`[data-lightbox-open="${this._config.id}"]`)

    for (const link of links) {
      link.addEventListener('click', e => {
        e.preventDefault()
        this.openLightbox(link.dataset.lightboxElement)
      })
    }

    // Create the necessary properties and add events to new elements after opening the lightbox
    this._lightbox.on('open', () => {
      this._openLightbox()
    })

    // Clean everything up when lightbox is shut down
    this._lightbox.on('close', () => {
      this.closeLightbox()
    })
  }

  _openLightbox() {
    this._prepareHeader()
    this._prepareFooter()
    this._prepareTabs()
    this._prepareCarousel()
    this._setCarouselElements()
    this._initTriggers()
  }

  _prepareHeader() {
    this._lightboxHeader = this._lightbox.modal.querySelector(`.${LIGHTBOX_HEADER_ELEMENT_CLASS}`)
    createResizeObserver(this._lightboxHeader, 'header')
  }

  _prepareFooter() {
    this._lightboxFooter = this._lightbox.modal.querySelector(`.${LIGHTBOX_FOOTER_ELEMENT_CLASS}`)
    createResizeObserver(this._lightboxFooter, 'footer')
  }

  _prepareTabs() {
    if (!this._lightboxHeader) {
      return
    }

    const tabs = document.createElement('ul.nav.nav-tabs')
    tabs.classList.add('nav', 'nav-underline')

    for (const [index, tab] of this._config.tabs.entries()) {
      const item = document.createElement('li')
      item.classList.add('nav-item')

      const link = document.createElement('a')
      link.classList.add('nav-link')
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

  _prepareCarousel() {
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

  _changeTab(tabIndex, elementIndex = 0) {
    this._activeElementIndex = elementIndex
    this._setActiveTab(tabIndex)
    this._setLightboxElements()
    this._setCarouselElements()
  }

  _setActiveTab(activeTabIndex = 0) {
    this._activeTabIndex = activeTabIndex
    this._activeTab = this._config.tabs[activeTabIndex]
    this._setActiveTabClass(activeTabIndex)
  }

  _setLightboxElements() {
    // This is needed to avoid the error of getting the previous slide configuration when I set up new lightbox slides because it is falsely set
    this._lightbox.prevActiveSlideIndex = null
    this._lightbox.prevActiveSlide = null
    this._lightbox.setElements(this._activeTab.elements)
  }

  _setCarouselElements() {
    if (!this._carousel) {
      return
    }

    // Hide footer when active tab has no thumbnails
    this._lightboxFooter.classList.toggle(LIGHTBOX_FOOTER_ELEMENT_HIDDEN_CLASS, !this._activeTab.thumbnail)

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

    if (!this._activeTab.thumbnail) {
      return slides
    }

    for (const element of this._activeTab.elements) {
      const slide = document.createElement('div')
      slide.classList.add('swiper-slide')

      if (element.thumbnail || element.type === 'image') {
        const image = document.createElement('img')
        image.src = element.thumbnail || element.href
        image.alt = element.alt || ''
        slide.append(image)
      } else {
        slide.append(element.type)
      }

      slides.push(slide)
    }

    return slides
  }

  _initTriggers() {
    // Change tab when click on the link
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

  _setActiveElement(index = this._activeElementIndex) {
    this._activeElementIndex = index

    if (this._carousel && this._carousel.slides.length >= index) {
      this._carousel.slideTo(this._activeElementIndex)
    }

    if (this._lightbox.index !== this._activeElementIndex) {
      this._lightbox.goToSlide(this._activeElementIndex)
    }
  }

  _setActiveTabClass(activeTabIndex) {
    activeTabIndex = Number(activeTabIndex)

    for (const [index, el] of this._tabLinks.entries()) {
      if (index === activeTabIndex) {
        el.classList.add(TAB_ACTIVE_CLASS)
      } else if (el.classList.contains(TAB_ACTIVE_CLASS)) {
        el.classList.remove(TAB_ACTIVE_CLASS)
      }
    }
  }

  _setSlideHeight(currentSlide) {
    if (this._descriptionObserver && this._currentDescription) {
      removeResizeObserver(this._descriptionObserver, this._currentDescription)
    }

    this._currentDescription = currentSlide?.slideNode?.querySelector('.gslide-description')

    if (this._currentDescription && this._currentDescription.textContent && window.getComputedStyle(this._currentDescription).position !== 'absolute') {
      this._descriptionObserver = createResizeObserver(this._currentDescription, 'description')
    } else {
      document.documentElement.style.setProperty('--lightbox-description-height', '0px')
    }
  }

  _findElementById(elementId) {
    if (elementId) {
      for (let tabIndex = 0; tabIndex < this._config.tabs.length; tabIndex++) {
        const tab = this._config.tabs[tabIndex]
        for (let elementIndex = 0; elementIndex < tab.elements.length; elementIndex++) {
          const element = tab.elements[elementIndex]
          if (element.id === elementId) {
            return { tabIndex, elementIndex }
          }
        }
      }
    }

    return { tabIndex: 0, elementIndex: 0 }
  }
}

export function initMultiple(els) {
  const groups = []

  for (const el of els) {
    if (el.dataset.ofLightbox === 'tabs') {
      Lightbox.getOrCreateInstance(el, el.dataset.ofLightboxTabsSetting ? JSON.parse(el.dataset.ofLightboxTabsSetting) : {})
      continue
    }

    if (!groups.includes(el.dataset.ofLightbox)) {
      groups.push(el.dataset.ofLightbox)
    }
  }

  for (const group of groups) {
    new GLightbox({
      selector: `[data-of-lightbox="${group}"]`,
    })
  }
}

function updateCSSVariable(element, variableName) {
  const { height } = element.getBoundingClientRect()
  document.documentElement.style.setProperty(`--lightbox-${variableName}-height`, `${height}px`)
}

function createResizeObserver(element, variableName) {
  const resizeObserver = new ResizeObserver(entries => {
    // eslint-disable-next-line no-unused-vars
    for (const entry of entries) {
      updateCSSVariable(element, variableName)
    }
  })

  resizeObserver.observe(element)

  updateCSSVariable(element, variableName)

  return resizeObserver
}

function removeResizeObserver(resizeObserver, element) {
  resizeObserver.unobserve(element)
}

export default Lightbox
