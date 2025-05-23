---
layout: docs
title: Slider
description: The Slider component is crafted to showcase individual slides with a fade transition effect.
group: components
toc: true
---

## About
This component is ideal for displaying a series of images, text, or other content types, transitioning smoothly from one slide to the next.

## Usage
The slider component can be implemented with HTML markup and attribute configurations.

{{< callout info >}}
The component uses the [Swiper](https://swiperjs.com/) library behind the scenes.
{{< /callout >}}

## Examples

### Basic example

{{< example >}}
<div class="slider">
  <div class="swiper" data-of-slider='{
      "pagination": "#slider-pagination-1",
      "navigationNext": "#slider-btn-next-1",
      "navigationPrev": "#slider-btn-prev-1"
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

  <div class="slider-pagination slider-pagination--bottom-center" id="slider-pagination-1"></div>

  <div class="slider-navigation">
     <button type="button" class="slider-button-prev btn btn-square btn-primary" id="slider-btn-prev-1">
      {{< icon name="caret-left-fill" >}}
    </button>
    <button type="button" class="slider-button-next btn btn-square btn-primary" id="slider-btn-next-1">
      {{< icon name="caret-right-fill" >}}
    </button>
  </div>
</div>
{{< /example >}}

### Loop & autoplay
Autoplay starts automatically cycling through slides. Loop continues play after the last slide.

{{< example >}}
<div class="slider">
  <div class="swiper" data-of-slider='{
      "autoplay": true,
      "loop": true,
      "speed": 600,
      "pagination": "#slider-pagination-2",
      "navigationNext": "#slider-btn-next-2",
      "navigationPrev": "#slider-btn-prev-2"
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

  <div class="slider-pagination slider-pagination--bottom-center" id="slider-pagination-2"></div>

  <div class="slider-navigation">
     <button type="button" class="slider-button-prev btn btn-square btn-primary" id="slider-btn-prev-2">
      {{< icon name="caret-left-fill" >}}
    </button>
    <button type="button" class="slider-button-next btn btn-square btn-primary" id="slider-btn-next-2">
      {{< icon name="caret-right-fill" >}}
    </button>
  </div>
</div>
{{< /example >}}

### Pagination position
You can place the pagination in different positions.

{{< example >}}
<div class="slider">
  <div class="swiper" data-of-slider='{
      "pagination": "#slider-pagination-3"
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

  <div id="slider-pagination-3" class="slider-pagination slider-pagination--top-right"></div>
</div>
{{< /example >}}

The position of the pagination can be modified by adding one of the following modifier classes:

- `.slider-pagination--top-left`
- `.slider-pagination--top-center`
- `.slider-pagination--top-right`
- `.slider-pagination--bottom-left`
- `.slider-pagination--bottom-center`
- `.slider-pagination--bottom-right`

Each class adjusts the position of the pagination according to its description (top or bottom, combined with left, center, or right).

### Pagination position static
If you do not want to place a pagination above the slide you can use one of the defined classes

- `.slider-pagination--left`
- `.slider-pagination--center`
- `.slider-pagination--right`

{{< example >}}
<div class="slider">
  <div class="swiper" data-of-slider='{
      "pagination": "#slider-pagination-3-static"
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

  <div id="slider-pagination-3-static" class="slider-pagination slider-pagination--center"></div>
</div>
{{< /example >}}

### Content example
{{< example >}}
<div class="slider">
  <div class="swiper" data-of-slider='{
      "loop": true,
      "pagination": "#slider-pagination-4",
      "navigationNext": "#slider-btn-next-4",
      "navigationPrev": "#slider-btn-prev-4"
  }'>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="wrapper">
          <div class="wrapper-content pt-5 pb-5 ps-5 pe-5 text-center" style="--bs-wrapper-color: #fff">
            <h2>Your next destination</h2>
            <p>Escape ordinary, experience majestic views!</p>
            <p>
              <a href="#" class="btn btn-light btn-sm icon-link">Find out more {{< icon name="arrow-right" >}}</a>
            </p>
          </div>
          <div class="wrapper-bg-media">
            <figure>
              <img src="assets/media/sample-image.jpg" alt="">
            </figure>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="wrapper">
          <div class="wrapper-content text-center" style="--bs-wrapper-color: #fff">
            <h2>Earth from space</h2>
            <p>Touch the stars, gaze at Earth's grace!</p>
          </div>
          <div class="wrapper-bg-media">
            <figure>
              <video autoplay muted playsinline loop>
                <source src="assets/media/sample-video.mp4" type="video/mp4">
                <source src="assets/media/sample-video.ogg" type="video/ogg">
              </video>
            </figure>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Slide 3" >}}
      </div>
    </div>
  </div>

  <div class="slider-pagination slider-pagination--bottom-center" id="slider-pagination-4"></div>

  <div class="slider-navigation">
     <button type="button" class="slider-button-prev btn btn-square btn-primary" id="slider-btn-prev-4">
      {{< icon name="caret-left-fill" >}}
    </button>
    <button type="button" class="slider-button-next btn btn-square btn-primary" id="slider-btn-next-4">
      {{< icon name="caret-right-fill" >}}
    </button>
  </div>
