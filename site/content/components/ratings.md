---
layout: docs
title: Ratings
description: The Ratings component of the OpenFrontend.Framework is a versatile and interactive way to incorporate star ratings into your web applications.
group: components
toc: true
---

## Overview
By default, it operates on a scale of 1-5 stars, but this can be easily adjusted. Users can rate items or see average ratings, depending on how you set up the component.

## Examples
To make the most out of the Ratings component, let’s explore its various attributes and how they can be utilized with `data-` attributes.

### Basic Example
This example demonstrates a quick and easy way to add the Ratings component to your webpage and retrieve the clicked rating:

{{< example >}}
<div data-of-rating id="rating"></div>

<script>
  const element = document.getElementById('rating');

  element.addEventListener('clicked.of.rating', (event) => {
    alert(`Clicked rating: ${event.detail.rating}`);
    element.rating.readOnly(true);
  });
</script>
{{< /example >}}

### Score
You can preset a score for the Ratings component, which might represent an average score from multiple users. This is achieved using the `data-score` attribute

{{< example >}}
<div data-of-rating data-score="3"></div>
{{< /example >}}

### Read only
To display a rating without allowing further user interactions (e.g., in cases where you just want to show an average score), use the `data-read-only` attribute:

{{< example >}}
<div data-of-rating data-score="3" data-read-only="true"></div>
{{< /example >}}

### Half Ratings
The Ratings component supports half-star increments, offering a more refined scoring system, especially useful for averages that fall between whole numbers. This is easily enabled using the `data-half` attribute. The `data-number` attribute can also be adjusted to define the maximum number of stars, if you wish to operate on scales other than the default 1-5.

{{< example >}}
<div data-of-rating data-half="true" data-number="10" data-score="7.5"></div>
{{< /example >}}

With this configuration, you'll have a 10-star rating system with the current score set at 7.5 stars.

## CSS

### Sass variables

{{< scss-docs name="rating-variables" file="src/scss/_variables.scss" >}}
