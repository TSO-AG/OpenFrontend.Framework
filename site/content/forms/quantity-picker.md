---
layout: docs
title: Quantity picker
description: The quantity picker displays an interface to easily enter quantities of any type.
group: forms
toc: true
---

## Example

The quantity picker allows you to change the value using -/+ buttons but also by editing the input field directly:

{{< example >}}
<div>
  <label for="lucky" class="form-label">What's your lucky number?</label>
  <div class="input-group" data-of-quantity-picker>
    <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
    <input type="number" id="lucky" class="form-control text-center" value="0">
    <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
  </div>
</div>
{{< /example >}}

You can also limit the input values using the `min`, `max`, and `readonly` HTML attributes:

{{< example >}}
<div>
  <label for="number" class="form-label">Pick a number from 1 to 10!</label>
  <div class="input-group" data-of-quantity-picker>
    <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
    <input type="number" id="number" class="form-control text-center" value="5" min="1" max="10" readonly>
    <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
  </div>
</div>
{{< /example >}}

Use the `step` HTML attribute to define the interval between legal numbers:

{{< example >}}
<div>
  <label for="water" class="form-label">How many milliliters of water did you drink today?</label>
  <div class="input-group" data-of-quantity-picker>
    <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
    <input type="number" id="water" class="form-control text-center" value="500" min="0" step="100" readonly>
    <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
  </div>
</div>
{{< /example >}}

## Usage

### Options

There are no configuration options you can set in JavaScript. Instead, you should use the default HTML attributes on the `<input type="number">` element.

{{< bs-table "table" >}}
| Attribute | Type | Explanation |
| --- | --- | --- |
| `min` | `number` | The minimum value allowed. |
| `max` | `number` | The maximum value allowed. |
| `step` | `number` | The interval between legal numbers. |
| `value` | `number` | The default value. |
{{< /bs-table >}}

### Methods

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `getMin` | Get the minimum value. Returns `null` by default. |
| `getMax` | Get the maximum value. Returns `null` by default. |
| `getStep` | Get the interval between legal numbers. Returns `1` by default. |
| `getValue` | Get the current value. |
{{< /bs-table >}}

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `initialized.of.quantity_picker` | This event is fired immediately when the quantity picker is ready to use. |
| `changed.of.quantity_picker` | This event is fired immediately when the quantity picker value is changed. |
{{< /bs-table >}}

```js
const element = document.getElementById('quantity-picker')

element.addEventListener('initialized.of.quantity_picker', async () => {
  const quantityPicker = await openFrontend.QuantityPicker.then(component => component.getInstance(element))
  quantityPicker.getValue()
})
```
