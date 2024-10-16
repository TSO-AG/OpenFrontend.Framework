import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'scroll_shadow'
const CLASS_NAME_SCROLL_LEFT = 'scroll-shadow-left'
const CLASS_NAME_SCROLL_RIGHT = 'scroll-shadow-right'

const DefaultType = {}

const Default = {}

class ScrollShadow extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._initShadow()
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
  _initShadow() {
    this._element.addEventListener('scroll', () => this._updateShadows())
    window.addEventListener('resize', () => this._updateShadows())

    this._updateShadows()
  }

  _updateShadows() {
    const { scrollLeft, scrollWidth, clientWidth } = this._element

    this._element.classList.toggle(CLASS_NAME_SCROLL_LEFT, scrollLeft > 0)
    this._element.classList.toggle(CLASS_NAME_SCROLL_RIGHT, scrollLeft < scrollWidth - clientWidth - 1)
  }
}

export function initMultiple(els) {
  for (const el of els) {
    ScrollShadow.getOrCreateInstance(el, el.dataset.ofScrollShadow ? JSON.parse(el.dataset.ofScrollShadow) : {})
  }
}

export default ScrollShadow