</div>
{{< /example >}}

### Thumbs
{{< example >}}
<div class="slider">
  <div class="swiper" data-of-slider='{
      "pagination": "#slider-pagination-5",
      "paginationType": "fraction",
      "navigationNext": "#slider-btn-next-5",
      "navigationPrev": "#slider-btn-prev-5",
      "scrollbar": "#slider-scrollbar-5",
      "loop": true,
      "thumbs": "#slider-thumbnails-5"
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
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100" color="#222" background="#444" text="Slide 4" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100" color="#111" background="#333" text="Slide 5" >}}
      </div>
    </div>
  </div>

  <div class="slider-thumbs">
    <div class="carousel">
      <div id="slider-thumbnails-5" class="swiper" data-of-carousel='{
          "slidesPerView": "auto",
          "spaceBetween": 12
      }'>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="slider-thumb">
              <div class="slider-thumb-text">
                Slide 1
              </div>
              {{< placeholder width="400" height="280" class="img-fluid img-thumbnail w-100" color="#777" background="#999" text="Slide 1" >}}
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slider-thumb">
              <div class="slider-thumb-text">
                Slide 2
              </div>
            {{< placeholder width="400" height="280" class="img-fluid img-thumbnail w-100" color="#666" background="#888" text="Slide 2" >}}
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slider-thumb">
              <div class="slider-thumb-text">
                Slide 3
              </div>
            {{< placeholder width="400" height="280" class="img-fluid img-thumbnail w-100" color="#555" background="#777" text="Slide 3" >}}
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slider-thumb">
              <div class="slider-thumb-text">
                Slide 4
              </div>
            {{< placeholder width="400" height="280" class="img-fluid img-thumbnail w-100" color="#444" background="#666" text="Slide 4" >}}
            </div>
          </div>
          <div class="swiper-slide">
            <div class="slider-thumb">
              <div class="slider-thumb-text">
                Slide 5
              </div>
            {{< placeholder width="400" height="280" class="img-fluid img-thumbnail w-100" color="#333" background="#555" text="Slide 5" >}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slider-thumbs-navigation">
      <div class="slider-navigation-static">
         <button type="button" class="carousel-button-prev btn btn-square btn-primary" id="slider-btn-prev-5">
          {{< icon name="caret-left-fill" >}}
        </button>
        <button type="button" class="carousel-button-next btn btn-square btn-primary" id="slider-btn-next-5">
          {{< icon name="caret-right-fill" >}}
        </button>
      </div>

      <div class="slider-scrollbar" id="slider-scrollbar-5"></div>

      <div class="slider-pagination-fraction" id="slider-pagination-5"></div>
    </div>
  </div>
</div>
{{< /example >}}

### Wheel slider

Add the wheel to the slider, which shows the current slide. This is a purely decorative element. The SVG must follow the similar structure as the one in the example.

{{< callout info >}}
**Heads up!** Be sure to set a fixed slider height, as the slider on the desktop is in vertical mode. You may want to use `.vh-100-header` and `.max-vh-100-header` CSS classes.
{{< /callout >}}

You can use the `wheelBreakpoint` option to define at what breakpoint the slider will be switched to mobile/desktop mode.

{{< example >}}
<div class="slider slider-with-wheel" style="height:400px">
  <div class="swiper" data-of-slider='{
      "loop": true,
      "navigationNext": "#slider-wheel-next",
      "navigationPrev": "#slider-wheel-prev",
      "pagination": "#slider-wheel-pagination",
      "paginationType": "fraction",
      "wheel": "#slider-wheel"
    }'>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100 h-100" color="#555" background="#777" text="Slide 1" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100 h-100" color="#444" background="#666" text="Slide 2" >}}
      </div>
      <div class="swiper-slide">
        {{< placeholder width="755" height="400" class="bd-placeholder-img-lg d-block w-100 h-100" color="#333" background="#555" text="Slide 3" >}}
      </div>
    </div>
  </div>

  <div id="slider-wheel" class="slider-wheel">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 740 740">
      <circle cx="370.33" cy="370.221" r="350.5" style="fill:none;stroke:currentColor"/>
      <circle cx="370.33" cy="19.324" r="16" style="fill:none;stroke:currentColor"/>
      <circle cx="370.33" cy="19.324" r="7" style="fill:currentColor"/>
      <circle cx="618.199" cy="122.268" r="16" style="fill:none;stroke:currentColor"/>
      <circle cx="618.199" cy="122.268" r="7" style="fill:currentColor"/>
      <circle cx="720.676" cy="370.221" r="16" style="fill:none;stroke:currentColor"/>
      <circle cx="720.676" cy="370.221" r="7" style="fill:currentColor"/>
      <circle cx="617.732" cy="618.199" r="16" style="fill:none;stroke:currentColor"/>
      <circle cx="617.732" cy="618.199" r="7" style="fill:currentColor"/>
      <circle cx="369.67" cy="720.676" r="16" style="fill:none;stroke:currentColor"/>
      <circle cx="369.67" cy="720.676" r="7" style="fill:currentColor"/>
      <circle cx="121.801" cy="617.732" r="16" style="fill:none;stroke:currentColor"/>
      <circle cx="121.801" cy="617.732" r="7" style="fill:currentColor"/>
      <circle cx="19.324" cy="370.221" r="16" style="fill:none;stroke:currentColor"/>
      <circle cx="19.324" cy="370.221" r="7" style="fill:currentColor"/>
      <circle cx="122.268" cy="121.801" r="16" style="fill:none;stroke:currentColor"/>
      <circle cx="122.268" cy="121.801" r="7" style="fill:currentColor"/>
    </svg>
  </div>

  <div class="slider-navigation">
    <button type="button" class="slider-button-prev btn btn-square text-white" id="slider-wheel-prev">
      <span class="d-none d-md-block">{{< icon name="arrow-up" >}}</span>
      <span class="d-md-none">{{< icon name="arrow-left" >}}</span>
    </button>

    <div class="slider-pagination-fraction" id="slider-wheel-pagination"></div>

    <button type="button" class="slider-button-next btn btn-square text-white" id="slider-wheel-next">
      <span class="d-none d-md-block">{{< icon name="arrow-down" >}}</span>
      <span class="d-md-none">{{< icon name="arrow-right" >}}</span>
    </button>
  </div>
