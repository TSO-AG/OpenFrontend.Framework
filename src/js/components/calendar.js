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
      events: this._config.events.map((event, index) => ({...event, id: index})),
      eventClick: e => this._openEventPopover(e.el, e.event),
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

  async _openEventPopover(eventEl, calendarEvent) {
    const eventData = this._config.events[calendarEvent.id];

    if (!eventData || !eventData.content) {
      return
    }

    const popover = await openFrontend.Popover.then(component => component.getOrCreateInstance(eventEl, {
      content: eventData.content,
      html: true,
      placement: 'auto',
      sanitize: false,
    }))

    if (popover._isShown()) {
      popover.hide()
      popover.removeClickListener()
    } else {
      this._hidePopoverOnClickOutside(popover)
      popover.show()
    }
  }

  _hidePopoverOnClickOutside(popover) {
    const outsideClickListener = event => {
      if (popover._element !== event.target && !popover.tip.contains(event.target)) {
        popover.hide()
        popover.removeClickListener()
      }
    }

    popover.removeClickListener = () => document.removeEventListener('click', outsideClickListener)
    document.addEventListener('click', outsideClickListener)
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Calendar.getOrCreateInstance(el, el.dataset.ofCalendar ? JSON.parse(el.dataset.ofCalendar) : {})
  }
}

export default Calendar
