---
layout: docs
title: Date & time picker
description: The date & time picker is designed for intuitive and user-friendly date and time selection in web forms.
group: forms
toc: true
---

## Examples

### Basic

Datepicker without any config.

{{< example >}}
<input type="text" class="form-control form-datepicker" data-of-datepicker placeholder="Select Date...">
{{< /example >}}

### Human-friendly dates

For a more user-friendly date and time format:

```json
{
    "enableTime": true,
    "dateFormat": "d.m.Y H:i"
}
```

{{< example >}}
<input type="text" class="form-control form-datepicker" data-of-datepicker='{"enableTime": true, "dateFormat": "d.m.Y H:i"}' placeholder="Select Date...">
{{< /example >}}

### Range calendar

Select a range of dates using the range calendar.

```json
{
    "mode": "range"
}
```

{{< example >}}
<input type="text" class="form-control form-datepicker" data-of-datepicker='{"mode": "range"}' placeholder="Select Date...">
{{< /example >}}

### Time picker

For time-only selection:

```json
{
    "enableTime": true,
    "noCalendar": true,
    "dateFormat": "H:i"
}
```

{{< example >}}
<input type="text" class="form-control form-timepicker" data-of-datepicker='{"enableTime": true, "noCalendar": true, "dateFormat": "H:i"}' placeholder="Select time...">
{{< /example >}}

### Inline calendar

Display the calendar in an always-open state with the `inline` option.

```json
{
    "inline": true
}
```

{{< example >}}
<input type="text" class="form-control form-datepicker" data-of-datepicker='{"inline": true}' placeholder="Select Date...">
{{< /example >}}

## Usage
To initialize the picker for form fields, add the attribute `data-of-datepicker` to the input element. The attribute can accept configurations in the form of a JSON string, allowing for easy customization of the picker's behavior.

For a distinct visual appearance, you have the option of choosing between two classes for the input field:

- `form-datepicker` - this class adorns the input with a calendar icon, signaling its purpose for date selection.
- `form-timepicker` - with this class, the input receives a clock icon, indicating its utility for time selection.

### Options

You can pass extra options as JSON value of the data attribute.

Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `dateFormat` | `String` | <span class="text-nowrap">`"d.m.Y"`</span> | A string of characters which are used to define how the date will be displayed in the input box. |
| `defaultDate` | `String` | `undefined` | Sets the initial selected date(s). |
| `defaultHour` | `Number` | `12` | Initial value of the hour element. |
| `defaultMinute` | `Number` | `0` | Initial value of the minute element. |
| `enableTime` | `Boolean` | `false` | Enables time picker |
| `inline` | `Boolean` | `false` | Displays the calendar inline |
| `maxDate` | `String/Date` | `undefined` | The maximum date that a user can pick to (inclusive). |
| `minDate` | `String/Date` | `undefined` | The minimum date that a user can start picking from (inclusive). |
| `mode` | `String` | `"single"` | "single", "multiple", or "range" |
| `noCalendar` | `Boolean` | `false` | Hides the day selection in calendar.<br>Use it along with enableTime to create a time picker. |
| `rangeSeparator` | `String` | `' - '` | The input separator between "from" and "to" dates. |
{{< /bs-table >}}

## CSS
### Input styles

Differentiate between date and time input fields with unique icons.

#### Sass variables

{{< scss-docs name="form-datepicker-variables" file="src/scss/_variables.scss" >}}
{{< scss-docs name="form-datepicker-dark-variables" file="src/scss/_variables-dark.scss" >}}

### Calendar styles
Customize the look and feel of your calendar.

#### Variables

{{< scss-docs name="calendarpicker-css-vars" file="src/scss/form/_flatpickr.scss" >}}

#### Sass variables

{{< scss-docs name="calendarpicker-variables" file="src/scss/_variables.scss" >}}
