import BaseComponent from 'bootstrap/js/src/base-component';
import {getElement} from "bootstrap/js/src/util";

/**
 * Constants
 */
const NAME = 'filed_sync'

const DefaultType = {
  target: 'element|string|undefined',
  mapper: 'array|undefined',
}

const Default = {
  target: undefined,
  mapper: undefined,
}

class FieldSync extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._targetInput = getElement(this._config.target)
    this._mapper = this._config.mapper || [];
    this._initFieldSync();
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
  _initFieldSync() {
    if (this._targetInput) {
      this._targetInput.addEventListener('input', this._handleInput.bind(this));
    }
  }

  _handleInput(event) {
    let value = event.target.value;


    if (this._mapper.length > 0) {
      const mappedValue = this._mapper.find(item => item.label.trim() === value.trim());

      if (mappedValue) {
        value = mappedValue.value;
      }
    }
    this._element.value = value;
  }
}

export function initMultiple(els) {
  for (const el of els) {
    FieldSync.getOrCreateInstance(el, el.dataset.ofFieldSync ? JSON.parse(el.dataset.ofFieldSync) : {})
  }
}

export default FieldSync
