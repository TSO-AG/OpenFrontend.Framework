import BaseComponent from 'bootstrap/js/src/base-component'
import {Calendar as FullCalendar, createPlugin} from '@fullcalendar/core'
import {BootstrapTheme as BootstrapThemeCore} from '@fullcalendar/bootstrap5/internal.js';
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';

// Create the Bootstrap theme
class BootstrapTheme extends BootstrapThemeCore {}

BootstrapTheme.prototype.baseIconClass = '';

BootstrapTheme.prototype.classes.button = 'btn'

BootstrapTheme.prototype.iconClasses = {
  prev: 'ofi-caret-left-fill',
  next: 'ofi-caret-right-fill',
  prevYear: 'ofi-caret-left-fill',
  nextYear: 'ofi-caret-right-fill',
  dayGridMonth: 'ofi-grid-fill',
  listMonth: 'ofi-list',
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
      eventClick: e => this._openEventPopover(e),
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      },
      firstDay: 1,
      headerToolbar: {
        start: 'title',
        center: '',
        end: 'dayGridMonth,listMonth today prev,next',
      },
      dayMaxEvents: 2,
      initialView: 'dayGridMonth',
      plugins: [bootstrapThemePlugin, dayGridPlugin, listPlugin],
      themeSystem: 'bootstrap',
    }

    this._calendar = new FullCalendar(this._element, options)
    this._calendar.render()

    this._element.dispatchEvent(new CustomEvent(EVENT_CALENDAR_INITIALIZED))
  }

  async _openEventPopover(info) {
    const eventData = this._config.events[info.event.id];

    if (!eventData || !eventData.content) {
      return
    }

    const popoverOptions = {
      content: eventData.content,
      html: true,
      placement: 'auto',
      sanitize: false,
    }

    if (this._calendar.view.type === 'listMonth') {
      popoverOptions.fallbackPlacements = ['top', 'bottom', 'right', 'left']
      popoverOptions.placement = 'top'
    }

    const popover = await openFrontend.Popover.then(component => component.getOrCreateInstance(info.el, popoverOptions))

    if (popover._isShown()) {
      popover.hide()
      popover.removeClickListener()
    } else {
      this._hidePopoverOnClickOutside(popover, (this._calendar.view.type === 'listMonth') ? info.jsEvent.target : null)
      popover.show()
    }
  }

  _hidePopoverOnClickOutside(popover, actuallyClickedContainerElement) {
    const outsideClickListener = event => {
      // Close the popover:
      // 1. the click is outside the popover, and
      // 2a. the click is not on the popover element , or
      // 2b. the click is outside  the actually clicked container element (like in the list view, the <a> is the popover element, but the clicked element is its parent <tr>).
      if (!popover.tip.contains(event.target)
        && (
          (actuallyClickedContainerElement === null && popover._element !== event.target)
          || (actuallyClickedContainerElement !== null && !actuallyClickedContainerElement.contains(event.target))
        )
      ) {
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
