---
layout: docs
title: Combo box
description: Display various form fields in a standardized two-column layout.
group: forms
toc: true
---

## Examples

### Inline

{{< example >}}
<div class="combo-box">
  <div class="combo-box-row">
    <div class="combo-box-label">
      <label for="inline-guests" class="form-label">Guests</label>
      <div class="form-text">Adults and children</div>
    </div>
    <div class="combo-box-input">
      <div class="input-group" data-of-quantity-picker>
        <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
        <input type="number" id="inline-guests" class="form-control text-center" value="5" min="1" max="10" readonly>
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
        <input type="number" id="inline-rooms" class="form-control text-center" value="1" min="1" max="8" readonly>
        <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
      </div>
    </div>
  </div>
  <div class="combo-box-divider"></div>
  <div class="combo-box-row">
    <div class="combo-box-label">
      <label for="inline-animals" class="form-label">Animals</label>
      <div class="form-text">We love animals!</div>
    </div>
    <div class="combo-box-input">
      <input type="checkbox" id="inline-animals" class="form-check-input" value="1">
    </div>
  </div>
  <div class="combo-box-divider"></div>
  <div class="combo-box-row">
    <div class="combo-box-label">
      <label for="inline-pickup" class="form-label">Airport pickup</label>
      <div class="form-text">Do you need a ride?</div>
    </div>
    <div class="combo-box-input">
      <select id="inline-pickup" class="form-select">
        <option value="no">No, thanks.</option>
        <option value="yes">Yes, please!</option>
      </select>
    </div>
  </div>
  <div class="combo-box-divider"></div>
  <div class="combo-box-row">
    <div class="combo-box-label">
      <label for="inline-postal" class="form-label">Postal code</label>
      <div class="form-text">Your current location</div>
    </div>
    <div class="combo-box-input">
      <input type="text" id="inline-postal" class="form-control">
    </div>
  </div>
</div>
{{< /example >}}

### Dropdown

You can display the combo box component as a fancy dropdown widget. You can use the `data-of-combo-box` data attribute to enable the automatic generation of a summary.

{{< example >}}
<div class="dropdown" data-of-combo-box='{ "target": "#dropdown-guests" }'>
  <label for="dropdown-guests" class="form-label">Your reservation</label>
  <input type="text" id="dropdown-guests" class="form-select" data-bs-auto-close="outside" data-bs-toggle="dropdown" readonly>

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
            <input type="number" id="dropdown-adults" name="adults" class="form-control text-center" value="2" min="1" max="10" readonly>
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
            <input type="number" id="dropdown-children" class="form-control text-center" value="0" min="0" max="10" readonly>
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
            <input type="number" id="dropdown-rooms" name="rooms" class="form-control text-center" value="1" min="1" max="8" readonly>
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
          </div>
        </div>
      </div>
      <div class="combo-box-divider"></div>
      <div class="combo-box-row">
        <div class="combo-box-label">
          <label for="dropdown-animals" class="form-label">Animals</label>
          <div class="form-text">We love animals!</div>
        </div>
        <div class="combo-box-input">
          <input type="checkbox" id="dropdown-animals" name="animals" class="form-check-input" value="1">
        </div>
      </div>
      <div class="combo-box-divider"></div>
      <div class="combo-box-row">
        <div class="combo-box-label">
          <label for="dropdown-pickup" class="form-label">Airport pickup</label>
          <div class="form-text">Do you need a ride?</div>
        </div>
        <div class="combo-box-input">
          <select id="dropdown-pickup" class="form-select" name="pickup">
            <option value="no">No, thanks.</option>
            <option value="yes">Yes, please!</option>
          </select>
        </div>
      </div>
      <div class="combo-box-divider"></div>
      <div class="combo-box-row">
        <div class="combo-box-label">
          <label for="dropdown-postal" class="form-label">Postal code</label>
          <div class="form-text">Your current location</div>
        </div>
        <div class="combo-box-input">
          <input type="text" name="postal" id="dropdown-postal" class="form-control">
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Custom formatting

The default formatter has a hardcoded way of generating a summary. You can also use your custom logic to compute a summary in any format you want. In that case, you shouldn't use the `data-of-combo-box` attribute, but you have to initialize the combo box on your own.

