---
layout: docs
title: Calendar
description: The calendar component is a versatile way of displaying the events.
group: components
toc: true
---

## Usage

The calendar component can be implemented with HTML markup and attribute configurations.

You can display any content in the popover. However, it is highly recommended to use the [popover content markup]({{< docsref "/components/popovers#popover-content" >}}).

{{< callout info >}}
The component uses the [FullCalendar](https://fullcalendar.io/) library behind the scenes.
{{< /callout >}}

## Examples

### Full layout

<div class="bd-example">
  <div id="calendar-full" class="calendar"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0);

  const dummyContent = `
<div class="popover-content">
  <div class="popover-content-media">
    <figure class="popover-content-image">
      <img src="assets/media/sample-image.jpg" alt="">
    </figure>
  </div>
  <div class="popover-content-inside">
    <div class="popover-content-info">December 16 @ 12:00 - 13:30</div>
    <h6 class="popover-content-title">Yoga at the Park</h6>
    <p>Join us Wednesday afternoons for yoga during your lunch break. Leave the building stress of work at the door and find the center of your breath as we practice vinyasa […]</p>
    <a href="#" class="icon-link icon-link-hover stretched-link">
      <span class="icon-link-text">Read more</span>
      {{< icon name="arrow-right" >}}
    </a>
  </div>
</div>
`;

  function getDate(day, hour = 0, minutes = 0) {
    return new Date(now.getFullYear(), now.getMonth(), day, hour, minutes);
  }

  openFrontend.Calendar.then(component => component.getOrCreateInstance('#calendar-full', {
    events: [
      {
        title: 'All day event',
        content: dummyContent,
        start: getDate(8),
        allDay: true
      },
      {
        title: 'Multiple days event',
        content: dummyContent,
        start: getDate(6),
        end: getDate(10),
        allDay: true,
        location: 'New York City',
        subtitle: 'Great party at Times Square'
      },
      {
        title: 'Exact time event',
        content: dummyContent,
        start: getDate(10, 8, 30),
        end: getDate(10, 11, 0),
        allDay: false,
      },
      {
        title: 'Dummy event 1',
        content: dummyContent,
        start: getDate(14),
        allDay: true,
      },
      {
        title: 'Dummy event 2',
        content: dummyContent,
        start: getDate(22),
        allDay: true,
      },
      {
        title: 'Dummy event 3',
        content: dummyContent,
        start: getDate(22),
        end: getDate(25),
        allDay: true,
      },
      {
        title: 'Dummy event 4',
        content: dummyContent,
        start: getDate(27, 10, 0),
        end: getDate(27, 12, 0),
        allDay: false,
      },
      {
        title: 'Dummy event 5',
        content: dummyContent,
        start: getDate(27, 14, 0),
        end: getDate(27, 16, 0),
        allDay: false,
      },
      {
        title: 'Dummy event 6',
        content: dummyContent,
        start: getDate(27, 18, 0),
        end: getDate(27, 20, 0),
        allDay: false,
      },
      {
        title: 'Dummy event 7',
        content: dummyContent,
        start: getDate(27, 22, 0),
        end: getDate(27, 23, 30),
        allDay: false,
      },
      {
        title: 'Dummy event 8',
        content: dummyContent,
        start: getDate(22, 15, 0),
        end: getDate(22, 18, 0),
        allDay: false,
      },
      {
        title: 'Next month event',
        content: dummyContent,
        start: nextMonth.setMonth(nextMonth.getMonth() + 1),
        end: nextMonth.setDate(nextMonth.getDate() + 14),
        allDay: true,
      },
    ],
  }))
})
</script>

{{< highlight html >}}
<div class="calendar" data-of-calendar='{
  "events": [
    {
      "title": "All day event",
      "content": "<div class=\"popover-event\">…</div>",
      "start": "YYYY-MM-DD",
      "allDay": true
    },
    {
      "title": "Multiple days event",
      "content": "<div class=\"popover-content\">…</div>",
      "start": "YYYY-MM-DD",
      "end": "YYYY-MM-DD",
      "allDay": true
    },
    {
      "title": "Exact time event",
      "content": "<div class=\"popover-content\">…</div>",
      "start": "YYYY-MM-DD\Thh:mm:ss",
      "end": "YYYY-MM-DD\Thh:mm:ss",
      "allDay": false
    }
  ]
}'></div>
{{< /highlight >}}

### Mini layout

