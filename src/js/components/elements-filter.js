import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'elements_filter'
const EVENT_COMPONENT_INITIALIZED = 'initialized.of.elements_filter'

const DefaultType = {
  activeClass: 'string',
  hideClass: 'string',
  target: '(string|object|undefined)',
  urlHashId: '(string|undefined)',
}

const Default = {
  activeClass: 'active',
  hideClass: 'd-none',
  target: undefined,
  urlHashId: undefined,
}

class ElementsFilter extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._targetElement = (typeof this._config.target === 'string') ? document.querySelector(this._config.target) : this._config.target;
    this._togglerElements = [...this._element.querySelectorAll('[data-of-elements-filter-toggle]')];

    if (this._togglerElements.length > 0) {
      this._initTogglers();
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
    const valueType = typeof value;
    let callback;

    if (valueType === 'function') {
      callback = value;
    } else if (valueType === 'string') {
      callback = this._filterElementCallback(value);
    } else {
      throw new Error(`Unsupported value type: ${valueType}. Supported values are "function" and "string".`)
    }

    [...this._targetElement.children].forEach(element => callback(element) ? element.classList.remove(this._config.hideClass) : element.classList.add(this._config.hideClass));
  }

  // Private
  _initTogglers() {
    this._togglerElements.forEach(toggler => {
      toggler.addEventListener('click', e => {
        e.preventDefault();

        // Do nothing if the toggler is already active
        if (toggler.classList.contains(this._config.activeClass)) {
          return;
        }

        // Filter the elements
        this.filter(toggler.dataset.ofElementsFilterToggle);

        // Change the active CSS class
        this._togglerElements.forEach(el => el.dataset.ofElementsFilterToggle === toggler.dataset.ofElementsFilterToggle ? el.classList.add(this._config.activeClass) : el.classList.remove(this._config.activeClass))
      });
    })
  }

  _filterElementCallback(value) {
    const values = value.split(',');

    return function (element) {
      if (values.includes('*')) {
        return true;
      }

      const itemValue = element.dataset.ofElementsFilterItem.split(',');

      // Return true if at least one of the values matches
      for (let v of values) {
        if (itemValue.includes(v)) {
          return true;
        }
      }

      return false;
    }
  }
}

export function initMultiple(els) {
  for (const el of els) {
    ElementsFilter.getOrCreateInstance(el, el.dataset.ofElementsFilter ? JSON.parse(el.dataset.ofElementsFilter) : {})
  }
}

export default ElementsFilter
