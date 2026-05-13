---
layout: docs
title: Chart
description: Render bar, line, pie, and other data visualizations.
group: components
toc: true
---

## Overview

The Chart is a JavaScript component for rendering data visualizations such as bar, line, and pie charts. You can initialize the component using the `data-of-chart` attribute.

{{< callout info >}}
The component uses the [Apache ECharts](https://echarts.apache.org) library. Note that the library is not fully imported — only the features listed on this page are available.
{{< /callout >}}

## Chart types

The Chart component supports multiple series types, each accepting a different data format.
The type is defined per series inside the series array and maps directly to the [Apache ECharts series types](https://echarts.apache.org/en/option.html#series).
For the full list of available options per type, refer to the ECharts option documentation.

### Bar chart

{{< example >}}
<div class="chart" data-of-chart='{
  "data": {
    "title": { "text": "Weekly Sales" },
    "tooltip": {},
    "legend": { "data": ["Sales"] },
    "xAxis": { "type": "category", "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    "yAxis": { "type": "value" },
    "series": [
      { "name": "Sales", "type": "bar", "data": [120, 200, 150, 80, 170, 110, 130] }
    ]
  }
}'></div>
{{< /example >}}

### Line chart

{{< example >}}
<div class="chart" data-of-chart='{
  "data": {
    "title": { "text": "Weekly Sales" },
    "tooltip": {},
    "legend": { "data": ["Sales"] },
    "xAxis": { "type": "category", "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    "yAxis": { "type": "value" },
    "series": [
      { "name": "Sales", "type": "line", "data": [120, 200, 150, 80, 170, 110, 130], "areaStyle": {} }
    ]
  }
}'></div>
{{< /example >}}

### Pie chart

{{< example >}}
<div class="chart" data-of-chart='{
  "data": {
    "title": { "text": "Weekly Sales" },
    "tooltip": {},
    "legend": { "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    "series": [
      { "type": "pie", "data": [
        { "name": "Mon", "value": 120 },
        { "name": "Tue", "value": 200 },
        { "name": "Wed", "value": 150 },
        { "name": "Thu", "value": 80 },
        { "name": "Fri", "value": 170 },
        { "name": "Sat", "value": 110 },
        { "name": "Sun", "value": 130 }
      ]}
    ]
  }
}'></div>
{{< /example >}}

## Components

The following ECharts components are included and available out of the box:

{{< bs-table "table" >}}
| Component | Description |
| --- | --- |
| [Aria](https://echarts.apache.org/en/option.html#aria) | Adds accessibility attributes to the chart. Enabled by default and cannot be disabled. |
| [Legend](https://echarts.apache.org/en/option.html#legend) | Displays a legend for identifying series. |
| [Title](https://echarts.apache.org/en/option.html#title) | Displays a chart title. |
| [Tooltip](https://echarts.apache.org/en/option.html#tooltip) | Shows data details on hover. |
{{< /bs-table >}}

## Coordinate systems

The following ECharts coordinate systems are included and available out of the box:

{{< bs-table "table" >}}
| Coordinate system | Description |
| --- | --- |
| [Grid](https://echarts.apache.org/en/option.html#grid) | A Cartesian coordinate system for `bar` and `line` charts. |
{{< /bs-table >}}

## Renderers

The following ECharts renderers are supported:

{{< bs-table "table" >}}
| Renderer | Description |
| --- | --- |
| [SVG](https://apache.github.io/echarts-handbook/en/best-practices/canvas-vs-svg/) | Renders charts as SVG elements. |
{{< /bs-table >}}

## Usage

### Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `data` | `object` | `{}` | The raw ECharts configuration object passed directly to `setOption()`. Accepts any valid [ECharts option](https://echarts.apache.org/en/option.html). |
| `responsive` | `boolean` | `true` | Automatically resizes the chart when the container dimensions change. |
{{< /bs-table >}}

### Methods

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `getChart` | Exposes the underlying ECharts instance, giving access to the full [ECharts API](https://echarts.apache.org/en/api.html). |
{{< /bs-table >}}

```js
const chart = await openFrontend.Chart.then(component => component.getInstance('#chart')) // Returns a Bootstrap chart instance

chart.getChart(); // ECharts instance
```

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `initialized.of.chart` | This event is fired immediately when the chart is ready to use. |
{{< /bs-table >}}

```js
const element = document.getElementById('chart')

element.addEventListener('initialized.of.chart', async () => {
  const chart = await openFrontend.Chart.then(component => component.getInstance(element))

  chart.getChart(); // ECharts instance
})
```

## CSS

### Variables

{{< scss-docs name="chart-css-vars" file="src/scss/_chart.scss" >}}

### Sass variables

{{< scss-docs name="chart-variables" file="src/scss/_variables.scss" >}}
