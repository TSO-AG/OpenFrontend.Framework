import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'header'
const CSS_HEADER_HEIGHT_PROPERTY_NAME = '--bs-header-height'
const COLLAPSE_ELEMENT_SELECTOR = '.header-collapse'

const DefaultType = {}

const Default = {}

class Header extends BaseComponent {
  constructor(element, config) {
    super(element, config)
    this._headerCollapseElements = element.querySelectorAll(COLLAPSE_ELEMENT_SELECTOR)
    this._setHeaderHeight()
    this._initTriggers()
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

  _setHeaderHeight() {
    const resizeObserver = new ResizeObserver(this._setHeaderHeightProperty.bind(this))
    resizeObserver.observe(this._element)
  }

  _setHeaderHeightProperty(entries) {
    for (const entry of entries) {
      const headerHeight = `${entry.target.offsetHeight}px`
      this._element.style.setProperty(CSS_HEADER_HEIGHT_PROPERTY_NAME, headerHeight)
    }
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Header.getOrCreateInstance(el, el.dataset.ofHeader ? JSON.parse(el.dataset.ofHeader) : {})
  }
}

export default Header
