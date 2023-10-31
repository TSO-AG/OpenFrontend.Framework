---
layout: docs
title: Logos
description: The Logos component within the OpenFrontend.Framework is designed to display a list of logos in a structured and visually appealing manner.
group: components
toc: true
---

With its flexible design, this component automatically adjusts columns based on the size of the logo images, ensuring a seamless and responsive presentation.

## Usage

To use the logos component you have to add the `.logos` CSS class to the wrapping element. It will enable the CSS variables for the `.logos-item` elements inside it.

Then, you should choose the way the logos will be presented, for example using the `.logos-row` or `.logos-carousel` CSS class. See the examples below for more information.

## Examples

### Logos in a row

Logos in a row are automatically arranged, and columns adjust to the size of the image. Use the `.logos-row` CSS class to display them in a row.

{{< example >}}
<div class="logos logos-row">
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="60" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="45">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="90" height="70">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="80">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="75">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
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
<div class="logos logos-row row-cols-4 row-cols-sm-6 row-cols-md-8">
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="60" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="45">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="90" height="70">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="80">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="75">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="40">}}
        </a>
      </figure>
    </div>
  </div>
</div>
{{< /example >}}

### Logos in carousel

You can also embed logos inside a carousel like show in the example below using the `.logos-carousel` CSS class.

{{< callout info >}}
Note that the `--bs-logos-gap` CSS variable will no longer work here. Instead, define the gap between logos in the carousel settings using the `spaceBetween` configuration value.
{{< /callout >}}

{{< example >}}
<div class="heading-action justify-content-end">
  <div class="carousel-navigation">
    <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-1">
      <i class="ofi-caret-left-fill"></i>
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-1">
      <i class="ofi-caret-right-fill"></i>
    </button>
  </div>
</div>

<div class="logos logo-carousel">
  <div class="carousel">
    <div class="swiper" data-of-carousel='{
      "slidesPerView": 2,
      "spaceBetween": 24,
      "navigationNext": "#carousel-btn-next-1",
      "navigationPrev": "#carousel-btn-prev-1",
       "breakpoints": {
        "md": {
          "slidesPerView": 3
        },
        "lg": {
          "slidesPerView": 4
        },
        "xxl": {
          "slidesPerView": 5
        }
      }
    }'>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="logos-item">
            <figure>
              <a href="#">
                {{< placeholder markup="img" width="120" height="60">}}
              </a>
            </figure>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logos-item">
            <figure>
              <a href="#">
                {{< placeholder markup="img" width="120" height="45">}}
              </a>
            </figure>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logos-item">
            <figure>
              <a href="#">
                {{< placeholder markup="img" width="90" height="70">}}
              </a>
            </figure>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logos-item">
            <figure>
              <a href="#">
                {{< placeholder markup="img" width="120" height="80">}}
              </a>
            </figure>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logos-item">
            <figure>
              <a href="#">
                {{< placeholder markup="img" width="120" height="75">}}
              </a>
            </figure>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logos-item">
            <figure>
              <a href="#">
                {{< placeholder markup="img" width="120" height="40">}}
              </a>
            </figure>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logos-item">
            <figure>
              <a href="#">
                {{< placeholder markup="img" width="100" height="50">}}
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Define logo dimensions

By setting CSS variable values such as `--bs-logos-item-max-width` and `--bs-logos-item-max-height`, you can specify the maximum size of the logo element.

{{< example >}}
<div class="logos logos-row" style="--bs-logos-item-max-width: 60px; --bs-logos-item-max-height: 60px">
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="60" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="45">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="90" height="70">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="80">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="75">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="40">}}
        </a>
      </figure>
    </div>
  </div>
</div>
{{< /example >}}

### Custom styling

The component allows for custom styling of the box containing the logo. See the list of style variables at the end of the page for the full reference.

{{< example >}}
<div class="logos logos-row" style="--bs-logos-item-bg: #f8f9fa; --bs-logos-item-padding-y: 10px; --bs-logos-item-padding-x: 10px; --bs-logos-item-border-radius: 5px; --bs-logos-item-border-width: 1px; --bs-logos-item-border-style: solid; --bs-logos-item-border-color: #dee2e6;  --bs-logos-item-max-width: 80px; --bs-logos-item-max-height: 80px">
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="60" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="45">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="90" height="70">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="80">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="60">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="75">}}
        </a>
      </figure>
    </div>
  </div>
  <div>
    <div class="logos-item">
      <figure>
        <a href="#">
          {{< placeholder markup="img" width="120" height="40">}}
        </a>
      </figure>
    </div>
  </div>
</div>
{{< /example >}}

## CSS

For those looking to dive deeper into customization, the Logos component provides a set of SCSS variables. These variables allow for fine-tuning of gaps, margins, padding, background colors, borders, and more.

### Variables

{{< scss-docs name="logos-css-vars" file="src/scss/_logos.scss" >}}

### Sass variables

{{< scss-docs name="logos-variables" file="src/scss/_variables.scss" >}}
