---
layout: docs
title: Logos
description: The Logos component within the OpenFrontend.Framework is designed to display a list of logos in a structured and visually appealing manner.
group: components
toc: true
---

With its flexible design, this component automatically adjusts columns based on the size of the logo images, ensuring a seamless and responsive presentation.

## Examples

### Simple usage

Logos are automatically arranged, and columns adjust to the size of the image.

{{< example >}}
<div class="logo-list">
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="60" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="45">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="90" height="70">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="80">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="75">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="40">}}
        </a>
      </figure>
    </div>
  </div>
</div>
{{< /example >}}

### Logos in columns

By adding specific classes, you can define the number of logos visible in a row, ranging from 1-12.

{{< example >}}
<div class="logo-list row-cols-4 row-cols-sm-6 row-cols-md-8">
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="60" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="45">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="90" height="70">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="80">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="75">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="40">}}
        </a>
      </figure>
    </div>
  </div>
</div>
{{< /example >}}

### Define logo dimensions

By setting variable values, you can specify the maximum size of the logo element.

{{< example >}}
<div class="logo-list" style="--bs-logo-list-item-max-width: 60px; --bs-logo-list-item-max-height: 60px">
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="60" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="45">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="90" height="70">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="80">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="75">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="40">}}
        </a>
      </figure>
    </div>
  </div>
</div>
{{< /example >}}

### Custom Styling

The component allows for custom styling of the box containing the logo

{{< example >}}
<div class="logo-list" style="--bs-logo-list-item-bg: #f8f9fa; --bs-logo-list-item-padding-y: 10px; --bs-logo-list-item-padding-x: 10px; --bs-logo-list-item-border-radius: 5px; --bs-logo-list-item-border-width: 1px; --bs-logo-list-item-border-style: solid; --bs-logo-list-item-border-color: #dee2e6;  --bs-logo-list-item-max-width: 80px; --bs-logo-list-item-max-height: 80px">
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="60" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="45">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="90" height="70">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="80">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="75">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logo-list-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="40">}}
        </a>
      </figure>
    </div>
  </div>
</div>
{{< /example >}}


#### CSS

For those looking to dive deeper into customization, the Logos component provides a set of SCSS variables. These variables allow for fine-tuning of gaps, margins, padding, background colors, borders, and more.

##### Variables

{{< scss-docs name="logos-css-vars" file="src/scss/_logos.scss" >}}

##### Sass variables

{{< scss-docs name="logos-variables" file="src/scss/_variables.scss" >}}
