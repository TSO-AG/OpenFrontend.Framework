---
layout: docs
title: Quantity picker
description: The quantity picker displays an interface to easily enter multiple quantities.
group: forms
toc: true
---

## Examples

### Basic

Quantity picker without any configuration.

{{< example >}}
<div class="input-group" data-of-quantity-picker>
  <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
  <input type="number" class="form-control text-center" value="5" min="1" max="10">
  <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
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
