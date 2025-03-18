import BaseComponent from 'bootstrap/js/src/base-component'
import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination, Scrollbar, EffectFade } from 'swiper/modules'

Swiper.use([Navigation, Autoplay, Pagination, Scrollbar, EffectFade])

/**
 * Constants
 */
const NAME = 'slider'
const EVENT_SLIDER_INITIALIZED = 'initialized.of.slider'

const DefaultType = {
  autoplay: '(object|boolean|undefined)',
  loop: 'boolean',
  navigationNext: '(string|undefined)',
  navigationPrev: '(string|undefined)',
  pagination: '(object|string|undefined)',
  paginationType: '(string|undefined)',
  scrollbar: '(object|string|undefined)',
  speed: 'number',
  thumbs: '(string|undefined)',
}

const Default = {
  autoplay: false,
  loop: false,
  navigationNext: undefined,
  navigationPrev: undefined,
  pagination: undefined,
  paginationType: undefined,
  scrollbar: undefined,
  speed: 300,
  thumbs: undefined,
}

class Slider extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._initSlider()
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
  _initSlider() {
    const options = {
      loop: this._config.loop,
      slidesPerView: 1,
      effect: 'fade',
      speed: this._config.speed,
      touchStartPreventDefault: false,
      on: {
        init: () => {
          this._element.dispatchEvent(new CustomEvent(EVENT_SLIDER_INITIALIZED))
        }
      },
    }

    if (this._config.autoplay) {
      options.autoplay = { ...this._config.autoplay }
    }

    if (this._config.pagination) {
      options.pagination = this._config.paginationType === 'fraction' ?
        {
          el: this._config.pagination,
          type: 'fraction',
        } :
        {
          el: this._config.pagination,
          bulletActiveClass: 'slider-pagination-bullet-active',
          bulletClass: 'slider-pagination-bullet',
          clickable: true,
        }
    }

    if (this._config.scrollbar) {
      options.scrollbar = {
        el: this._config.scrollbar,
        dragClass: 'slider-scrollbar-drag',
        horizontalClass: 'slider-scrollbar-horizontal',
        lockClass: 'slider-scrollbar-lock',
        scrollbarDisabledClass: 'slider-scrollbar-disabled',
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

    if (this._config.thumbs) {
      options.thumbs = {
        swiper: this._config.thumbs
      }

      options.on = {
        // Scroll slider to active thumbnail
        realIndexChange(swiper) {
          swiper.thumbs.swiper.slideTo(swiper.realIndex)
        },
      }
    }

    new Swiper(this._element, options)
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Slider.getOrCreateInstance(el, el.dataset.ofSlider ? JSON.parse(el.dataset.ofSlider) : {})
  }
}

export default Slider
