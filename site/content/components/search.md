---
layout: docs
title: Search
description: Display the search form and search results on your website.
group: components
toc: true
---

## Examples

### Basic example
This example demonstrates a quick and easy way to add the Search component to your webpage:

{{< example >}}
<form>
    <label for="search-form-keywords" class="visually-hidden">Search</label>

    <div class="input-group">
        <input type="search" id="search-form-keywords" class="form-control" name="keywords" placeholder="Search…">
        <button type="submit" class="btn btn-primary">
            <i class="ofi-search"></i>
            <span class="visually-hidden">Search</span>
        </button>
    </div>
</form>
{{< /example >}}

### Autocomplete
You can add the autocomplete feature to the Search component using the `<datalist>` element, which allows a user to pick up the suggestions from the predefined list of options:

{{< example >}}
<form>
    <label for="search-form-keywords" class="visually-hidden">Search</label>

    <div class="input-group">
        <input type="search" list="search-autocomplete" id="search-form-keywords" class="form-control" name="keywords" placeholder="Search…" autocomplete="off">
        <button type="submit" class="btn btn-primary">
            <i class="ofi-search"></i>
            <span class="visually-hidden">Search</span>
        </button>
    </div>

    <datalist id="search-autocomplete">
        <option value="Chocolate"></option>
        <option value="Coconut"></option>
        <option value="Mint"></option>
        <option value="Strawberry"></option>
        <option value="Vanilla"></option>
    </datalist>
</form>
{{< /example >}}

### Search results

@TODO
