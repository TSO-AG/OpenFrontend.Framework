---
layout: docs
title: Print Styles
description: With OpenFrontend.Framework, we supply basic styles for print. As every webpage is unique, you might need to create your own print styles.
group: layout
toc: true
---

When the `$enable-print-styles` option is enabled, we set elementary page styles for print.

```scss
$enable-print-styles: true; // enabled by default
```

 Additionally, we provide you with SCSS variables to further customize your print styles:

```scss
$print-page-size: a4;
$print-body-min-width: 992px;
```

## Grid system

We have also enriched our grid system with special print classes. The operation principle of these classes is similar to the standard [grid system]({{< docsref "/layout/grid" >}}).

These are the classes we provide:

- `.row-cols-print-auto` - allows creating responsive print-specific rows with automatically arranged columns.
- `.row-cols-print-*` - creates responsive print-specific rows with a specific number of equally-sized columns.
- `.col-print` - defines generic print-specific column that takes up available horizontal space.
- `.col-print-auto` - creates responsive print-specific columns that automatically size itself based on its content.
- `.col-print-*` - defines print-specific columns that take up a specific portion of available horizontal space.

{{< callout info >}}
Note: These classes are available when `$enable-print-styles: true` is set.
{{< /callout >}}

## Carousel component
We have also added some useful print-specific classes for our carousel component:

- `.carousel-print-col-{1-12}`: with this class, you can dictate the number of visible slides in the carousel during print. You can set the distance between the slides through the SCSS variable `$print-carousel-space-between: 10px !default`.
- `.carousel-print-all`: this class ensures the slides that do not fit in the row are displayed in subsequent roles (they are hidden by default).

You can see a live demonstration of how to use these settings in a real-world example [here]({{< docsref "/examples/hotel-detail" >}}).
This showcases the practical application of `carousel-print-col-{1-12}` class along with other print-style classes.

### Example

```html
<div class="carousel carousel-navigation-center carousel-print-col-3 carousel-print-all">
  <div class="swiper" data-of-carousel='{
      "slidesPerView": 6
  }'>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        ...
      </div>
      <div class="swiper-slide">
        ...
      </div>
      <div class="swiper-slide">
        ...
      </div>
      ...
    </div>
  </div>
</div>
```

{{< callout info >}}
Note: These classes are available when `$enable-print-styles: true` is set.
{{< /callout >}}

## CSS

### Sass variables
{{< scss-docs name="print-variables" file="src/scss/_variables.scss" >}}
