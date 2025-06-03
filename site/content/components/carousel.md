---
layout: docs
title: Carousel
description: The carousel component, presents a slideshow for cycling through a series of content.
group: components
toc: true
---

## Usage
The carousel component can be implemented with HTML markup and attribute configurations.

{{< callout info >}}
The component uses the [Swiper](https://swiperjs.com/) library behind the scenes.
{{< /callout >}}

## Examples

### Basic example

{{< example >}}
<div class="carousel carousel-navigation-center-overlay">
  <div class="swiper" data-of-carousel='{
      "pagination": "#carousel-pagination-1",
      "navigationNext": "#carousel-btn-next-1",
      "navigationPrev": "#carousel-btn-prev-1"
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

  <div class="carousel-pagination carousel-pagination--bottom-center" id="carousel-pagination-1"></div>

  <div class="carousel-navigation">
     <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-1">
      {{< icon name="caret-left-fill" >}}
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-1">
      {{< icon name="caret-right-fill" >}}
    </button>
  </div>
</div>
{{< /example >}}

### Slides per view
You can specify the number of slides to show in the viewport with the `slidesPerView` attribute. The `spaceBetween` attribute specifies the space (in pixels) between slides.

{{< example >}}
<div class="carousel carousel-navigation-center">
  <div class="swiper" data-of-carousel='{
      "slidesPerView": 3,
      "spaceBetween": 24,
      "pagination": "#carousel-pagination-2",
      "navigationNext": "#carousel-btn-next-2",
      "navigationPrev": "#carousel-btn-prev-2"
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

  <div class="carousel-navigation">
     <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-2">
      {{< icon name="caret-left-fill" >}}
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-2">
      {{< icon name="caret-right-fill" >}}
    </button>
  </div>
</div>
{{< /example >}}

### Loop & autoplay
Autoplay starts automatically cycling through slides. Loop continues play after the last slide.

{{< callout info >}}
For loop to work, the number of slides must be greater or equal than `slidesPerView + 1`.
{{< /callout >}}

{{< example >}}
<div class="heading-action">
    <h3>Example heading</h3>
    <div>
        <div class="carousel-navigation">
         <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-3">
          {{< icon name="caret-left-fill" >}}
        </button>
        <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-3">
          {{< icon name="caret-right-fill" >}}
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
      "pagination": "#carousel-pagination-3",
      "navigationNext": "#carousel-btn-next-3",
      "navigationPrev": "#carousel-btn-prev-3"
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

### Navigation position

{{< example >}}
<div class="carousel carousel-navigation-center">
  <div class="swiper" data-of-carousel='{
      "pagination": "#carousel-pagination-4",
      "navigationNext": "#carousel-btn-next-4",
      "navigationPrev": "#carousel-btn-prev-4"
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

  <div class="carousel-pagination carousel-pagination--bottom-center" id="carousel-pagination-4"></div>

  <div class="carousel-navigation">
     <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-4">
      {{< icon name="caret-left-fill" >}}
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-4">
      {{< icon name="caret-right-fill" >}}
    </button>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="carousel carousel-navigation-center-inside">
  <div class="swiper" data-of-carousel='{
      "pagination": "#carousel-pagination-5",
      "navigationNext": "#carousel-btn-next-5",
      "navigationPrev": "#carousel-btn-prev-5"
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

  <div class="carousel-pagination carousel-pagination--bottom-center" id="carousel-pagination-5"></div>

  <div class="carousel-navigation">
     <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-5">
      {{< icon name="caret-left-fill" >}}
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-5">
      {{< icon name="caret-right-fill" >}}
    </button>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="carousel carousel-navigation-center-overlay">
  <div class="swiper" data-of-carousel='{
      "pagination": "#carousel-pagination-6",
      "navigationNext": "#carousel-btn-next-6",
      "navigationPrev": "#carousel-btn-prev-6"
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

  <div class="carousel-pagination carousel-pagination--bottom-center" id="carousel-pagination-6"></div>

  <div class="carousel-navigation">
     <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-6">
      {{< icon name="caret-left-fill" >}}
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-6">
      {{< icon name="caret-right-fill" >}}
    </button>
  </div>
</div>
{{< /example >}}

### Pagination position
You can place the pagination in different positions.

{{< example >}}
<div class="carousel">
  <div class="swiper" data-of-carousel='{
      "pagination": "#carousel-pagination-7"
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

  <div id="carousel-pagination-7" class="carousel-pagination carousel-pagination--top-right"></div>
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

### Pagination position static
If you do not want to place a pagination above the slide you can use one of the defined classes

- `.carousel-pagination--left`
- `.carousel-pagination--center`
- `.carousel-pagination--right`

{{< example >}}
<div class="carousel">
  <div class="swiper" data-of-carousel='{
      "pagination": "#carousel-pagination-3-static"
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

  <div id="carousel-pagination-3-static" class="carousel-pagination carousel-pagination--center"></div>
</div>
{{< /example >}}

### Responsive breakpoints
You can configure different slide display settings based on different viewport widths.

{{< example >}}
<div class="heading-action">
    <h3>Example heading</h3>
    <div>
        <div class="carousel-navigation">
         <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-8">
          {{< icon name="caret-left-fill" >}}
        </button>
        <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-8">
          {{< icon name="caret-right-fill" >}}
        </button>
        </div>
    </div>
</div>

<div class="carousel">
  <div class="swiper" data-of-carousel='{
      "slidesPerView": 1,
      "spaceBetween": 10,
      "navigationNext": "#carousel-btn-next-8",
      "navigationPrev": "#carousel-btn-prev-8",
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

### Future slides visible

It is a carousel design where upcoming slides are partially visible, providing a glimpse of what's ahead and creating a continuous, engaging visual flow.

{{< callout info >}}
For loop to work, the number of slides must be greater or equal than `slidesPerView + 2`.
{{< /callout >}}

{{< example >}}

<div class="carousel-future-slides-visible">
  <div class="w-75">
    <div class="heading-action">
        <h3>Example heading</h3>
        <div>
            <div class="carousel-navigation">
             <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-9">
              {{< icon name="caret-left-fill" >}}
            </button>
            <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-9">
              {{< icon name="caret-right-fill" >}}
            </button>
            </div>
        </div>
    </div>

    <div class="carousel">
      <div class="swiper" data-of-carousel='{
          "autoplay": true,
          "loop": true,
          "speed": 600,
          "slidesPerView": 2,
          "spaceBetween": 6,
          "pagination": "#carousel-pagination-9",
          "navigationNext": "#carousel-btn-next-9",
          "navigationPrev": "#carousel-btn-prev-9",
          "futureSlidesVisible": true,
          "breakpoints": {
            "md": {
              "spaceBetween": 12
            },
            "lg": {
              "spaceBetween": 24
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

      <div class="carousel-pagination carousel-pagination--bottom-center" id="carousel-pagination-3"></div>
    </div>
  </div>
</div>
{{< /example >}}

### Gallery

To create a photo gallery with thumbnails, you can create two separate carousels. The main carousel, which displays one photo at a time, should have the `thumbs` option defined, pointing to the identifier of the carousel with the thumbnails.

{{< example >}}
<!-- Lightbox options -->
<script data-of-lightbox-config="gallery-1" type="application/json">
  {
    "thumbnails": true
  }
</script>

<!-- Main carousel -->
<div class="carousel mb-2">
  <div class="swiper" data-of-carousel='{
      "thumbs": "#carousel-thumbnails-1"
  }'>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-1.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-1.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-2.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-2.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-3.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-3.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-4.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-4.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-5.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-5.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-6.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-6.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-7.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-7.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-8.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-8.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-9.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-9.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-10.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-10.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-11.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-11.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-12.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-12.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-13.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-13.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
      <div class="swiper-slide">
        <figure class="position-relative mb-0">
          <a href="assets/media/sample-gallery-14.jpg" data-of-lightbox='{ "group": "gallery-1" }'>
            <img src="assets/media/sample-gallery-14.jpg" alt="" class="aspect aspect-4x3 object-fit-cover img-fluid">
          </a>
          <figcaption>
            <button type="button" class="opacity-50 position-absolute bottom-0 end-0 translate-middle-x btn btn-circle btn-dark mb-2"
                    style="--bs-btn-padding-x: 2px; --bs-btn-padding-y: 2px;"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="© Hans Muster">
              {{< icon name="question-circle-fill" >}}
            </button>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>

<!-- Thumbnails carousel -->
<div class="carousel carousel-navigation-center">
  <div id="carousel-thumbnails-1" class="swiper" data-of-carousel='{
      "slidesPerView": 2,
      "spaceBetween": 10,
      "navigationNext": "#carousel-btn-next-10",
      "navigationPrev": "#carousel-btn-prev-10",
      "breakpoints": {
        "sm": {
          "slidesPerView": 3
        },
        "md": {
          "slidesPerView": 4
        },
        "xl": {
          "slidesPerView": 5
        },
        "1400": {
          "slidesPerView": 6
        }
      }
  }'>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-1.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-2.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-3.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-4.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-5.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-6.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-7.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-8.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-9.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-10.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-11.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-12.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-13.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
      <div class="swiper-slide">
        <img src="assets/media/sample-gallery-14.jpg" alt="" class="aspect aspect-16x9 object-fit-cover img-fluid">
      </div>
    </div>
  </div>

  <div class="carousel-navigation">
    <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="carousel-btn-prev-10">
      {{< icon name="caret-left-fill" >}}
    </button>
    <button type="button" class="carousel-button-next btn btn-square btn-primary" id="carousel-btn-next-10">
      {{< icon name="caret-right-fill" >}}
    </button>
  </div>
</div>
{{< /example >}}

## Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `autoHeight` | `boolean` | `false` | If enabled, the slider will adapt its height to the height of the current slide. |
| `autoplay` | `object\|boolean` | `undefined` | Object with autoplay parameters or boolean `true` to enable with default settings. |
| `breakpoints` | `object` | `undefined` | Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, changing these properties will have an effect: `slidesPerView`,  `spaceBetween`. |
| `loop` | `boolean` | `false` | Set to `true` to enable continuous loop mode. Because of nature of how the loop mode works (it will rearrange slides), total number of slides must be `>= slidesPerView * 2`. |
| `navigationNext` | `object\|string` | `undefined` | The selector of the element that will work like "next" button after click on it . |
| `navigationPrev` | `object\|string` | `undefined` | The selector of the element that will work like "prev" button after click on it. |
| `pagination` | `object\|string` | `undefined` | The selector or the pagination element. |
| `slidesPerView` | `number\|string` | `1` | Number of slides per view (slides visible at the same time on slider's container). Pass the `'auto'` value to automatically determine the number. |
| `spaceBetween` | `string\|number` | `0` | Distance between slides in pixels. |
| `speed` | `number` | `300` | Duration of transition between slides (in milliseconds). |
| `thumbs` | `string` | `undefined` | The selector of the carousel element used as thumbs. |
{{< /bs-table >}}

#### Autoplay parameters

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `delay` | `number` | `3000` | Delay between transitions (in milliseconds). |
| `disableOnInteraction` | `boolean` | `true` | Set to `false` and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction. |
| `pauseOnMouseEnter` | `boolean` | `false` | When enabled autoplay will be paused on pointer (mouse) enter over Swiper container. |
| `reverseDirection` | `boolean` | `false` | Enables autoplay in reverse direction. |
| `stopOnLastSlide` | `boolean` | `false` | Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode). |
| `waitForTransition` | `boolean` | `true` | When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition. |
{{< /bs-table >}}

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `initialized.of.carousel` | This event is fired immediately when the carousel is ready. |
{{< /bs-table >}}

```js
const element = document.getElementById('carousel')

element.addEventListener('initialized.of.carousel', () => {
  // do something
})
```

## CSS

### Variables

{{< scss-docs name="carousel-css-vars" file="src/scss/_carousel.scss" >}}

### Sass variables

{{< scss-docs name="carousel-variables" file="src/scss/_variables.scss" >}}
