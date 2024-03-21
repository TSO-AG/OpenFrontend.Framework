import Config from 'bootstrap/js/src/util/config'
import GLightbox from 'glightbox/src/js/glightbox'

import Swiper from 'swiper'
import { Autoplay, Navigation, Manipulation } from 'swiper/modules'

Swiper.use([Navigation, Autoplay, Manipulation])

const NAME = 'lightbox'
const LIGHTBOX_WRAPPER_CLASS = 'lightbox-wrapper'
const LIGHTBOX_THUMBNAILS_CLASS = 'lightbox-thumbnails'
const LIGHTBOX_URL_HASH_PREFIX = 'lightbox-'

const LIGHTBOX_SETTINGS = {
  autoplayVideos: true,
  closeEffect: 'fade',
  closeOnOutsideClick: false,
  openEffect: 'fade',
  touchNavigation: true,
}

const LIGHTBOX_HTML = `<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">
  <div class="gloader visible"></div>
  <div class="goverlay"></div>
  <div class="gcontainer">
    <div class="${LIGHTBOX_WRAPPER_CLASS}">
      {beforeContent}
      <div id="glightbox-slider" class="gslider"></div>
      {afterContent}
    </div>
    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>
    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>
    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>
  </div>
</div>`

const THUMBNAILS_CAROUSEL_HTML = `<div class="gallery-thumbnails carousel carousel-navigation-center">
  <div class="swiper">
    <div class="swiper-wrapper"></div>
  </div>
  <div class="carousel-navigation">
    <button type="button" class="carousel-button-prev btn btn-square btn-primary">
      <svg class="of-icon">
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
      </svg>
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary">
      <svg class="of-icon">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
      </svg>
    </button>
  </div>
</div>`

const THUMBNAILS_CAROUSEL_SETTINGS = {
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
  urlHashTracking: 'boolean',
}

const Default = {
  items: [],
  tabs: [],
  thumbnails: false,
  urlHashTracking: true,
}

class Lightbox extends Config {
  constructor(identifier, config) {
    super()

    this._config = this._getConfig(config)
    this._identifier = identifier

    this._lightbox = new GLightbox(this._getLightboxOptions())
    this._lightbox.on('close', this._onClose.bind(this))
    this._lightbox.on('open', this._onOpen.bind(this))
    this._lightbox.on('slide_before_change', this._onSlideBeforeChange.bind(this))
    this._lightbox.on('slide_changed', this._onSlideChanged.bind(this))

    this._init()
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
    if (identifierOrIndex === null) {
      return
    }

    let index

    // Find the item with given identifier
    if (typeof identifierOrIndex === 'string' && /^\d+$/.exec(identifierOrIndex) === null) {
      index = this._config.items.findIndex(item => item.identifier === identifierOrIndex)
      index = (index === -1) ? 0 : index
    } else {
      index = identifierOrIndex || 0
    }

    this._lightbox.openAt(index)

    if (this._config.thumbnails) {
      this._setThumbnailsActiveSlide(index, 0)
    }
  }

  getUrlHashPrefix() {
    return LIGHTBOX_URL_HASH_PREFIX
  }

  // Private
  _getLightboxOptions() {
    let html = LIGHTBOX_HTML
    html = html.replace(/{beforeContent}/, this._getBeforeContentHtml())
    html = html.replace(/{afterContent}/, this._getAfterContentHtml())

    return {
      ...LIGHTBOX_SETTINGS,
      elements: this._config.items.map(item => ({ ...item, zoomable: false })),
      lightboxHTML: html,
    }
  }

  _init() {
    if (this._config.urlHashTracking) {
      this.open(this._getItemFromUrlHash())
      window.addEventListener('hashchange', () => this.open(this._getItemFromUrlHash()))
    }
  }

  _getBeforeContentHtml() {
    return ''
  }

  _getAfterContentHtml() {
    return this._config.thumbnails ? `<div class="${LIGHTBOX_THUMBNAILS_CLASS}"></div>` : ''
  }

  _getLightboxElement(selector) {
    return this._lightbox.modal.querySelector(selector)
  }

  // Private - events
  _onClose() {
    if (this._config.thumbnails) {
      this._thumbnailsElement.remove()
      this._thumbnailsElement = null
      this._thumbnailsCarousel = null
    }

    if (this._config.urlHashTracking) {
      window.history.pushState({}, null, this._generateUrlForItem())
    }
  }

  _onOpen() {
    if (this._config.thumbnails) {
      this._thumbnailsElement = this._getLightboxElement(`.${LIGHTBOX_THUMBNAILS_CLASS}`)
      this._createResizeObserver(this._thumbnailsElement, 'thumbnails-wrapper-height')

      this._generateThumbnails()
      this._updateThumbnails()
    }

    if (this._config.urlHashTracking) {
      this._updateUrlHashOnOpen()
    }
  }

  _onSlideBeforeChange({ current }) {
    if (this._config.thumbnails) {
      this._setThumbnailsActiveSlide(current.index)
    }

    if (this._config.urlHashTracking) {
      this._updateUrlHashOnSlideChange(current.index)
    }
  }

