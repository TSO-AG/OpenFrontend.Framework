import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'elements_filter'
const EVENT_COMPONENT_INITIALIZED = 'initialized.of.elements_filter'
const ALL_VALUES_WILDCARD = '*'
const MULTIPLE_VALUES_SEPARATOR = ','

const DefaultType = {
  activeClass: 'string',
  hideClass: 'string',
  initialFilter: '(string|undefined)',
  target: '(string|object|undefined)',
  urlHashId: '(string|undefined)',
}

const Default = {
  activeClass: 'active',
  hideClass: 'd-none',
  initialFilter: undefined,
  target: undefined,
  urlHashId: undefined,
}

class ElementsFilter extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._targetElement = (typeof this._config.target === 'string') ? document.querySelector(this._config.target) : this._config.target
    this._togglerElements = [...this._element.querySelectorAll('[data-of-elements-filter-toggle]')]

    if (this._togglerElements.length > 0) {
      this._initTogglers()
    }

    let preventInitialFilter = false

    if (this._config.urlHashId) {
      preventInitialFilter = this._initUrlHash()
    }

    if (this._config.initialFilter && !preventInitialFilter) {
      this.filter(this._config.initialFilter)
    }

    this._element.dispatchEvent(new CustomEvent(EVENT_COMPONENT_INITIALIZED))
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
  filter(value) {
    const valueType = typeof value
    let callback

    if (valueType === 'function') {
      callback = value
    } else if (valueType === 'string') {
      callback = this._filterElementCallback(value)

      // Set the active toggler but only if the value is a string
      for (const el of this._togglerElements) {
        el.dataset.ofElementsFilterToggle === value ? el.classList.add(this._config.activeClass) : el.classList.remove(this._config.activeClass)
      }
    } else {
      throw new Error(`Unsupported value type: ${valueType}. Supported values are "function" and "string".`)
    }

    for (const element of this._targetElement.children) {
      callback(element) ? element.classList.remove(this._config.hideClass) : element.classList.add(this._config.hideClass)
    }
  }

  // Private
  _initTogglers() {
    for (const toggler of this._togglerElements) {
      toggler.addEventListener('click', e => {
        e.preventDefault()

        // Do nothing if the toggler is already active
        if (toggler.classList.contains(this._config.activeClass)) {
          return
        }

        const value = toggler.dataset.ofElementsFilterToggle

        this.filter(value)

        // Update the URL hash
        if (this._config.urlHashId) {
          window.history.replaceState(null, '', window.location.href.split('#')[0] + this._formatUrlHash(value))
        }
      })
    }
  }

  _initUrlHash() {
    window.addEventListener('hashchange', () => this._checkUrlHash())

    return this._checkUrlHash()
  }

  _checkUrlHash() {
    const { hash } = window.location

    if (!hash || !hash.startsWith(`#${this._config.urlHashId}`)) {
      return false
    }

    const value = hash.slice(Math.max(0, this._config.urlHashId.length + 2)) // strip hash and prefix divider

    if (!value) {
      return false
    }

    this.filter(value)

    return true
  }

  _formatUrlHash(value) {
    if (value === ALL_VALUES_WILDCARD) {
      return ''
    }

    return `#${this._config.urlHashId}-${value}`
  }

  _filterElementCallback(value) {
    const values = value.split(MULTIPLE_VALUES_SEPARATOR)

    return function (element) {
      if (values.includes(ALL_VALUES_WILDCARD)) {
        return true
      }

      const itemValue = element.dataset.ofElementsFilterItem.split(MULTIPLE_VALUES_SEPARATOR)

      // Return true if at least one of the values matches
      for (const v of values) {
        if (itemValue.includes(v)) {
          return true
        }
      }

      return false
    }
  }
}

export function initMultiple(els) {
  for (const el of els) {
    ElementsFilter.getOrCreateInstance(el, el.dataset.ofElementsFilter ? JSON.parse(el.dataset.ofElementsFilter) : {})
  }
}

export default ElementsFilter
