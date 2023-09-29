---
layout: docs
title: Combo box
description: Display various form fields in a standardized two-column layout.
group: forms
toc: true
---

## Example

### Inline

{{< example >}}
<div class="combo-box">
  <div class="combo-box-row">
    <div class="combo-box-label">
      <label for="inline-adults" class="form-label">Adults</label>
      <div class="form-text">Ages 13 or above</div>
    </div>
    <div class="combo-box-input">
      <div class="input-group" data-of-quantity-picker>
        <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
        <input type="number" id="inline-adults" class="form-control text-center" value="5" min="1" max="10">
        <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
      </div>
    </div>
  </div>
  <div class="combo-box-divider"></div>
  <div class="combo-box-row">
    <div class="combo-box-label">
      <label for="inline-children" class="form-label">Children</label>
      <div class="form-text">Ages 13 below</div>
    </div>
    <div class="combo-box-input">
      <div class="input-group w-auto" data-of-quantity-picker>
        <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
        <input type="number" id="inline-children" class="form-control text-center" value="0" min="0" max="10">
        <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
      </div>
    </div>
  </div>
  <div class="combo-box-divider"></div>
  <div class="combo-box-row">
    <div class="combo-box-label">
      <label for="inline-rooms" class="form-label">Rooms</label>
      <div class="form-text">Max 8 rooms</div>
    </div>
    <div class="combo-box-input">
      <div class="input-group w-auto" data-of-quantity-picker>
        <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
        <input type="number" id="inline-rooms" class="form-control text-center" value="1" min="1" max="8">
        <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Dropdown

{{< example >}}
<div class="dropdown">
  <label for="guests" class="form-label">Guests and rooms</label>
  <input type="text" id="guests" class="form-control" data-bs-auto-close="outside" data-bs-toggle="dropdown">

  <div class="dropdown-menu">
    <div class="combo-box">
      <div class="combo-box-row">
        <div class="combo-box-label">
          <label for="dropdown-adults" class="form-label">Adults</label>
          <div class="form-text">Ages 13 or above</div>
        </div>
        <div class="combo-box-input">
          <div class="input-group" data-of-quantity-picker>
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
            <input type="number" id="dropdown-adults" class="form-control text-center" value="5" min="1" max="10">
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
          </div>
        </div>
      </div>
      <div class="combo-box-divider"></div>
      <div class="combo-box-row">
        <div class="combo-box-label">
          <label for="dropdown-children" class="form-label">Children</label>
          <div class="form-text">Ages 13 below</div>
        </div>
        <div class="combo-box-input">
          <div class="input-group w-auto" data-of-quantity-picker>
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
            <input type="number" id="dropdown-children" class="form-control text-center" value="0" min="0" max="10">
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
          </div>
        </div>
      </div>
      <div class="combo-box-divider"></div>
      <div class="combo-box-row">
        <div class="combo-box-label">
          <label for="dropdown-rooms" class="form-label">Rooms</label>
          <div class="form-text">Max 8 rooms</div>
        </div>
        <div class="combo-box-input">
          <div class="input-group w-auto" data-of-quantity-picker>
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
            <input type="number" id="dropdown-rooms" class="form-control text-center" value="1" min="1" max="8">
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## CSS

{{< scss-docs name="combo-box-css-vars" file="src/scss/form/_combo-box.scss" >}}

### Sass variables

{{< scss-docs name="combo-box-variables" file="src/scss/_variables.scss" >}}
