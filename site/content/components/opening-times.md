---
layout: docs
title: Opening times
description: Display the opening times of the POI object.
group: components
aliases:
  - "/components/"
toc: true
---

## Examples

Display the opening times table on your page using the HTML markup below:

{{< example >}}
<table class="opening-times">
  <thead>
  <tr>
    <th>Opening times</th>
    <th>
      <span class="state state--closed">closed</span>
    </th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Monday</td>
    <td>
      <span>08:00 - 12:00</span>
      <span>13:30 - 17:00</span>
    </td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>
      <span>08:00 - 12:00</span>
      <span>13:30 - 17:00</span>
    </td>
  </tr>
  <tr>
    <td>Wednesday</td>
    <td>
      <span>08:00 - 12:00</span>
    </td>
  </tr>
  <tr>
    <td>Thursday</td>
    <td>
      <span>08:00 - 20:00</span>
    </td>
  </tr>
  <tr>
    <td>Friday</td>
    <td>
      <span>closed</span>
    </td>
  </tr>
  <tr>
    <td>Saturday</td>
    <td>
      <span>12:00 - 17:00</span>
    </td>
  </tr>
  <tr>
    <td>Sunday</td>
    <td>
      <span>closed</span>
    </td>
  </tr>
  </tbody>
</table>
{{< /example >}}

### States

You can use one of different states to show the current place status:

<div class="bd-example">
  <table class="opening-times">
    <thead>
    <tr>
      <th style="width:50%">Opening times</th>
      <th style="width:50%">
        <span class="state state--open">open</span>
      </th>
    </tr>
    </thead>
  </table>

  <table class="opening-times">
    <thead>
    <tr>
      <th style="width:50%">Opening times</th>
      <th style="width:50%">
        <span class="state state--closed">closed</span>
      </th>
    </tr>
    </thead>
  </table>

  <table class="opening-times">
    <thead>
    <tr>
      <th style="width:50%">Opening times</th>
      <th style="width:50%">
        <span class="state state--unknown">unknown</span>
      </th>
    </tr>
    </thead>
  </table>
</div>

The HTML markup:

{{< highlight html >}}
<table class="opening-times">
  <thead>
  <tr>
    <th>Opening times</th>
    <th>
      <span class="state state--open">open</span>
    </th>
  </tr>
  </thead>
</table>

<table class="opening-times">
  <thead>
  <tr>
    <th>Opening times</th>
    <th>
      <span class="state state--closed">closed</span>
    </th>
  </tr>
  </thead>
</table>

<table class="opening-times">
  <thead>
  <tr>
    <th>Opening times</th>
    <th>
      <span class="state state--unknown">unknown</span>
    </th>
  </tr>
  </thead>
</table>
{{< /highlight >}}

## CSS

### Variables

{{< scss-docs name="opening-times-css-vars" file="src/scss/_opening-times.scss" >}}

### Sass variables

{{< scss-docs name="opening-times-variables" file="src/scss/_variables.scss" >}}
