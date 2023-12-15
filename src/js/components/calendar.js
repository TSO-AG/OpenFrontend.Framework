import BaseComponent from 'bootstrap/js/src/base-component'
import {Calendar as FullCalendar} from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '../plugins/fullcalendar/multi-month';
import bootstrapThemePlugin from '../plugins/fullcalendar/bootstrap-theme';

/**
 * Constants
 */
const NAME = 'calendar'
const EVENT_CALENDAR_INITIALIZED = 'initialized.of.calendar'
const MINI_VIEW_VISIBLE_MONTHS = 2
const LOCALES = {
  de: () => import('@fullcalendar/core/locales/de').then(m => m.default),
}

const DefaultType = {
  events: 'array',
  layout: 'string',
  miniMonthMinWidth: 'number',
  title: 'string|undefined',
  viewToggler: 'boolean',
}

const DefaultEventType = {
  allDay: 'boolean',
  content: 'string',
  end: 'date|number|string|undefined',
  start: 'date|number|string',
  title: 'string',
}

const Default = {
  events: [],
  layout: 'full',
  miniMonthMinWidth: 265,
  title: undefined,
  viewToggler: true,
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
  async _initCalendar() {
    this._calendar = new FullCalendar(this._element, await this._getOptions())
    this._calendar.render()

    this._element.dispatchEvent(new CustomEvent(EVENT_CALENDAR_INITIALIZED))
  }

  async _openEventPopover(info, events) {
    const eventData = events[info.event.id]

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

  async _getOptions() {
    const events = this._getEvents();

    const options = {
      events,
      eventClick: e => this._openEventPopover(e, events),
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      },
      firstDay: 1,
      headerToolbar: {
        start: 'title',
        center: '',
        end: 'today prev,next',
      },
      height: 'auto',
      plugins: [bootstrapThemePlugin],
      themeSystem: 'bootstrap',
    }

    if (document.documentElement.lang !== 'en') {
      options.locale = await LOCALES[document.documentElement.lang]();
    }

    if (this._config.title) {
      options.titleFormat = () => this._config.title;
    }

    switch (this._config.layout) {
      case 'full':
        options.initialView = 'dayGridMonth'
        options.plugins.push(dayGridPlugin, listPlugin)
        options.headerToolbar.end = this._config.viewToggler ? 'dayGridMonth,listMonth today prev,next' : 'today prev,next'
        options.views = {
          dayGridMonth: {
            type: 'dayGridMonth',
            dayMaxEvents: 1,
          }
        }
        break;
      case 'mini':
        options.initialView = 'miniView'
        options.plugins.push(multiMonthPlugin)
        options.multiMonthMinWidth = this._config.miniMonthMinWidth;
        options.multiMonthTitleFormat = { month: 'long', year: 'numeric' };
        options.views = {
          miniView: {
            type: 'multiMonth',
            duration: { months: MINI_VIEW_VISIBLE_MONTHS },
            dayMaxEvents: 1,
            dayMaxEventRows: 0,
            showNonCurrentDates: false,
          }
        }
        options.eventDidMount = data => data.el.closest('td')?.classList.add('fc-of-mini-event-day')
        options.moreLinkDidMount = data => data.el.closest('td')?.classList.add('fc-of-mini-event-day')
        break;
      default:
        throw new Error(`Unsupported layout: ${this._config.layout}`)
    }

    // Calculate the earliest and latest date to display
    if (events.length > 0) {
      options.validRange = this._getValidRange(events);
    }

    return options;
  }

  _getEvents() {
    this._config.events.forEach(event => this._typeCheckConfig(event, DefaultEventType))

    let events = [...this._config.events];

    // Split the multi-day events, so every day has a separate event. For example, if an event lasts
    // from 1st January till 3rd January, we want to have 3 events: 01.01, 02.01, 03.01. This way we can make
    // the whole day cell clickable in the calendar, contrary to multi-day event which HTML element
    // is placed on the first day of the event and spans over the multiple cells.
    if (this._config.layout === 'mini') {
      const splitEvents = [];

      for (let event of events) {
        // The event has no "end" property, so it's a single-day event
        if (!event.hasOwnProperty('end')) {
          splitEvents.push(event);
          continue;
        }

        const startDate = new Date(event.start);
        const endDate = new Date(event.end);

        // It's a single-day event
        if (startDate.getFullYear() === endDate.getFullYear() && startDate.getMonth() === endDate.getMonth() && startDate.getDate() === endDate.getDate()) {
          continue;
        }

        const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0, 0, 0);
        const targetDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 0, 0, 0, 0);
        const dates = [];

        let iterations = 0;

        while (currentDate < targetDate) {
          splitEvents.push({
            ...event,
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59),
          });

          currentDate.setDate(currentDate.getDate() + 1);
        }
      }

      events = splitEvents;
    }

    return events.map((event, index) => ({...event, id: index}));
  }

  _getValidRange(events) {
    const earliestDate = new Date(events.map(v => v.start).reduce((prev, curr) => prev < curr ? prev : curr));
    let latestDate = events.filter(v => v.hasOwnProperty('end')).map(v => v.end).reduce((prev, curr) => prev > curr ? prev : curr, 0);

    if (!latestDate) {
      latestDate = events.map(v => v.start).reduce((prev, curr) => prev > curr ? prev : curr);
    }

    // Make sure it's a Date object
    latestDate = new Date(latestDate);

    // Create the start/end date ranges
    let start = new Date(earliestDate.getFullYear(), earliestDate.getMonth(), 1);
    let end = new Date(latestDate.getFullYear(), latestDate.getMonth() + 1, 0);

    // Ensure that there is at least 2-month interval between the start and end date, as we are always showing 2 months.
    // If the interval would be 1 or 3 months, then we would get a JS error from the FullCalendar.
    if (this._config.layout === 'mini') {
      let months = ((end.getFullYear() - start.getFullYear()) * 12) - start.getMonth() + end.getMonth() + 1;

      // Make sure it's at least two months
      if (months <= MINI_VIEW_VISIBLE_MONTHS) {
        months = MINI_VIEW_VISIBLE_MONTHS;
      } else if (months % MINI_VIEW_VISIBLE_MONTHS !== 0) {
        // Otherwise, round it up to the next multiple of visible months
        months = Math.ceil(months / MINI_VIEW_VISIBLE_MONTHS) * MINI_VIEW_VISIBLE_MONTHS;
      }

      let newEnd = new Date(start);
      newEnd.setMonth(newEnd.getMonth() + months);

      if (newEnd > end) {
        end = newEnd;
      }
    }

    return {start, end}
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