{{< example >}}
<div id="custom-combo-box" class="dropdown">
  <label for="custom-guests" class="form-label">Your reservation</label>
  <input type="text" id="custom-guests" class="form-select" data-bs-auto-close="outside" data-bs-toggle="dropdown" readonly>

  <div class="dropdown-menu">
    <div class="combo-box">
      <div class="combo-box-row">
        <div class="combo-box-label">
          <label for="custom-adults" class="form-label">Adults</label>
          <div class="form-text">Ages 13 or above</div>
        </div>
        <div class="combo-box-input">
          <div class="input-group" data-of-quantity-picker>
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
            <input type="number" id="custom-adults" name="adults" class="form-control text-center" value="2" min="1" max="10" readonly>
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
          </div>
        </div>
      </div>
      <div class="combo-box-divider"></div>
      <div class="combo-box-row">
        <div class="combo-box-label">
          <label for="custom-children" class="form-label">Children</label>
          <div class="form-text">Ages 13 below</div>
        </div>
        <div class="combo-box-input">
          <div class="input-group w-auto" data-of-quantity-picker>
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
            <input type="number" id="custom-children" name="children" class="form-control text-center" value="0" min="0" max="10" readonly>
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
          </div>
        </div>
      </div>
      <div class="combo-box-divider"></div>
      <div class="combo-box-row">
        <div class="combo-box-label">
          <label for="custom-rooms" class="form-label">Rooms</label>
          <div class="form-text">Max 8 rooms</div>
        </div>
        <div class="combo-box-input">
          <div class="input-group w-auto" data-of-quantity-picker>
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-minus><i class="ofi-dash"></i></button>
            <input type="number" id="custom-rooms" name="rooms" class="form-control text-center" value="1" min="1" max="8" readonly>
            <button type="button" class="btn btn-icon btn-primary" data-of-quantity-picker-plus><i class="ofi-plus"></i></button>
          </div>
        </div>
      </div>
      <div class="combo-box-divider"></div>
      <div class="combo-box-row">
        <div class="combo-box-label">
          <label for="custom-pickup" class="form-label">Airport pickup</label>
          <div class="form-text">Do you need a ride?</div>
        </div>
        <div class="combo-box-input">
          <select id="custom-pickup" class="form-select" name="pickup">
            <option value="no">No, thanks.</option>
            <option value="yes">Yes, please!</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

Create a new instance of the combo box component with the `format` and `target` options. The `format` expects a function that receives the `data` argument containing all input fields as a mapper object in `field_name => field_element` format.

```js
openFrontend.ComboBox.then(component => new component(document.getElementById('custom-combo-box'), {
  target: document.getElementById('custom-guests'),
  format(data) {
    const guests = Number.parseInt(data.adults.value) + Number.parseInt(data.children.value)
    const rooms = Number.parseInt(data.rooms.value)
    const chunks = [
      `${guests} Guest${guests > 1 ? 's' : ''}`,
      `${rooms} Room${rooms > 1 ? 's' : ''}`,
    ]

    if (data.pickup.value === 'yes') {
      chunks.push(data.pickup.labels[0].textContent)
    }

    return chunks.join(', ')
  }
}))
```

<script>
document.addEventListener('DOMContentLoaded', () => {
  openFrontend.ComboBox.then(component => new component(document.getElementById('custom-combo-box'), {
    target: document.getElementById('custom-guests'),
    format: function (data) {
      const guests = parseInt(data.adults.value) + parseInt(data.children.value)
      const rooms = parseInt(data.rooms.value)

      const chunks = [
        `${guests} Guest${guests > 1 ? 's' : ''}`,
        `${rooms} Room${rooms > 1 ? 's' : ''}`,
      ]

      if (data.pickup.value === 'yes') {
        chunks.push(data.pickup.labels[0].textContent)
      }

      return chunks.join(', ');
    }
  }))
})
</script>

## Usage

### Options

You can pass extra options as JSON value of the data attribute. Here is the list of all available options (alphabetically):

{{< bs-table "table" >}}
| Option | Type | Default | Explanation |
| --- | --- | --- | --- |
| `format` | `function` | `undefined` | A custom callback to format the summary. This function accepts all input fields data as an argument. See the data structure details below. Note that this option cannot be defined in JSON but has to be passed on when initializing the component in your custom JavaScript code. |
| `target` | `element\|string` | `undefined` | The target element that will receive a summary as `textContent` or input's `value`. |
{{< /bs-table >}}

### Methods

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `getData` | Get the input fields data. The very same object is passed on to the `format` callback. See the data structure details below. |
| `getSummary` | Get the summary of an input field. Accepts the HTML element and value as arguments. Returns a formatted string. You may find this method useful in your custom `format` callback. |
| `getValue` | Get the value of an input field for summary. Accepts the HTML element. Returns the parsed input field value. You may find this method useful in your custom `format` callback. |
{{< /bs-table >}}

```js
const comboBox = await openFrontend.ComboBox.then(component => component.getInstance('#example')) // Returns a Bootstrap combo box instance

// getData example
comboBox.getData()
```

#### Data structure

The input fields data passed on to the `format` option callback and used in the `getData()` method has the following structure:

```js
const data = {
  first_name: document.querySelector('input[name="first_name"]'),
  last_name: document.querySelector('input[name="last_name"]'),
}

data.first_name.value // access the value of input
```

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `initialized.of.combo_box` | This event is fired immediately when the combo box JavaScript features are ready. |
| `changed.of.combo_box` | This event is fired immediately when any of the combo box input fields are changed. |
{{< /bs-table >}}

```js
const element = document.getElementById('combo-box')

element.addEventListener('changed.of.combo_box', async () => {
  const comboBox = await openFrontend.ComboBox.then(component => component.getInstance(element))
  comboBox.getData()
})
```

## CSS

{{< scss-docs name="combo-box-css-vars" file="src/scss/form/_combo-box.scss" >}}

### Sass variables

{{< scss-docs name="combo-box-variables" file="src/scss/_variables.scss" >}}
