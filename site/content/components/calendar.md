---
layout: docs
title: Calendar
description: The calendar component is a versatile way of displaying the events.
group: components
toc: true
---

## Usage

The calendar component can be implemented with HTML markup and attribute configurations.

The component uses the [FullCalendar](https://fullcalendar.io/) library.

## Example

<div class="bd-example">
  <div id="calendar" class="calendar"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const event1 = new Date();
  const event2 = new Date();
  const event3 = new Date();

  openFrontend.Calendar.then(component => component.getOrCreateInstance('#calendar', {
    events: [
      {
        title: "All day event",
        start: event1.setDate(event1.getDate() - 2),
        allDay: true,
      },
      {
        title: "Multiple days event",
        start: event2.setDate(event2.getDate() + 2),
        end: event2.setDate(event2.getDate() + 3),
        allDay: true,
      },
      {
        title: "Exact time event",
        start: event3.setHours(8, 30, 0),
        end: event3.setHours(11, 0, 0),
        allDay: false,
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
      "start": "YYYY-MM-DD",
      "allDay": true
    },
    {
      "title": "Multiple days event",
      "start": "YYYY-MM-DD",
      "end": "YYYY-MM-DD",
      "allDay": true
    },
    {
      "title": "Exact time event",
      "start": "YYYY-MM-DD\Thh:mm:ss",
      "end": "YYYY-MM-DD\Thh:mm:ss",
      "allDay": false
    }
  ]
}'></div>
{{< /highlight >}}

## Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `events` | `array` | `[]` | The events to be displayed. See the data structure below. |
{{< /bs-table >}}

### Event data structure

The calendar accepts events as data source. The only required parameters are the `title` and the `start` of the event.

The `start` and `end` must be provided in the `YYYY-MM-DD` date format, or if they also contain the time, in `YYYY-MM-DD\Thh:mm:ss` format.

```js
const events = [
  {
    title: 'All day event',
    start: '2010-01-01'
  },
  {
    title: 'Multiple days event',
    start: '2013-01-05',
    end: '2010-01-07'
  },
  {
    title: 'Event at specific time',
    start: '2010-01-09T12:30:00',
    allDay: false // will make the time show
  }
];
```


## Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `initialized.of.calendar` | This event is fired immediately when the calendar is ready. |
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
