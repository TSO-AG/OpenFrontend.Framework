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
      const endInput = getElement(this._config.rangeEndInput);

      if (endInput) {
        options.onChange = ([date]) => {
          endInput._flatpickr.set('minDate', date ?? null);

          // Clear the end date when it falls before the selected start date
          if (date && endInput._flatpickr.selectedDates[0] < date) {
            endInput._flatpickr.clear();
          }
        };
      }
    }

    if (this._config.rangeStartInput) {
      const startInput = getElement(this._config.rangeStartInput);

      if (startInput) {
        options.onChange = ([date]) => {
          startInput._flatpickr.set('maxDate', date ?? null);

          // Clear the start date when it falls after the selected end date
          if (date && startInput._flatpickr.selectedDates[0] > date) {
            startInput._flatpickr.clear();
          }
        };
      }
    }

    return options;
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Datepicker.getOrCreateInstance(el, el.dataset.ofDatepicker ? JSON.parse(el.dataset.ofDatepicker) : {})
  }
}

export default Datepicker
