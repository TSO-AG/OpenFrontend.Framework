---
layout: docs
title: Carousel
description: The carousel component, presents a slideshow for cycling through a series of content.
group: components
toc: true
---

## Usage
The Carousel component can be implemented with HTML markup and attribute configurations.

## Examples

### Basic example

{{< example >}}
<!-- Carousel main container -->
<div class="carousel">
  <div class="swiper" data-of-carousel='{
      "paginationEl": "#carousel-pagination-1",
      "navigationNextEl": "#carousel-btn-next-1",
      "navigationPrevEl": "#carousel-btn-prev-1"
  }'>
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="Slide 1" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Slide 2" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Slide 3" >}}
      </div>
    </div>
  </div>

  <!-- If we need pagination -->
  <div class="carousel-pagination carousel-pagination--bottom-center" id="carousel-pagination-1"></div>

  <!-- If we need navigation buttons -->
  <div class="carousel-navigation carousel-navigation--center">
     <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-1">
      <i class="ofi-caret-left-fill"></i>
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-1">
      <i class="ofi-caret-right-fill"></i>
    </button>
  </div>
</div>
{{< /example >}}

### Slides per view
You can specify the number of slides to show in the viewport with the `slidesPerView` attribute. The `spaceBetween` attribute specifies the space (in px) between slides.

{{< example >}}
<div class="carousel">
  <div class="swiper" data-of-carousel='{
      "slidesPerView": 3,
      "spaceBetween": 24,
      "paginationEl": "#carousel-pagination-2",
      "navigationNextEl": "#carousel-btn-next-2",
      "navigationPrevEl": "#carousel-btn-prev-2"
  }'>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#777" background="#999" text="Slide 1" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#666" background="#888" text="Slide 2" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#555" background="#777" text="Slide 3" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#444" background="#666" text="Slide 4" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#333" background="#555" text="Slide 5" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#222" background="#444" text="Slide 6" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#111" background="#333" text="Slide 7" >}}
      </div>
    </div>
  </div>

  <div class="carousel-pagination carousel-pagination--bottom-center" id="carousel-pagination-2"></div>

  <div class="carousel-navigation carousel-navigation--center">
     <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-2">
      <i class="ofi-caret-left-fill"></i>
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-2">
      <i class="ofi-caret-right-fill"></i>
    </button>
  </div>
</div>
{{< /example >}}

### Loop & autoplay
Autoplay starts automatically cycling through slides. Loop continues play after the last slide.

{{< example >}}
<div class="heading-action">
    <h3>Example heading</h3>
    <div>
        <div class="carousel-navigation">
         <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-3">
          <i class="ofi-caret-left-fill"></i>
        </button>
        <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-3">
          <i class="ofi-caret-right-fill"></i>
        </button>
        </div>
    </div>
</div>

<div class="carousel">
  <div class="swiper" data-of-carousel='{
      "autoplay": true,
      "loop": true,
      "speed": 600,
      "slidesPerView": 3,
      "spaceBetween": 24,
      "paginationEl": "#carousel-pagination-3",
      "navigationNextEl": "#carousel-btn-next-3",
      "navigationPrevEl": "#carousel-btn-prev-3"
  }'>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#777" background="#999" text="Slide 1" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#666" background="#888" text="Slide 2" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#555" background="#777" text="Slide 3" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#444" background="#666" text="Slide 4" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#333" background="#555" text="Slide 5" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#222" background="#444" text="Slide 6" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#111" background="#333" text="Slide 7" >}}
      </div>
    </div>
  </div>

  <div class="carousel-pagination carousel-pagination--bottom-center" id="carousel-pagination-3"></div>
</div>
{{< /example >}}

### Pagination position
You can place the pagination on different positions.

{{< example >}}
<div class="carousel">
  <div class="swiper" data-of-carousel='{
      "paginationEl": "#carousel-pagination-4"
  }'>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="Slide 1" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Slide 2" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Slide 3" >}}
      </div>
    </div>
  </div>

  <div id="carousel-pagination-4" class="carousel-pagination carousel-pagination--top-right"></div>
