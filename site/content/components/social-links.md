---
layout: docs
title: Social links
description: Display a list of social media links
group: components
toc: true
---

## Examples

### With labels

{{< example >}}
<ul class="social-links social-links-lg">
  <li>
    <a href="#" class="social-link">
      <span class="social-link-icon">{{< icon name="instagram" >}}</span>
      <span class="social-link-label">Instagram</span>
    </a>
  </li>
  <li>
    <a href="#" class="social-link">
      <span class="social-link-icon">{{< icon name="facebook" >}}</span>
      <span class="social-link-label">Facebook</span>
    </a>
  </li>
  <li>
    <a href="#" class="social-link">
      <span class="social-link-icon">{{< icon name="tiktok" >}}</span>
      <span class="social-link-label">TikTok</span>
    </a>
  </li>
  <li>
    <a href="#" class="social-link">
      <span class="social-link-icon">{{< icon name="youtube" >}}</span>
      <span class="social-link-label">YouTube</span>
    </a>
  </li>
</ul>
{{< /example >}}

### With tooltips

{{< example >}}
<ul class="social-links">
  <li>
    <a href="#" class="social-link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Instagram">
      <span class="social-link-icon">{{< icon name="instagram" >}}</span>
      <span class="visually-hidden">Instagram</span>
    </a>
  </li>
  <li>
    <a href="#" class="social-link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Facebook">
      <span class="social-link-icon">{{< icon name="facebook" >}}</span>
      <span class="visually-hidden">Facebook</span>
    </a>
  </li>
  <li>
    <a href="#" class="social-link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="TikTok">
      <span class="social-link-icon">{{< icon name="tiktok" >}}</span>
      <span class="visually-hidden">TikTok</span>
    </a>
  </li>
  <li>
    <a href="#" class="social-link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="YouTube">
      <span class="social-link-icon">{{< icon name="youtube" >}}</span>
      <span class="visually-hidden">YouTube</span>
    </a>
  </li>
</ul>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="social-links-css-vars" file="src/scss/_social-links.scss">}}

### Sass variables

{{< scss-docs name="social-links-variable" file="src/scss/_variables.scss">}}
