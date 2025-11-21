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
  wheel: '(string|undefined)',
  wheelBreakpoint: 'string',
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
  wheel: undefined,
  wheelBreakpoint: 'md',
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
      this._applyPaginationOptions(options)
    }

    if (this._config.scrollbar) {
      this._applyScrollbarOptions(options)
    }

    if (this._config.navigationPrev || this._config.navigationNext) {
      this._applyNavigationOptions(options)
    }

    if (this._config.thumbs) {
      this._applyThumbsOptions(options)
    }

    if (this._config.wheel) {
      this._applyWheelOptions(options)
    }

    new Swiper(this._element, options)
  }

  _applyNavigationOptions(options) {
    options.navigation = {}

    if (this._config.navigationNext) {
      options.navigation.nextEl = this._config.navigationNext
    }

    if (this._config.navigationPrev) {
      options.navigation.prevEl = this._config.navigationPrev
    }
  }

  _applyThumbsOptions(options) {
    options.thumbs = {
      swiper: this._config.thumbs
    }

    options.on = options.on || {}
    options.on.realIndexChange = swiper => swiper.thumbs.swiper.slideTo(swiper.realIndex)
  }

  _applyWheelOptions(options) {
    const wheelEl = (typeof this._config.wheel === 'string') ? document.querySelector(this._config.wheel) : this._config.wheel;

    if (!wheelEl) {
      return;
    }

    const wheelChildEl = wheelEl.children[0];

    if (!wheelChildEl) {
      return;
    }

    // To be set in isMobile() function
    let mobileBreakpoint;

    // Get all circles:
    // 1. exclude the first one – it's the big circle path
    // 2. take odd elements – each circle is made of two elements (fill & stroke)
    const circleElements = [...wheelChildEl.querySelectorAll('circle:not(:first-child)')].filter((_, index) => index % 2 === 0);
    const desktopIndexOffset = 2;

    const isMobile = () => {
      mobileBreakpoint = mobileBreakpoint || parseInt(getComputedStyle(document.documentElement).getPropertyValue(`--breakpoint-${this._config.wheelBreakpoint}`), 10);

      return window.innerWidth < (mobileBreakpoint || 768);
    };

    const getSlideDirection = () => isMobile() ? 'horizontal' : 'vertical';
    const markActiveCircle = () => circleElements.forEach((el, i) => el.style.display = (i === currentIndex) ? 'block' : 'none')

    const rotateWheel = direction => {
      currentRotation -= direction * 45;
      wheelChildEl.style.transform = `rotate(${currentRotation}deg)`;
    }

    const updateWheel = direction => {
      currentIndex = (currentIndex + direction + circleElements.length) % circleElements.length;
      rotateWheel(direction);
      markActiveCircle();
    }

    let currentIndex = isMobile() ? 0 : desktopIndexOffset;
    let currentRotation = 0;
    let isLastViewMobile = isMobile()

    markActiveCircle();

    options.direction = getSlideDirection();
    options.effect = 'slide';

    options.on = options.on || {};
    options.on.slideNextTransitionStart = () => updateWheel(1);
    options.on.slidePrevTransitionStart = () => updateWheel(-1);
    options.on.resize = swiper => {
      swiper.changeDirection(getSlideDirection());

      // The view has been switched, so we need to adjust the active circle
      if (isMobile() && !isLastViewMobile) {
        isLastViewMobile = true;
        rotateWheel(desktopIndexOffset)
      } else if (!isMobile() && isLastViewMobile) {
        isLastViewMobile = false;
        rotateWheel(desktopIndexOffset * -1)
      }
    }
  }

  _applyPaginationOptions(options) {
    if (this._config.paginationType === 'fraction') {
      options.pagination = {
        el: this._config.pagination,
        type: 'fraction',
      };

      return;
    }

    options.pagination = {
      el: this._config.pagination,
      bulletActiveClass: 'slider-pagination-bullet-active',
      bulletClass: 'slider-pagination-bullet',
      clickable: true,
    }
  }

  _applyScrollbarOptions(options) {
    options.scrollbar = {
      el: this._config.scrollbar,
      dragClass: 'slider-scrollbar-drag',
      horizontalClass: 'slider-scrollbar-horizontal',
      lockClass: 'slider-scrollbar-lock',
      scrollbarDisabledClass: 'slider-scrollbar-disabled',
    }
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Slider.getOrCreateInstance(el, el.dataset.ofSlider ? JSON.parse(el.dataset.ofSlider) : {})
  }
}

export default Slider