</div>
{{< /example >}}

## Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `autoplay` | `object\|boolean` | `undefined` | Object with autoplay parameters or boolean `true` to enable with default settings. |
| `loop` | `boolean` | `false` | Set to `true` to enable continuous loop mode. Because of nature of how the loop mode works (it will rearrange slides), total number of slides must be `>= slidesPerView * 2`. |
| `navigationNext` | `object\|string` | `undefined` | The selector of the element that will work like "next" button after click on it . |
| `navigationPrev` | `object\|string` | `undefined` | The selector of the element that will work like "prev" button after click on it. |
| `pagination` | `object\|string` | `undefined` | The selector or the pagination element. |
| `speed` | `number` | `300` | Duration of transition between slides (in milliseconds). |
| `thumbs` | `object\|string` | `undefined` | The selector of the thumbs element. |
| `wheel` | `object\|string` | `undefined` | The selector of the wheel element. |
| `wheelBreakpoint` | `string` | `md` | The breakpoint at which the wheel slider will be switched to mobile/desktop mode. |
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
| `initialized.of.slider` | This event is fired immediately when the slider is ready. |
{{< /bs-table >}}

```js
const element = document.getElementById('slider')

element.addEventListener('initialized.of.slider', () => {
  // do something
})
```

## CSS

### Variables

{{< scss-docs name="slider-css-vars" file="src/scss/_slider.scss" >}}

### Sass variables

{{< scss-docs name="slider-variables" file="src/scss/_variables.scss" >}}
