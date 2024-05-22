import BaseComponent from 'bootstrap/js/src/base-component';

/**
 * Constants
 */
const NAME = 'filed_range'

const DefaultType = {}

const Default = {}

class FieldRange extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._initField()
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
  async _initField() {
    this._updateRangeValue();

    this._element.addEventListener('input', () => {
      this._updateRangeValue();
    });
  }

  _updateRangeValue() {
    const value = this._element.value;
    const max = this._element.max || 100;
    const min = this._element.min || 0;
    const percent = ((value - min) / (max - min)) * 100;
    this._element.style.setProperty('--range-value', `${percent}%`);
  }
}

export function initMultiple(els) {
  for (const el of els) {
    FieldRange.getOrCreateInstance(el, el.dataset.ofFieldRange ? JSON.parse(el.dataset.ofFieldRange) : {})
  }
}

export default FieldRange