</div>
{{< /example >}}

The position of the pagination can be modified by adding one of the following modifier classes:

- `.carousel-pagination--top-left`
- `.carousel-pagination--top-center`
- `.carousel-pagination--top-right`
- `.carousel-pagination--bottom-left`
- `.carousel-pagination--bottom-center`
- `.carousel-pagination--bottom-right`

Each class adjusts the position of the pagination according to its description (top or bottom, combined with left, center, or right).

### Responsive breakpoints
You can configure different slide display settings based on different viewport widths.

{{< example >}}
<div class="heading-action">
    <h3>Example heading</h3>
    <div>
        <div class="carousel-navigation">
         <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-5">
          <i class="ofi-caret-left-fill"></i>
        </button>
        <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-5">
          <i class="ofi-caret-right-fill"></i>
        </button>
        </div>
    </div>
</div>

<div class="carousel">
  <div class="swiper" data-of-carousel='{
      "slidesPerView": 1,
      "spaceBetween": 10,
      "navigationNextEl": "#carousel-btn-next-5",
      "navigationPrevEl": "#carousel-btn-prev-5",
      "breakpoints": {
        "sm": {
          "slidesPerView": 2
        },
        "md": {
          "slidesPerView": 3
        },
        "xl": {
          "slidesPerView": 4,
          "spaceBetween": 15
        },
        "1400": {
          "slidesPerView": 5,
          "spaceBetween": 8
        }
      }
  }'>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#777" background="#999" text="Slide 1" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#666" background="#888" text="Slide 2" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#555" background="#777" text="Slide 3" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#444" background="#666" text="Slide 4" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#333" background="#555" text="Slide 5" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#222" background="#444" text="Slide 6" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="225" height="225" class="img-fluid img-thumbnail w-100" color="#111" background="#333" text="Slide 7" >}}
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `autoplay` | `object\|boolean` | `undefined` | Object with autoplay parameters or boolean `true` to enable with default settings. |
| `breakpoints` | `object` | `undefined` | Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, changing these properties will have an effect: `slidesPerView`,  `spaceBetween`. |
| `loop` | `boolean` | `false` | Set to `true` to enable continuous loop mode. Because of nature of how the loop mode works (it will rearrange slides), total number of slides must be >= slidesPerView * 2. |
| `navigationNextEl` | `object\|string` | `undefined` | The selector of the element that will work like "next" button after click on it . |
| `navigationPrevEl` | `object\|string` | `undefined` | The selector of the element that will work like "prev" button after click on it. |
| `paginationEl` | `object\|string` | `undefined` | The selector or the pagination element. |
| `slidesPerView` | `number\|"auto"` | `1` | Number of slides per view (slides visible at the same time on slider's container). |
| `spaceBetween` | `string\|number` | `0` | Distance between slides in px. |
| `speed` | `number` | `300` | Duration of transition between slides (in ms). |
{{< /bs-table >}}

#### Autoplay Parameters

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `delay` | `number` | `3000` | Delay between transitions (in ms). |
| `disableOnInteraction` | `boolean` | `true` | Set to `false` and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction. |
| `pauseOnMouseEnter` | `boolean` | `false` | When enabled autoplay will be paused on pointer (mouse) enter over Swiper container. |
| `reverseDirection` | `boolean` | `false` | Enables autoplay in reverse direction |
| `stopOnLastSlide` | `boolean` | `false` | Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode). |
| `waitForTransition` | `boolean` | `true` | When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition. |
| `delay` | `number` | `3000` | Delay between transitions (in ms). |
{{< /bs-table >}}

## CSS

### Variables

{{< scss-docs name="carousel-css-vars" file="src/scss/_carousel.scss" >}}

### Sass variables

{{< scss-docs name="carousel-variables" file="src/scss/_variables.scss" >}}
