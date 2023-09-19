---
layout: docs
title: Search
description: Display the search form and search results on your website.
group: components
toc: true
---

## Examples

### Search form
This example demonstrates a quick and easy way to add the Search component to your webpage:

{{< example >}}
<form class="search-form">
  <label for="search-form-keywords">Search</label>

  <div class="search-form-inputs">
    <input type="search" id="search-form-keywords" name="keywords" placeholder="Search…">
    <button type="submit">
      <i class="ofi-search"></i>
      <span class="visually-hidden">Search</span>
    </button>
  </div>
</form>
{{< /example >}}

### Autocomplete
You can add the autocomplete feature to the Search component using the `<datalist>` element, which allows a user to pick up the suggestions from the predefined list of options:

{{< example >}}
<form class="search-form">
  <label for="search-form-keywords">Search</label>

  <div class="search-form-inputs">
    <input type="search" list="search-autocomplete" id="search-form-keywords" name="keywords" placeholder="Type something…" autocomplete="off">
    <button type="submit">Search</button>
  </div>

  <div class="form-text">Hint: use the search suggestions for more accurate search results.</div>

  <datalist id="search-autocomplete">
    <option value="Chocolate"></option>
    <option value="Coconut"></option>
    <option value="Mint"></option>
    <option value="Strawberry"></option>
    <option value="Vanilla"></option>
  </datalist>
</form>
{{< /example >}}

### Search result
The markup below shows how you can display the search result on your page:

{{< example >}}
<div class="search-result">
  <figure class="search-result-image">
    {{< placeholder width="200" height="200" text="Preview">}}
  </figure>

  <div class="search-result-content">
    <h4><a href="#">Mea culpa</a></h4>
    <p>Incididunt id commodo laboris. Laborum <mark>culpa</mark> anim excepteur duis tempor exercitation consectetur deserunt aliqua duis nostrud <mark>culpa</mark>. Mollit id ut id sunt magna amet.</p>
    <p class="search-result-url">https://example.tld/lorem/mea-culpa.html</p>
  </div>
</div>
{{< /example >}}

## CSS

### Variables

Search result variables:

{{< scss-docs name="search-result-css-vars" file="src/scss/_search.scss" >}}

### Sass variables

Search result variables:

{{< scss-docs name="search-result-variables" file="src/scss/_variables.scss" >}}
