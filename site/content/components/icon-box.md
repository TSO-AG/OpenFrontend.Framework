---
layout: docs
title: Icon box
description: The Icon box component is a versatile tool designed to display content alongside an icon.
group: components
toc: true
---

## About

It's particularly useful for showcasing contact information, such as phone numbers, addresses, and email links, with corresponding icons for a visually appealing and intuitive presentation.

## Examples

{{< example >}}
<div class="icon-box">
  <div class="icon-box-icon">
    {{< icon name="star-fill" >}}
  </div>
  <div class="icon-box-content">
    Lorem ipsum dolor sit amet
  </div>
</div>
{{< /example >}}

### Address
{{< example >}}
<h3>Address</h3>

<div class="icon-box">
  <div class="icon-box-icon">
    {{< icon name="geo-alt-fill" >}}
  </div>
  <div class="icon-box-content">
    TSO AG<br>
    Stefan Keller<br>
    Fürstenlandstrasse 53<br>
    CH-9000 St.Gallen
  </div>
</div>

{{< /example >}}

### Contact
{{< example >}}
<h3>Contact</h3>

<div class="icon-box">
  <div class="icon-box-icon">
    {{< icon name="telephone-fill" >}}
  </div>
  <div class="icon-box-content">
    <div>+41 71 274 99 19</div>
    <div>+41 79 732 43 46</div>
  </div>
</div>

<div class="icon-box">
  <div class="icon-box-icon">
    {{< icon name="at-fill" >}}
  </div>
  <div class="icon-box-content">
    <div><a href="mailto:info@tso.ch">info@tso.ch</a></div>
    <div><a href="http://www.tso.ch" target="_blank">http://www.tso.ch</a></div>
  </div>
</div>

{{< /example >}}

### Person
{{< example >}}
<h3>Contact</h3>

<div class="icon-box">
  <div class="icon-box-icon">
    {{< icon name="geo-alt-fill" >}}
  </div>
  <div class="icon-box-content">
    TSO AG<br>
    Stefan Keller<br>
    Fürstenlandstrasse 53<br>
    CH-9000 St.Gallen
  </div>
</div>

<div class="icon-box">
  <div class="icon-box-icon">
    {{< icon name="telephone-fill" >}}
  </div>
  <div class="icon-box-content">
    <div>+41 71 274 99 19</div>
    <div>+41 79 732 43 46</div>
  </div>
</div>

<div class="icon-box">
  <div class="icon-box-icon">
    {{< icon name="at-fill" >}}
  </div>
  <div class="icon-box-content">
    <div><a href="mailto:info@tso.ch">info@tso.ch</a></div>
    <div><a href="http://www.tso.ch" target="_blank">http://www.tso.ch</a></div>
  </div>
</div>

{{< /example >}}

### Vertical alignment

To vertically center the content and the icon with respect to each other, simply add the `.icon-box-center` class to the main `.icon-box` container.


{{< example >}}

<div class="icon-box icon-box-center">
  <div class="icon-box-icon">
    {{< icon name="telephone-fill" >}}
  </div>
  <div class="icon-box-content">
    <div>+41 71 274 99 19</div>
    <div>+41 79 732 43 46</div>
  </div>
</div>

<div class="icon-box icon-box-center">
  <div class="icon-box-icon">
    [//]: # (TODO - add icon at-fill)
    {{< icon name="at-fill" >}}
  </div>
  <div class="icon-box-content">
    <div><a href="mailto:info@tso.ch">info@tso.ch</a></div>
    <div><a href="http://www.tso.ch" target="_blank">http://www.tso.ch</a></div>
  </div>
</div>

{{< /example >}}

## CSS

### Variables

{{< scss-docs name="icon-box-css-vars" file="src/scss/_icon-box.scss" >}}

### Sass variables

{{< scss-docs name="icon-box-variables" file="src/scss/_variables.scss" >}}
