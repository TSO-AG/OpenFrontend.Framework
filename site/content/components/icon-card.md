---
layout: docs
title: Icon card
description: The Icon card component is a versatile tool designed to display a card with icon.
group: components
toc: true
---

## About

It's particularly useful for showcasing contact information, such as phone numbers, addresses, and email links, with corresponding icons for a visually appealing and intuitive presentation.

## Simple icon card

{{< example >}}
<div class="icon-card" style="width:200px">
  <div class="icon-card-icon">
    {{< icon name="star-fill" >}}
  </div>
  <div class="icon-card-content">
    <div class="icon-card-subtitle">Tiny subtitle</div>
    <div class="icon-card-title">Main title</div>
  </div>
</div>
{{< /example >}}

## Clickable icon card

{{< example >}}
<div class="icon-card" style="width:200px">
  <div class="icon-card-icon">
    {{< icon name="link-45deg" >}}
  </div>
  <div class="icon-card-content">
    <div class="icon-card-subtitle">Sample link</div>
    <div class="icon-card-title">
      <a href="#" class="stretched-link">Visit the page</a>
    </div>
  </div>
</div>
{{< /example >}}

## Multiple icon cards

{{< example >}}
<div class="icon-card-wrapper">
  <div class="icon-card">
    <div class="icon-card-icon">
      {{< icon name="1-square" >}}
    </div>
    <div class="icon-card-content">
      <div class="icon-card-subtitle">Subtitle</div>
      <div class="icon-card-title">Title</div>
    </div>
  </div>
  <div class="icon-card">
    <div class="icon-card-icon">
      {{< icon name="2-square" >}}
    </div>
    <div class="icon-card-content">
      <div class="icon-card-subtitle">Subtitle</div>
      <div class="icon-card-title">Title</div>
    </div>
  </div>
  <div class="icon-card">
    <div class="icon-card-icon">
      {{< icon name="3-square" >}}
    </div>
    <div class="icon-card-content">
      <div class="icon-card-subtitle">Subtitle</div>
      <div class="icon-card-title">Title</div>
    </div>
  </div>
  <div class="icon-card">
    <div class="icon-card-icon">
      {{< icon name="4-square" >}}
    </div>
    <div class="icon-card-content">
      <div class="icon-card-subtitle">Subtitle</div>
      <div class="icon-card-title">Title</div>
    </div>
  </div>
  <div class="icon-card">
    <div class="icon-card-icon">
      {{< icon name="5-square" >}}
    </div>
    <div class="icon-card-content">
      <div class="icon-card-subtitle">Subtitle</div>
      <div class="icon-card-title">Title</div>
    </div>
  </div>
  <div class="icon-card">
    <div class="icon-card-icon">
      {{< icon name="6-square" >}}
    </div>
    <div class="icon-card-content">
      <div class="icon-card-subtitle">Subtitle</div>
      <div class="icon-card-title">Title</div>
    </div>
  </div>
  <div class="icon-card">
    <div class="icon-card-icon">
      {{< icon name="7-square" >}}
    </div>
    <div class="icon-card-content">
      <div class="icon-card-subtitle">Subtitle</div>
      <div class="icon-card-title">Title</div>
    </div>
  </div>
  <div class="icon-card">
    <div class="icon-card-icon">
      {{< icon name="8-square" >}}
    </div>
    <div class="icon-card-content">
      <div class="icon-card-subtitle">Subtitle</div>
      <div class="icon-card-title">Title</div>
    </div>
  </div>
</div>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="icon-card-css-vars" file="src/scss/_icon-card.scss" >}}

{{< scss-docs name="icon-card-wrapper-css-vars" file="src/scss/_icon-card.scss" >}}

### Scss variables

{{< scss-docs name="icon-card-variables" file="src/scss/_variables.scss" >}}

{{< scss-docs name="icon-card-wrapper-variables" file="src/scss/_variables.scss" >}}
