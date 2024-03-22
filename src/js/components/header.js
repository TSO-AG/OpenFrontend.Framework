import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'header'
const CSS_HEADER_HEIGHT_PROPERTY_NAME = '--bs-header-height'
const CSS_STICKY_HEADER_HEIGHT_PROPERTY_NAME = '--bs-header-sticky-height'
const COLLAPSE_ELEMENT_SELECTOR = '.header-collapse'
const STICKY_HEADER_CLASS = 'header-sticky'
const STICKY_HEADER_PLACEHOLDER_CLASS = 'header-placeholder'
const STICKY_HEADER_INIT_CLASS = 'header-sticky-init'
const STICKY_HEADER_STUCK_INIT_CLASS = 'header-stuck'
const STICKY_HEADER_STUCK_CLASS = 'header-stuck-is-stuck'

const DefaultType = {
  sticky: '(boolean|object|undefined)',
}

const Default = {
  sticky: false,
}

class Header extends BaseComponent {
  constructor(element, config) {
    super(element, config)
    this._headerCollapseElements = element.querySelectorAll(COLLAPSE_ELEMENT_SELECTOR)
    this._setStickyHeaderHeight()
    this._initTriggers()

    // Bind methods
    this._updateStickyHeader = this._updateStickyHeader.bind(this)
    this._resizeStickyHeader = this._resizeStickyHeader.bind(this)

    if (this._config.sticky) {
      this._lastScrollTop = 0
      this._stuckHeader = this._config.sticky.stuck || false
      this._stickyHeaderOffset = this._config.sticky.offset || 0
      this._initStickyHeader()
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
  dispose() {
    window.removeEventListener('scroll', this._updateStickyHeader)
    window.removeEventListener('resize', this._resizeStickyHeader)
    super.dispose()
  }

  // Private
  _initTriggers() {
    document.addEventListener('click', event => {
      for (const collapse of [...this._headerCollapseElements].filter(collapse => collapse.classList.contains('show'))) {
        if (this._isClickOutsideCollapse(event, collapse)) {
          this._closeCollapses(collapse)
        }
      }
    })
  }

  _isClickOutsideCollapse(event, collapseElement) {
    return !collapseElement.contains(event.target)
  }

  async _closeCollapses(collapseElement) {
    const collapse = await window.openFrontend.Collapse.then(component => component.getInstance(collapseElement))
    if (collapse) {
      collapse.hide()
    }
  }

  _setStickyHeaderHeight() {
    const resizeObserver = new ResizeObserver(this._setStickyHeaderHeightProperty.bind(this))
    resizeObserver.observe(this._element)
  }

  _setStickyHeaderHeightProperty(entries) {
    for (const entry of entries) {
      const headerHeight = `${entry.target.offsetHeight}px`
      document.body.style.setProperty(CSS_STICKY_HEADER_HEIGHT_PROPERTY_NAME, headerHeight)
    }
  }

  // Sticky header
  _initStickyHeader() {
    this._createHeaderPlaceholder()
    this._initStuckHeader()
    this._resizeStickyHeader()
    window.addEventListener('scroll', this._updateStickyHeader)
    window.addEventListener('resize', this._resizeStickyHeader)
  }

  _initStuckHeader() {
    if (this._stuckHeader) {
      this._element.classList.add(STICKY_HEADER_STUCK_INIT_CLASS)
    }
  }

  _createHeaderPlaceholder() {
    this._headerPlaceholder = document.createElement('div')
    this._headerPlaceholder.classList.add(STICKY_HEADER_PLACEHOLDER_CLASS)

    if (getComputedStyle(this._element).getPropertyValue('position') === 'absolute') {
      this._headerPlaceholder.style.setProperty('position', 'absolute')
    }

    this._element.parentNode.insertBefore(this._headerPlaceholder, this._element)
  }

  _resizeStickyHeader() {
    this._element.classList.add(STICKY_HEADER_INIT_CLASS)
    this._element.classList.remove(STICKY_HEADER_CLASS)
    const stickyHeaderHeight = this._element.getBoundingClientRect().height
    document.body.style.setProperty(CSS_HEADER_HEIGHT_PROPERTY_NAME, `${stickyHeaderHeight}px`)

    setTimeout(() => {
      this._element.classList.remove(STICKY_HEADER_INIT_CLASS)
    }, 100)

    this._updateStickyHeader()
  }

  _setStickyHeaderPositionTop() {
    const rect = this._headerPlaceholder.getBoundingClientRect()
    this._stickyHeaderPositionTop = rect.top + window.scrollY
  }

  _updateStickyHeader() {
    const { scrollY } = window
    this._setStickyHeaderPositionTop()

    if (scrollY <= this._stickyHeaderPositionTop + this._stickyHeaderOffset) {
      this._element.classList.remove(STICKY_HEADER_CLASS)
    } else {
      this._element.classList.add(STICKY_HEADER_CLASS)
    }

    if (this._stuckHeader) {
      if (scrollY < this._lastScrollTop) {
        this._element.classList.add(STICKY_HEADER_STUCK_CLASS)
      } else {
        this._element.classList.remove(STICKY_HEADER_STUCK_CLASS)
      }

      this._lastScrollTop = scrollY <= 0 ? 0 : scrollY
    }
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Header.getOrCreateInstance(el, el.dataset.ofHeader ? JSON.parse(el.dataset.ofHeader) : {})
  }
}

export default Header
