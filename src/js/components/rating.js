import BaseComponent from 'bootstrap/js/src/base-component'
import Raty from 'raty-js'

/**
 * Constants
 */
const NAME = 'rating'
const EVENT_RATING_CLICKED = 'clicked.of.rating'

const DefaultType = {
  half: 'boolean',
  number: 'number',
  readOnly: 'boolean',
  score: '(number|undefined)',
}

const Default = {
  half: false,
  number: 5,
  readOnly: false,
  score: undefined,
}

class Rating extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._initRating()
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
  setReadOnly(value) {
    this._raty.readOnly(value)
  }

  // Private
  _initRating() {
    const options = {
      click: value => this._onClickEvent(value),
      half: this._config.half,
      number: this._config.number,
      readOnly: this._config.readOnly,
      score: this._config.score,
      space: false,
      starHalf: 'star-half',
      starOff: 'star-off',
      starOn: 'star-on',
      starType: 'i',
    }

    this._raty = new Raty(this._element, options).init()
  }

  _onClickEvent(value) {
    this._element.dispatchEvent(new CustomEvent(EVENT_RATING_CLICKED, {
      detail: {
        rating: value
      }
    }))
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Rating.getOrCreateInstance(el, el.dataset.ofRating ? JSON.parse(el.dataset.ofRating) : {})
  }
}

export default Rating
