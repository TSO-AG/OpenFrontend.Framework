import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'scroll_shadow'
const CLASS_NAME_SCROLL_LEFT = 'scroll-shadow-left'
const CLASS_NAME_SCROLL_RIGHT = 'scroll-shadow-right'
const CLASS_NAME_SCROLL_TO_END = 'scroll-to-end'

const DefaultType = {}

const Default = {}

class ScrollShadow extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._userInteracted = false

    this._initShadow()
    this._checkScrollToEndClass()
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

  _checkScrollToEndClass() {
    if (this._element.classList.contains(CLASS_NAME_SCROLL_TO_END)) {
      const onUserInteraction = () => {
        this._userInteracted = true
        this._element.removeEventListener('wheel', onUserInteraction)
        this._element.removeEventListener('touchstart', onUserInteraction)
        this._element.removeEventListener('keydown', onUserInteraction)
        this._element.removeEventListener('mousedown', onUserInteraction)
      }

      this._element.addEventListener('wheel', onUserInteraction)
      this._element.addEventListener('touchstart', onUserInteraction)
      this._element.addEventListener('keydown', onUserInteraction)
      this._element.addEventListener('mousedown', onUserInteraction)

      this._element.addEventListener('scroll', () => {
        if (this._userInteracted) {
          this._element.classList.remove(CLASS_NAME_SCROLL_TO_END)
        }
      })
    }
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