<div class="bd-example">
  <div id="calendar-mini" class="calendar"></div>
  <ul class="calendar-legend">
    <li class="calendar-legend-item">
      <span class="calendar-legend-symbol calendar-legend-symbol-event"></span>
      <span class="calendar-legend-label">Event date</span>
    </li>
    <li class="calendar-legend-item">
      <span class="calendar-legend-symbol"></span>
      <span class="calendar-legend-label">Free date</span>
    </li>
  </ul>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0);
  const futureDate = new Date();

  const dummyContent = `
<div class="popover-content">
  <div class="popover-content-media">
    <figure class="popover-content-image">
      <img src="assets/media/sample-image.jpg" alt="">
    </figure>
  </div>
  <div class="popover-content-inside">
    <div class="popover-content-info">December 16 @ 12:00 - 13:30</div>
    <h6 class="popover-content-title">Yoga at the Park</h6>
    <p>Join us Wednesday afternoons for yoga during your lunch break. Leave the building stress of work at the door and find the center of your breath as we practice vinyasa […]</p>
    <a href="#" class="icon-link icon-link-hover stretched-link">
      <span class="icon-link-text">Read more</span>
      {{< icon name="arrow-right" >}}
    </a>
  </div>
</div>
`;

  function getDate(day, hour = 0, minutes = 0) {
    return new Date(now.getFullYear(), now.getMonth(), day, hour, minutes);
  }

  openFrontend.Calendar.then(component => component.getOrCreateInstance('#calendar-mini', {
    layout: 'mini',
    title: 'Event schedule',
    events: [
      {
        title: 'All day event',
        content: dummyContent,
        start: getDate(8),
        allDay: true,
      },
      {
        title: 'Multiple days event',
        content: dummyContent,
        start: getDate(6),
        end: getDate(10),
        allDay: true,
      },
      {
        title: 'Exact time event',
        content: dummyContent,
        start: getDate(10, 8, 30),
        end: getDate(10, 11, 0),
        allDay: false,
      },
      {
        title: 'Dummy event 1',
        content: dummyContent,
        start: getDate(14),
        allDay: true,
      },
      {
        title: 'Dummy event 2',
        content: dummyContent,
        start: getDate(22),
        allDay: true,
      },
      {
        title: 'Dummy event 3',
        content: dummyContent,
        start: getDate(22),
        end: getDate(25),
        allDay: true,
      },
      {
        title: 'Dummy event 4',
        content: dummyContent,
        start: getDate(27, 10, 0),
        end: getDate(27, 12, 0),
        allDay: false,
      },
      {
        title: 'Dummy event 5',
        content: dummyContent,
        start: getDate(27, 14, 0),
        end: getDate(27, 16, 0),
        allDay: false,
      },
      {
        title: 'Dummy event 6',
        content: dummyContent,
        start: getDate(27, 18, 0),
        end: getDate(27, 20, 0),
        allDay: false,
      },
      {
        title: 'Dummy event 7',
        content: dummyContent,
        start: getDate(27, 22, 0),
        end: getDate(27, 23, 30),
        allDay: false,
      },
      {
        title: 'Dummy event 8',
        content: dummyContent,
        start: getDate(22, 15, 0),
        end: getDate(22, 18, 0),
        allDay: false,
      },
      {
        title: 'Next month event',
        content: dummyContent,
        start: nextMonth.setMonth(nextMonth.getMonth() + 1),
        end: nextMonth.setDate(nextMonth.getDate() + 14),
        allDay: true,
      },
      {
        title: 'Future event 1',
        content: dummyContent,
        start: futureDate.setMonth(futureDate.getMonth() + 2),
        end: futureDate.setDate(futureDate.getDate() + 5),
        allDay: true,
      },
    ],
  }))
})
</script>

{{< highlight html >}}
<div class="calendar" data-of-calendar='{
  "layout": "mini",
  "title": "Custom title",
  "events": […]
}'></div>
{{< /highlight >}}


## Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `events` | `array` | `[]` | The events to be displayed. See the data structure below. |
| `eventsFeedUrl` | `string\|undefined` | `undefined` | The URL to fetch the events feed data from. The appended parameters are defined under `eventsFeedUrlStartParam` and `eventsFeedUrlEndParam`. The endpoint must return an event list in JSON format. |
| `eventsFeedUrlStartParam` | `string` | `calendar_start` | The start date parameter name that will be used in the AJAX request. |
| `eventsFeedUrlEndParam` | `string` | `calendar_end` | The end date parameter name that will be used in the AJAX request. |
| `layout` | `string` | `'full'` | The layout to be used. See the examples above. Available options: `full`, `mini`. |
| `miniMonthMinWidth` | `number` | `300` | The minimum width for one month in pixels. Applies only if the `layout` is set to `mini`. |
| `title` | `string\|undefined` | `undefined` | A custom title that will be display on top of the calendar. |
| `viewToggler` | `boolean` | `true` | Option to display or hide the calendar view selector. Applies only if the `layout` is set to `full`. |
{{< /bs-table >}}

### Event data structure

The calendar accepts events as data source. The only required parameters are the `title` and the `start` of the event.

The `start` and `end` must be provided in the `YYYY-MM-DD` date format, or if they also contain the time, in `YYYY-MM-DD\Thh:mm:ss` format.

```js
const events = [
  {
    title: 'All day event',
    content: '<div class="popover-content">…</div>',
    start: '2010-01-01',
    allDay: true,
    display: 'list-item', // available options: auto, block, list-item, background, inverse-background, none
    location: 'New York', // optional, visible only in list month view
    subtitle: 'Great party at Times Square', // optional, visible only in list month view
  },
  {
    title: 'Multiple days event',
    contentUrl: 'https://domain.tld/_ajax/multiple_days_event', // fetch content via AJAX
    start: '2013-01-05',
    end: '2010-01-07',
    allDay: true,
  },
  {
    title: 'Event at specific time',
    content: '<div class="popover-content">…</div>',
    start: '2010-01-09T12:30:00',
    allDay: false,
  }
];
```


## Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `initialized.of.calendar` | This event is fired immediately when the calendar is ready. |
| `before_popover_open.of.calendar` | This event is fired right before the popover is opened. It allows for the popover content manipulation. |
{{< /bs-table >}}

```js
const element = document.getElementById('calendar')

element.addEventListener('initialized.of.calendar', () => {
  // do something
})
```

## CSS

### Variables

{{< scss-docs name="calendar-css-vars" file="src/scss/_calendar.scss" >}}

### Sass variables

{{< scss-docs name="calendar-variables" file="src/scss/_variables.scss" >}}

{{< scss-docs name="calendar-dark-variables" file="src/scss/_variables-dark.scss" >}}
