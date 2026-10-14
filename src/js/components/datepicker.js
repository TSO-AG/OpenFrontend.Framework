import flatpickr from 'flatpickr'
import BaseComponent from 'bootstrap/js/src/base-component';
import {getElement} from 'bootstrap/js/src/util';

/**
 * Constants
 */
const NAME = 'datepicker'
const EVENT_DATEPICKER_INITIALIZED = 'initialized.of.datepicker'
const LOCALES = {
  de: () => import('flatpickr/dist/l10n/de.js').then(m => m.default.de),
  fr: () => import('flatpickr/dist/l10n/fr.js').then(m => m.default.fr),
  it: () => import('flatpickr/dist/l10n/it.js').then(m => m.default.it),
}

const DefaultType = {
  dateFormat: 'string',
  defaultDate: 'string|undefined',
  defaultHour: 'number',
  defaultMinute: 'number',
  enableTime: 'boolean',
  inline: 'boolean',
  maxDate: 'string|Date|undefined',
  minDate: 'string|Date|undefined',
  mode: 'string',
  noCalendar: 'boolean',
  rangeEndInput: 'string|Element|undefined',
  rangeStartInput: 'string|Element|undefined',
  rangeSeparator: 'string',
}

const Default = {
  dateFormat: 'd.m.Y',
  defaultDate: undefined,
  defaultHour: 12,
  defaultMinute: 0,
  enableTime: false,
  inline: false,
  maxDate: undefined,
  minDate: undefined,
  mode: 'single',
  noCalendar: false,
  rangeEndInput: undefined,
  rangeStartInput: undefined,
  rangeSeparator: ' - ',
}

class Datepicker extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._initDatepicker()
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
  async _initDatepicker() {
    this._datepicker = flatpickr(this._element, await this._getOptions())
    this._element.dispatchEvent(new CustomEvent(EVENT_DATEPICKER_INITIALIZED))
  }

  async _getOptions() {
    const options = {
      ...this._config,
      // eslint-disable-next-line camelcase
      time_24hr: true,
    };

    let currentLocale = document.documentElement.lang;

    // Map the locale with country code to the locale
    if (currentLocale.length > 2) {
      currentLocale = currentLocale.substring(0, 2);
    }

    if (currentLocale !== 'en' && LOCALES.hasOwnProperty(currentLocale)) {
      options.locale = await LOCALES[currentLocale]();
    }

    options.locale = options.locale || {};
    options.locale.rangeSeparator = this._config.rangeSeparator;

    if (this._config.rangeEndInput) {
      this._linkRangeInput(options, this._config.rangeEndInput, 'minDate');
    }

    if (this._config.rangeStartInput) {
      this._linkRangeInput(options, this._config.rangeStartInput, 'maxDate');
    }

    return options;
  }

  _linkRangeInput(options, selector, otherLimit) {
    const otherInput = getElement(selector);

    if (!otherInput) {
      return;
    }

    const ownLimit = otherLimit === 'minDate' ? 'maxDate' : 'minDate';
    const isOutOfRange = (otherDate, date) => ((otherLimit === 'minDate') ? (otherDate < date) : (otherDate > date));

    // Other picker already initialized: take its date as this input's limit
    const otherDate = otherInput._flatpickr?.selectedDates[0];

    if (otherDate) {
      options[ownLimit] = otherDate;
    }

    // Whichever picker initializes second links the pair in both directions
    options.onReady = ([date], dateStr, instance) => {
      const otherPicker = otherInput._flatpickr;

      if (!otherPicker) {
        return;
      }

      if (date) {
        otherPicker.set(otherLimit, date);
      }

      const otherDate = otherPicker.selectedDates[0];

      if (otherDate) {
        instance.set(ownLimit, otherDate);
      }
    };

    options.onChange = ([date]) => {
      const picker = otherInput._flatpickr;

      picker.set(otherLimit, date ?? null);

      // Clear the other date when it falls outside the new limit
      if (date && picker.selectedDates[0] && isOutOfRange(picker.selectedDates[0], date)) {
        picker.clear();
      }
    };
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Datepicker.getOrCreateInstance(el, el.dataset.ofDatepicker ? JSON.parse(el.dataset.ofDatepicker) : {})
  }
}

export default Datepicker
