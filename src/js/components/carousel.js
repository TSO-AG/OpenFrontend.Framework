import BaseComponent from 'bootstrap/js/src/base-component'
import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

Swiper.use([Navigation, Autoplay, Pagination])

/**
 * Constants
 */

const NAME = 'carousel'
const CSS_ROOT = getComputedStyle(document.documentElement)
const REGEX_BREAKPOINT_VALUE = /(\d+)(?!.*\d)/g

const DefaultType = {
  autoplay: '(object|boolean|undefined)',
  breakpoints: '(object|undefined)',
  loop: 'boolean',
  navigationNextEl: '(string|undefined)',
  navigationPrevEl: '(string|undefined)',
  paginationEl: '(object|string|undefined)',
  slidesPerView: '(string|number|undefined)',
  spaceBetween: '(string|number|undefined)',
  speed: 'number',
}

const Default = {
  autoplay: false,
  breakpoints: undefined,
  loop: false,
  navigationNextEl: undefined,
  navigationPrevEl: undefined,
  paginationEl: undefined,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 300,
}

const BreakpointType = {
  slidesPerView: '(string|number|undefined)',
  spaceBetween: '(string|number|undefined)',
}

class Carousel extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._initCarousel()
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

  // Private
  _initCarousel() {
    const options = {
      loop: this._config.loop,
      slidesPerView: this._config.slidesPerView,
      spaceBetween: this._config.spaceBetween,
      speed: this._config.speed,
    }

    if (this._config.autoplay) {
      options.autoplay = { ...this._config.autoplay }
    }

    if (this._config.paginationEl) {
      options.pagination = {
        el: this._config.paginationEl,
        bulletActiveClass: 'carousel-pagination-bullet-active',
        bulletClass: 'carousel-pagination-bullet',
        clickable: true,
      }
    }

    if (this._config.navigationPrevEl || this._config.navigationNextEl) {
      options.navigation = {}

      if (this._config.navigationNextEl) {
        options.navigation.nextEl = this._config.navigationNextEl
      }

      if (this._config.navigationPrevEl) {
        options.navigation.prevEl = this._config.navigationPrevEl
      }
    }

    if (this._config.breakpoints) {
      options.breakpoints = this._prepareBreakpointConfiguration(this._config.breakpoints)
    }

    this._carousel = new Swiper(this._element, options)
  }

  _prepareBreakpointConfiguration(breakpoints) {
    const newBreakpoints = {}

    // eslint-disable-next-line guard-for-in
    for (const key in breakpoints) {
      const matchedValue = key.match(REGEX_BREAKPOINT_VALUE)
      const breakpointValue = matchedValue ? matchedValue[0] : this._getBreakpointValue(key)

      if (breakpointValue) {
        const currentBreakpoint = breakpoints[key]
        this._typeCheckConfig(currentBreakpoint, BreakpointType)

        // Breakpoint should only have allowed properties
        const filtered = Object.entries(currentBreakpoint).filter(([key]) => Object.prototype.hasOwnProperty.call(BreakpointType, key))

        if (filtered.length > 0) {
          newBreakpoints[breakpointValue] = Object.fromEntries(filtered)
        }
      }
    }

    return newBreakpoints
  }

  _getBreakpointValue(name) {
    const value = CSS_ROOT.getPropertyValue(`--breakpoint-${name}`)
    return value ? value.match(REGEX_BREAKPOINT_VALUE)[0] : undefined
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Carousel.getOrCreateInstance(el, el.dataset.ofCarousel ? JSON.parse(el.dataset.ofCarousel) : {})
  }
}

export default Carousel
