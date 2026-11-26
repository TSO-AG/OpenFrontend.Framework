import BaseComponent from 'bootstrap/js/src/base-component'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

/**
 * Constants
 */
const NAME = 'header'
const CSS_HEADER_HEIGHT_PROPERTY_NAME = '--bs-header-height'
const CSS_STICKY_HEADER_HEIGHT_PROPERTY_NAME = '--bs-header-sticky-height'
const COLLAPSE_ELEMENT_SELECTOR = '.header-collapse'
const COLLAPSE_LINK_TRIGGER_SELECTOR = 'a[data-bs-toggle="collapse"]'
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
      for (const collapse of this._getShownCollapses()) {
        if (this._isClickOutsideCollapse(event, collapse)) {
          this._closeCollapses(collapse)
        }
      }
    })

    // Close the open collapse on Escape and return focus to its toggle.
    // Use the capture phase, so we can skip the event when an open dropdown is about to handle it.
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || event.defaultPrevented) {
        return
      }

      // Let the dropdown close first
      if (this._element.querySelector('.dropdown-menu.show')) {
        return
      }

      // Let the search input clear its value first
      if (event.target.matches?.('input[type="search"]') && event.target.value !== '') {
        return
      }

      for (const collapse of this._getShownCollapses()) {
        this._closeCollapses(collapse)
        this._getCollapseTriggers(collapse).find(trigger => trigger.checkVisibility())?.focus()
      }
    }, true)

    // Close the collapse when the keyboard focus leaves it (e.g. tabbing past the last menu item)
    for (const collapse of this._headerCollapseElements) {
      collapse.addEventListener('focusout', event => {
        const target = event.relatedTarget

        // No related target means the focus has left the document or was caused by a click (handled above)
        if (!target || !collapse.classList.contains('show') || collapse.contains(target)) {
          return
        }

        if (this._getCollapseTriggers(collapse).some(trigger => trigger.contains(target))) {
          return
        }

        this._closeCollapses(collapse)
      })
    }

    // Links that toggle a collapse act as buttons, so announce them as buttons and activate them with Space as well
    for (const link of this._element.querySelectorAll(COLLAPSE_LINK_TRIGGER_SELECTOR)) {
      if (!link.hasAttribute('role')) {
        link.setAttribute('role', 'button')
      }
    }

    this._element.addEventListener('keydown', event => {
      if (event.key !== ' ' || !event.target.matches(COLLAPSE_LINK_TRIGGER_SELECTOR)) {
        return
      }

      // Prevent the page from scrolling
      event.preventDefault()

      // Do not toggle repeatedly while the key is held down
      if (!event.repeat) {
        event.target.click()
      }
    })

    // Keep a logical focus order when the collapse is not placed right after its trigger in the DOM
    // (e.g. desktop menu links in a <nav>, followed by all of their collapses)
    this._element.addEventListener('keydown', event => {
      if (event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey) {
        this._handleTabKey(event)
      }
    })
  }

  _handleTabKey(event) {
    const { target } = event

    for (const collapse of this._headerCollapseElements) {
      const trigger = this._getExpandedTrigger(collapse)

      if (!trigger) {
        continue
      }

      const documentFocusables = this._getFocusableElements(document.body)
      const triggerIndex = documentFocusables.indexOf(trigger)

      // The collapse directly follows its trigger, so the natural focus order is fine
      if (triggerIndex === -1 || collapse.contains(documentFocusables[triggerIndex + 1])) {
        continue
      }

      const collapseFocusables = this._getFocusableElements(collapse)

      if (collapseFocusables.length === 0) {
        continue
      }

      let nextElement = null

      if (event.shiftKey) {
        // Shift+Tab on the first element of the collapse -> back to the trigger
        if (target === collapseFocusables[0]) {
          nextElement = trigger
        }
      } else if (target === trigger) {
        // Tab on the trigger -> into the collapse
        nextElement = collapseFocusables[0]
      } else if (target === collapseFocusables.at(-1)) {
        // Tab on the last element of the collapse -> the element after the trigger (e.g. the next menu link)
        nextElement = documentFocusables.slice(triggerIndex + 1).find(el => !collapse.contains(el))
      }

      if (nextElement) {
        event.preventDefault()
        nextElement.focus()
        return
      }
    }
  }

  // Returns the visible trigger of an open (or opening) collapse
  _getExpandedTrigger(collapseElement) {
    return this._getCollapseTriggers(collapseElement)
      .find(trigger => trigger.getAttribute('aria-expanded') === 'true' && trigger.checkVisibility())
  }

  _getFocusableElements(element) {
    // Links without href are not focusable
    return SelectorEngine.focusableChildren(element).filter(el => el.tagName !== 'A' || el.hasAttribute('href'))
  }

  _getShownCollapses() {
    return [...this._headerCollapseElements].filter(collapse => collapse.classList.contains('show'))
  }

  _getCollapseTriggers(collapseElement) {
    if (!collapseElement.id) {
      return []
    }

    const id = CSS.escape(collapseElement.id)

    return [...document.querySelectorAll([
      `[data-bs-toggle="collapse"][data-bs-target="#${id}"]`,
      `[data-bs-toggle="collapse"][href="#${id}"]`,
      `[data-of-collapse-link][data-bs-target="#${id}"]`,
    ].join(','))]
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
      document.documentElement.style.setProperty(CSS_STICKY_HEADER_HEIGHT_PROPERTY_NAME, headerHeight)
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
    document.documentElement.style.setProperty(CSS_HEADER_HEIGHT_PROPERTY_NAME, `${stickyHeaderHeight}px`)

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

    // Update the stuck header, but consider the fact that the document may be changing its height (e.g. via collapsibles)
    if (this._stuckHeader && !document.body.hasAttribute('data-of-height-changing')) {
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
