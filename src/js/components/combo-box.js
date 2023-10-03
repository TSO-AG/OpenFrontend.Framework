import BaseComponent from 'bootstrap/js/src/base-component'
import { getElement } from 'bootstrap/js/src/util'

function defaultFormatter(data) {
  const chunks = []

  for (const field of Object.values(data)) {
    const value = this.getValue(field)

    if (!value) {
      continue
    }

    chunks.push(this.getSummary(field, value))
  }

  return chunks.join(', ')
}

/**
 * Constants
 */
const NAME = 'combo_box'
const COMBO_BOX_INITIALIZED = 'initialized.of.combo_box'
const COMBO_BOX_CHANGED = 'changed.of.combo_box'

const DefaultType = {
  format: 'function|undefined',
  target: 'element|string|undefined',
}

const Default = {
  format: undefined,
  target: undefined,
}

class ComboBox extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._config.format = this._config.format || defaultFormatter.bind(this)
    this._fields = [...this._element.querySelectorAll('input, select')].filter(field => Boolean(field.name))
    this._target = getElement(this._config.target)

    this._initFields()
    this._onChange()

    this._element.dispatchEvent(new CustomEvent(COMBO_BOX_INITIALIZED))
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
  getData() {
    const data = {}

    for (const field of this._fields) {
      data[field.name] = field
    }

    return data
  }

  getSummary(field, value) {
    if (field.type === 'checkbox') {
      return field.labels[0].textContent
    }

    // Find the option label
    if (field.tagName.toLowerCase() === 'select') {
      value = field.querySelector(`option[value="${value}"]`).textContent
    }

    return `${field.labels[0].textContent || field.name}: ${value}`
  }

  getValue(field) {
    let { value } = field

    // Handle the input[type="number"] the correctly, mostly for the case that "0" is an empty value
    if (field.type === 'number') {
      value = Number.parseInt(value, 10)
    } else if (field.type === 'checkbox') {
      // Handle the checkboxes
      value = field.checked
    }

    return value
  }

  // Private
  _initFields() {
    for (const field of this._fields) {
      field.addEventListener('change', () => this._onChange())

      if (field.tagName.toLowerCase() === 'input' || field.tagName.toLowerCase() === 'textarea') {
        field.addEventListener('keyup', () => this._onChange())
      }
    }
  }

  _onChange() {
    if (this._target) {
      const value = this._config.format(this.getData())

      if (this._target.tagName.toLowerCase() === 'input' || this._target.tagName.toLowerCase() === 'textarea') {
        this._target.value = value
      } else {
        this._target.textContent = value
      }
    }

    this._element.dispatchEvent(new CustomEvent(COMBO_BOX_CHANGED))
  }
}

export function initMultiple(els) {
  for (const el of els) {
    ComboBox.getOrCreateInstance(el, el.dataset.ofComboBox ? JSON.parse(el.dataset.ofComboBox) : {})
  }
}

export default ComboBox
