import BaseComponent from 'bootstrap/js/src/base-component'
import {Calendar as FullCalendar, createPlugin} from '@fullcalendar/core'
import {BootstrapTheme as BootstrapThemeCore} from '@fullcalendar/bootstrap5/internal.js';
import dayGridPlugin from '@fullcalendar/daygrid'

// Create the Bootstrap theme
class BootstrapTheme extends BootstrapThemeCore {}

BootstrapTheme.prototype.baseIconClass = '';
BootstrapTheme.prototype.iconClasses = {
  prev: 'ofi-caret-left-fill',
  next: 'ofi-caret-right-fill',
  prevYear: 'ofi-caret-left-fill',
  nextYear: 'ofi-caret-right-fill',
}

const bootstrapThemePlugin = createPlugin({
  name: 'bootstrap',
  themeClasses: {
    bootstrap: BootstrapTheme,
  },
});

/**
 * Constants
 */
const NAME = 'calendar'
const EVENT_CALENDAR_INITIALIZED = 'initialized.of.calendar'

const DefaultType = {
  events: 'array',
}

const Default = {
  events: [],
}

class Calendar extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._initCalendar()
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
  _initCalendar() {
    const options = {
      events: this._config.events,
      eventTimeFormat: {
        hour: 'numeric',
        minute: '2-digit',
        meridiem: false,
      },
      headerToolbar: {
        start: 'title',
        center: '',
        end: 'today prev,next',
      },
      initialView: 'dayGridMonth',
      plugins: [bootstrapThemePlugin, dayGridPlugin],
      themeSystem: 'bootstrap',
    }

    this._calendar = new FullCalendar(this._element, options)
    this._calendar.render()

    this._element.dispatchEvent(new CustomEvent(EVENT_CALENDAR_INITIALIZED))
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Calendar.getOrCreateInstance(el, el.dataset.ofCalendar ? JSON.parse(el.dataset.ofCalendar) : {})
  }
}

export default Calendar
