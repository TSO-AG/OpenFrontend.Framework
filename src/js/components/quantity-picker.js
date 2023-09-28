import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'quantity_picker'
const EVENT_PICKER_INITIALIZED = 'initialized.of.quantity_picker'
const EVENT_PICKER_CHANGED = 'changed.of.quantity_picker'

const DefaultType = {}

const Default = {}

class QuantityPicker extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._input = this._element.querySelector('input[type="number"]');
    this._input.addEventListener('change', () => this._onChange());

    this._minusButton = this._element.querySelector('[data-of-quantity-picker-minus]');
    this._plusButton = this._element.querySelector('[data-of-quantity-picker-plus]');

    this._initButton(this._minusButton, -1)
    this._initButton(this._plusButton, 1)

    this._element.dispatchEvent(new CustomEvent(EVENT_PICKER_INITIALIZED))
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
  getMin() {
    return parseInt(this._input.min) || null;
  }

  getMax() {
    return parseInt(this._input.max) || null;
  }

  getStep() {
    return parseInt(this._input.step) || 1;
  }

  getValue() {
    return parseInt(this._input.value) || 0;
  }

  // Private
  _initButton(button, factor) {
    button.addEventListener('click', e => {
      e.preventDefault();

      this._input.value = this._getNextValue(factor);
      this._onChange();
    });

    this._onChange();
  }

  _updateButton(button, limit, factor) {
    if (limit === null) {
      return;
    }

    const nextValue = this.getValue() + (this.getStep() * factor);

    button.disabled = (factor > 0) ? (nextValue > limit) : (nextValue < limit);
  }

  _onChange() {
    this._updateButton(this._minusButton, this.getMin(), -1)
    this._updateButton(this._plusButton, this.getMax(), 1)
    this._element.dispatchEvent(new CustomEvent(EVENT_PICKER_CHANGED))
  }

  _getNextValue(factor) {
    const min = this.getMin();
    const max = this.getMax();

    let nextValue = this.getValue() + (this.getStep() * factor);

    // The next value cannot be lower than the limit
    if (min !== null && nextValue < min) {
      nextValue = min;
    }

    // The next value cannot be bigger than the limit
    if (max !== null && nextValue > max) {
      nextValue = max;
    }

    return nextValue;
  }
}

export function initMultiple(els) {
  for (const el of els) {
    QuantityPicker.getOrCreateInstance(el, el.dataset.ofQuantityPicker ? JSON.parse(el.dataset.ofQuantityPicker) : {})
  }
}

export default QuantityPicker
