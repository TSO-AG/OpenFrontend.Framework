import BaseComponent from 'bootstrap/js/src/base-component'
import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css' // eslint-disable-line import/no-unresolved

Swiper.use([Navigation, Autoplay, Pagination])

let cssRoot

function getCssRoot() {
  if (!cssRoot) {
    cssRoot = getComputedStyle(document.documentElement)
  }

  return cssRoot
}

/**
 * Constants
 */
const NAME = 'carousel'
const EVENT_CAROUSEL_INITIALIZED = 'initialized.of.carousel'
const REGEX_BREAKPOINT_VALUE = /(\d+)(?!.*\d)/g

const DefaultType = {
  autoplay: '(object|boolean|undefined)',
  breakpoints: '(object|undefined)',
  loop: 'boolean',
  navigationNext: '(string|undefined)',
  navigationPrev: '(string|undefined)',
  pagination: '(object|string|undefined)',
  slidesPerView: '(string|number|undefined)',
  spaceBetween: '(string|number|undefined)',
  speed: 'number',
}

const Default = {
  autoplay: false,
  breakpoints: undefined,
  loop: false,
  navigationNext: undefined,
  navigationPrev: undefined,
  pagination: undefined,
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

  // Private
  _initCarousel() {
    const options = {
      loop: this._config.loop,
      slidesPerView: this._config.slidesPerView,
      spaceBetween: this._config.spaceBetween,
      speed: this._config.speed,
      on: {
        init: () => {
          this._element.dispatchEvent(new CustomEvent(EVENT_CAROUSEL_INITIALIZED))
        }
      },
    }

    if (this._config.autoplay) {
      options.autoplay = { ...this._config.autoplay }
    }

    if (this._config.pagination) {
      options.pagination = {
        el: this._config.pagination,
        bulletActiveClass: 'carousel-pagination-bullet-active',
        bulletClass: 'carousel-pagination-bullet',
        clickable: true,
      }
    }

    if (this._config.navigationPrev || this._config.navigationNext) {
      options.navigation = {}

      if (this._config.navigationNext) {
        options.navigation.nextEl = this._config.navigationNext
      }

      if (this._config.navigationPrev) {
        options.navigation.prevEl = this._config.navigationPrev
      }
    }

    if (this._config.breakpoints) {
      options.breakpoints = this._prepareBreakpointConfiguration(this._config.breakpoints)
    }

    new Swiper(this._element, options)
  }

  _prepareBreakpointConfiguration(inputBreakpoints) {
    const parsedBreakpoints = {}

    for (const key in inputBreakpoints) {
      if (!Object.prototype.hasOwnProperty.call(inputBreakpoints, key)) {
        continue
      }

      const breakpointValue = this._getBreakpoint(key) || this._getBreakpoint(getCssRoot().getPropertyValue(`--breakpoint-${key}`))

      if (!breakpointValue) {
        continue
      }

      this._typeCheckConfig(inputBreakpoints[key], BreakpointType)

      // Breakpoint should only have allowed properties
      const filtered = Object.entries(inputBreakpoints[key]).filter(([key]) => Object.prototype.hasOwnProperty.call(BreakpointType, key))

      if (filtered.length > 0) {
        parsedBreakpoints[breakpointValue] = Object.fromEntries(filtered)
      }
    }

    return parsedBreakpoints
  }

  _getBreakpoint(value) {
    const matches = value.match(REGEX_BREAKPOINT_VALUE)

    return matches ? matches[0] : undefined
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Carousel.getOrCreateInstance(el, el.dataset.ofCarousel ? JSON.parse(el.dataset.ofCarousel) : {})
  }
}

export default Carousel
