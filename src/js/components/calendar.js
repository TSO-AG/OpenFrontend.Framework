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
const EVENT_CALENDAR_BEFORE_POPOVER_OPEN = 'before_popover_open.of.calendar'

const MINI_VIEW_VISIBLE_MONTHS = 2

const LOCALES = {
  de: () => import('@fullcalendar/core/locales/de').then(m => m.default),
  fr: () => import('@fullcalendar/core/locales/fr').then(m => m.default),
  it: () => import('@fullcalendar/core/locales/it').then(m => m.default),
}

const DefaultType = {
  events: 'array',
  eventsFeedUrl: 'string|undefined',
  eventsFeedUrlStartParam: 'string',
  eventsFeedUrlEndParam: 'string',
  layout: 'string',
  miniMonthMinWidth: 'number',
  title: 'string|undefined',
  viewToggler: 'boolean',
}

const DefaultEventType = {
  allDay: 'boolean',
  content: 'string|undefined',
  contentUrl: 'string|undefined',
  display: 'string|undefined',
  end: 'date|number|string|undefined',
  start: 'date|number|string',
  title: 'string',
}

const Default = {
  events: [],
  eventsFeedUrl: undefined,
  eventsFeedUrlStartParam: 'calendar_start',
  eventsFeedUrlEndParam: 'calendar_end',
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
    this._eventsCache = undefined
    this._eventsSlicedCache = new Map()

    this._calendar = new FullCalendar(this._element, await this._getOptions())
    this._calendar.render()

    this._element.dispatchEvent(new CustomEvent(EVENT_CALENDAR_INITIALIZED))
  }

  async _openEventPopover(info) {
    const event = info.event;
    let content;

    if (event._def.extendedProps.contentUrl) {
      content = await this._fetchEventContentFromUrl(event);
    } else {
      content = this._fetchEventContentFromData(event);
    }

    if (!content) {
      return;
    }

    const element = document.createElement('div');
    element.innerHTML = content;

    // Trigger an event with element, which allows to dynamically change the popover content
    document.dispatchEvent(new CustomEvent(EVENT_CALENDAR_BEFORE_POPOVER_OPEN, {
      detail: { element, info },
    }));

    await this._openPopover(info.el, element.innerHTML, (this._calendar.view.type === 'listMonth') ? info.jsEvent.target : null);
  }

  _fetchEventContentFromData(event) {
    return this._getEvents()[event.id]?.content;
  }

  async _fetchEventContentFromUrl(event) {
    return fetch(event._def.extendedProps.contentUrl, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
    }).then(response => response.text());
  }

  async _openPopover(el, content, clickedEl = null) {
    const popoverOptions = {
      content,
      html: true,
      placement: 'auto',
      sanitize: false,
    }

    if (this._calendar.view.type === 'listMonth') {
      popoverOptions.fallbackPlacements = ['top', 'bottom', 'right', 'left']
      popoverOptions.placement = 'top'
    }

    const popover = await openFrontend.Popover.then(component => component.getOrCreateInstance(el, popoverOptions))

    if (popover._isShown()) {
      popover.hide()
      popover.removeClickListener()
    } else {
      this._hidePopoverOnClickOutside(popover, clickedEl)
      popover.show()
    }
  }

  async _fetchEvents(fetchInfo) {
    if (this._config.eventsFeedUrl) {
      return this._fetchEventsFromUrl(fetchInfo);
    }

    return this._fetchEventsFromData(fetchInfo);
  }

  async _fetchEventsFromData(fetchInfo) {
    return new Promise(resolve => {
      const cacheKey = `${fetchInfo.startStr}_${fetchInfo.endStr}`

      if (!this._eventsSlicedCache.has(cacheKey)) {
        this._eventsSlicedCache.set(cacheKey, this._getEvents().filter(v => {
          let start = v.start;

          if (typeof start === 'string') {
            start = new Date(start);
          }

          return start >= fetchInfo.start && start < fetchInfo.end;
        }))
      }

      resolve(this._eventsSlicedCache.get(cacheKey))
    })
  }

  async _fetchEventsFromUrl(fetchInfo) {
    return new Promise(resolve => {
      fetch(`${this._config.eventsFeedUrl}${this._config.eventsFeedUrl.includes('?') ? '&' : '?'}${this._config.eventsFeedUrlStartParam}=${fetchInfo.startStr}&${this._config.eventsFeedUrlEndParam}=${fetchInfo.endStr}`, {
        method: 'GET',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
      }).then(response => response.json()).then(events => resolve(events));
    });
  }

  async _getOptions() {
    const options = {
      events: (fetchInfo, successCallback) => this._fetchEvents(fetchInfo).then(successCallback),
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
        end: 'today prev,next',
      },
      height: 'auto',
      plugins: [bootstrapThemePlugin],
      themeSystem: 'bootstrap',
      stickyHeaderDates: false,
    }

    let currentLocale = document.documentElement.lang;

    // Map the locale with country code to the locale
    if (currentLocale.length > 2) {
      currentLocale = currentLocale.substring(0, 2);
    }

    if (currentLocale !== 'en' && LOCALES.hasOwnProperty(currentLocale)) {
      options.locale = await LOCALES[currentLocale]();
    }

    if (this._config.title) {
      options.titleFormat = () => this._config.title;
    }

    options.datesSet = () => {
      this._updateTodayButton()
    }

    options.viewDidMount = () => {
      const buttons = [...this._element.querySelectorAll('button.fc-today-button, button.fc-prev-button, button.fc-next-button')];
      const hideButtons = buttons.filter(v => v.disabled).length === buttons.length;

      // Hide the today/prev/next buttons if they are all disabled
      buttons.forEach(button => {
        if (button.classList.contains('fc-prev-button') || button.classList.contains('fc-next-button')) {
          button.parentElement.classList.toggle('d-none', hideButtons);
        }

        button.classList.toggle('d-none', hideButtons);
      });

      this._updateTodayButton()
    }

    switch (this._config.layout) {
      case 'full':
        options.initialView = 'dayGridMonth'
        options.plugins.push(dayGridPlugin, listPlugin)
        options.listDayFormat = {
          month: 'long',
          year: 'numeric',
          day: 'numeric',
          weekday: 'long',
        };
        options.listDaySideFormat = false;
        options.headerToolbar.end = this._config.viewToggler ? 'dayGridMonth,listMonth today prev,next' : 'today prev,next'
        options.views = {
          dayGridMonth: {
            type: 'dayGridMonth',
            dayMaxEvents: 1,
          }
        }
        options.eventDidMount = info => {
          const link = info.el.querySelector('.fc-list-event-title a');

          if (!link) {
            return;
          }

          const eventProps = info.event._def.extendedProps;
          let buffer = `<div class="fc-list-event-title-link-text">${link.textContent}</div>`;

          if (eventProps.subtitle) {
            buffer += `<div class="fc-list-event-title-link-subtitle">${eventProps.subtitle}</div>`;
          }

          if (eventProps.teaser) {
            buffer += `<div class="fc-list-event-title-link-teaser">${eventProps.teaser}</div>`;
          }

          if (eventProps.location) {
            buffer = `<div class="fc-list-event-title-link-wrapper">
<div class="fc-list-event-title-link-content">${buffer}</div>
<div class="fc-list-event-title-link-location">${eventProps.location}</div>
</div>`;
          }

          link.innerHTML = buffer;
        };
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
        options.eventDidMount = info => info.el.closest('td')?.classList.add('fc-of-mini-event-day')
        options.moreLinkClick = async info => {
          const events = this._getEvents();

          await this._openPopover(
            info.jsEvent.target,
            info.allSegs.map(v => events[v.event.id]?.content ? `<div class="popover-body-row">${events[v.event.id].content}</div>` : '').join(''),
            info.jsEvent.target,
          )

          // Return a fake string, so nothing is rendered by FullCalendar
          return '_';
        }
        options.moreLinkDidMount = info => {
          info.el.closest('td')?.classList.add('fc-of-mini-event-day')
          info.el.title = '' // Remove the tooltip in popover
        }
        break;
      default:
        throw new Error(`Unsupported layout: ${this._config.layout}`)
    }

    // Calculate the earliest and latest date to display
    if (!this._config.eventsFeedUrl) {
      const events = this._getEvents();

      if (events.length > 0) {
        const now = new Date();
        const initialDate = events.find(v => v.start >= now);

        // Find the initial date, which is the first future event
        if (initialDate) {
          options.initialDate = initialDate.start;
        }

        options.validRange = this._getValidRange(events);
      }
    }

    return options;
  }

  // Wrap the today button text with <span>
  _updateTodayButton() {
    const todayButton = this._element.querySelector('button.fc-today-button');

    if (!todayButton) {
      return;
    }

    todayButton.innerHTML = `<span>${this._calendar.getOption('buttonText').today}</span>`;
  }

  _getEvents() {
    if (this._eventsCache === undefined) {
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

      this._eventsCache = events.map((event, index) => ({...event, id: index}));
    }

    return this._eventsCache;
  }

  _getValidRange(events) {
    if (events.length === 0) {
      return {};
    }

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