  _onSlideChanged({ current }) {
    if (this._descriptionObserver && this._currentDescription) {
      this._descriptionObserver.unobserve(this._currentDescription)
    }

    this._currentDescription = current?.slideNode?.querySelector('.gslide-description')

    // After changing the slide, set the maximum image height to fit in the window
    if (this._currentDescription && this._currentDescription.textContent && window.getComputedStyle(this._currentDescription).position !== 'absolute') {
      this._descriptionObserver = this._createResizeObserver(this._currentDescription, 'description-height')
    } else {
      document.documentElement.style.setProperty('--lightbox-description-height', '0px')
    }
  }

  // Private - URL hash tracking
  _updateUrlHashOnOpen() {
    window.history.pushState({}, null, this._generateUrlForItem(this._lightbox.index))
  }

  _updateUrlHashOnSlideChange(index) {
    window.history.replaceState({}, null, this._generateUrlForItem(index))
  }

  _generateUrlHash(identifierOrIndex) {
    if (typeof identifierOrIndex === 'number') {
      identifierOrIndex = this._config.items[identifierOrIndex].identifier || identifierOrIndex
    }

    return `${LIGHTBOX_URL_HASH_PREFIX}${this._identifier}:${identifierOrIndex}`
  }

  _generateUrlForItem(identifierOrIndex = null) {
    let url = window.location.pathname

    if (identifierOrIndex || identifierOrIndex === 0) {
      url = `${url}#${this._generateUrlHash(identifierOrIndex)}`
    }

    return url
  }

  _getItemFromUrlHash() {
    if (!window.location.hash.startsWith(`#${LIGHTBOX_URL_HASH_PREFIX}`)) {
      return null
    }

    let [identifier, item] = window.location.hash.substring(LIGHTBOX_URL_HASH_PREFIX.length + 1).split(':')

    if (identifier !== this._identifier) {
      return null
    }

    return item
  }

  // Private - thumbnails
  _generateThumbnails() {
    const temp = document.createElement('div')
    temp.innerHTML = THUMBNAILS_CAROUSEL_HTML

    this._thumbnailsElement.append(temp.firstElementChild)
    this._thumbnailsCarousel = new Swiper(this._thumbnailsElement.querySelector('.swiper'), THUMBNAILS_CAROUSEL_SETTINGS)

    // Change the lightbox slide when the carousel slide has changed and they are different
    this._thumbnailsCarousel.on('slideChange', () => {
      if (this._thumbnailsCarouselLocked) {
        return
      }

      this._setThumbnailsActiveSlide(this._thumbnailsCarousel.realIndex)
    })
  }

  _updateThumbnails() {
    if (!this._thumbnailsCarousel) {
      return
    }

    const imageRegExp = /\.(gif|jpg|jpeg|png|svg|webp)$/

    const generator = element => {
      const slide = document.createElement('div')
      slide.className = 'swiper-slide'

      let { thumbnail } = element

      // Try to detect the image, if type is unknown
      if (!thumbnail && !element.type && element.href && imageRegExp.test(element.href)) {
        element.type = 'image'
      }

      // Set the original image as thumbnail
      if (!thumbnail && element.type === 'image') {
        thumbnail = element.href
      }

      if (thumbnail) {
        const image = document.createElement('img')
        image.src = thumbnail
        image.alt = element.alt || ''

        if (element.thumbnailSrcset) {
          image.srcset = element.thumbnailSrcset

          if (element.thumbnailSizes) {
            image.sizes = element.thumbnailSizes
          }
        }

        slide.append(image)
      }

      return slide
    }

    // Disable the carousel and remove all existing slides
    this._thumbnailsCarouselLocked = true
    this._thumbnailsCarousel.disable()
    this._thumbnailsCarousel.removeAllSlides()

    // Append new slides and re-enable the carousel
    this._thumbnailsCarousel.appendSlide(this._generateThumbnailsCarouselSlides(generator))
    this._thumbnailsCarousel.enable()
    this._thumbnailsCarouselLocked = false
  }

  _generateThumbnailsCarouselSlides(generator) {
    return this._config.items.map(generator)
  }

  _setThumbnailsActiveSlide(index, speed) {
    if (this._thumbnailsCarousel && this._thumbnailsCarousel.slides.length >= index) {
      this._thumbnailsCarousel.slideTo(index, speed)
    }

    // Also change the lightbox slide, if it's not the same
    if (this._lightbox.index !== index) {
      this._lightbox.goToSlide(index)
    }
  }

  _createResizeObserver(element, variableName) {
    // eslint-disable-next-line unicorn/no-array-for-each
    const resizeObserver = new ResizeObserver(entries => entries.forEach(() => this._updateCssVariable(element, variableName)))
    resizeObserver.observe(element)

    this._updateCssVariable(element, variableName)

    return resizeObserver
  }

  _updateCssVariable(element, variableName) {
    document.documentElement.style.setProperty(`--lightbox-${variableName}`, `${element.getBoundingClientRect().height}px`)
  }
}

export default Lightbox
