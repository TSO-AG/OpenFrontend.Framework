---
layout: docs
title: Checks and radios
description: Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.
group: forms
aliases: "/forms/checks/"
toc: true
---

## Approach

Browser default checkboxes and radios are replaced with the help of `.form-check`, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Structurally, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify `id` and `for` attributes to relate the `<input>` and `<label>`. We use the sibling selector (`~`) for all our `<input>` states, like `:checked` or `:disabled`. When combined with the `.form-check-label` class, we can easily style the text for each item based on the `<input>`'s state.

Our checks use custom Bootstrap icons to indicate checked or indeterminate states.

## Checks

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
{{< /example >}}

### Indeterminate

Checkboxes can utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
  <label class="form-check-label" for="flexCheckIndeterminate">
    Indeterminate checkbox
  </label>
</div>
{{< /example >}}

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled" disabled>
  <label class="form-check-label" for="flexCheckIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
  <label class="form-check-label" for="flexCheckDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexCheckCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>
{{< /example >}}

### Tree

The tree component renders a hierarchical list of items with checkboxes. Each node can be expanded or collapsed to reveal nested children. Selection is managed per node, with support for the following states:

- Checked – the item is fully selected.
- Unchecked – the item is not selected.
- Indeterminate – the item’s selection is partially determined by its children.

This component is commonly used for multi-level selection scenarios such as permissions, categories, or structured data.

{{< example >}}
<div class="row">
  <div class="col-md-4">
    <h5>Example 1</h5>

    <ul role="tree" class="form-check-tree" data-of-check-tree>
      <li role="treeitem" aria-expanded="false">
        <button class="btn btn-icon" type="button" aria-expanded="false" aria-controls="check-tree-1-sub-1">
          <span class="form-check-tree-icon-expand">{{< icon name="chevron-right" >}}</span>
          <span class="form-check-tree-icon-collapse">{{< icon name="chevron-down" >}}</span>
        </button>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="check-tree-1-1">
          <label class="form-check-label" for="check-tree-1-1">Item 1</label>
          <span class="badge bg-secondary">53</span>
        </div>

        <ul id="check-tree-1-sub-1" role="group">
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-1-1-1">
              <label class="form-check-label" for="check-tree-1-1-1">Item 1.1</label>
              <span class="badge bg-secondary">20</span>
            </div>
          </li>
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-1-1-2">
              <label class="form-check-label" for="check-tree-1-1-2">Item 1.2</label>
              <span class="badge bg-secondary">33</span>
            </div>
          </li>
        </ul>
      </li>

      <li role="treeitem" aria-expanded="false">
        <button class="btn btn-icon" type="button" aria-expanded="false" aria-controls="check-tree-1-sub-2">
          <span class="form-check-tree-icon-expand">{{< icon name="chevron-right" >}}</span>
          <span class="form-check-tree-icon-collapse">{{< icon name="chevron-down" >}}</span>
        </button>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="check-tree-1-2">
          <label class="form-check-label" for="check-tree-1-2">Item 2</label>
          <span class="badge bg-secondary">18</span>
        </div>

        <ul id="check-tree-1-sub-2" role="group">
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-1-2-1">
              <label class="form-check-label" for="check-tree-1-2-1">Item 2.1</label>
              <span class="badge bg-secondary">2</span>
            </div>
          </li>
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-1-2-2">
              <label class="form-check-label" for="check-tree-1-2-2">Item 2.2</label>
              <span class="badge bg-secondary">7</span>
            </div>
          </li>
          <li role="treeitem" aria-expanded="false">
            <button class="btn btn-icon" type="button" aria-expanded="false" aria-controls="check-tree-1-sub-2-3">
              <span class="form-check-tree-icon-expand">{{< icon name="chevron-right" >}}</span>
              <span class="form-check-tree-icon-collapse">{{< icon name="chevron-down" >}}</span>
            </button>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="check-tree-1-2-3">
              <label class="form-check-label" for="check-tree-1-2-3">Item 2.3</label>
              <span class="badge bg-secondary">9</span>
            </div>

            <ul id="check-tree-1-sub-2-3" role="group">
              <li role="treeitem">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="check-tree-1-2-3-1">
                  <label class="form-check-label" for="check-tree-1-2-3-1">Item 2.3.1</label>
                  <span class="badge bg-secondary">2</span>
                </div>
              </li>
              <li role="treeitem">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="check-tree-1-2-3-2">
                  <label class="form-check-label" for="check-tree-1-2-3-2">Item 2.3.2</label>
                  <span class="badge bg-secondary">7</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="check-tree-1-3">
          <label class="form-check-label" for="check-tree-1-3">Item 3</label>
          <span class="badge bg-secondary">9</span>
        </div>
      </li>
    </ul>
  </div>
  <div class="col-md-4">
    <h5>Example 2</h5>
    <ul role="tree" class="form-check-tree" data-of-check-tree>
      <li role="treeitem" aria-expanded="false">
        <button class="btn btn-icon" type="button" aria-expanded="false" aria-controls="check-tree-2-sub-1">
          <span class="form-check-tree-icon-expand">{{< icon name="plus-square" >}}</span>
          <span class="form-check-tree-icon-collapse">{{< icon name="dash-square" >}}</span>
        </button>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="check-tree-2-1">
          <label class="form-check-label" for="check-tree-2-1">Item 1</label>
          <span class="badge bg-secondary">53</span>
        </div>

        <ul id="check-tree-2-sub-1" role="group">
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-2-1-1">
              <label class="form-check-label" for="check-tree-2-1-1">Item 1.1</label>
              <span class="badge bg-secondary">20</span>
            </div>
          </li>
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-2-1-2">
              <label class="form-check-label" for="check-tree-2-1-2">Item 1.2</label>
              <span class="badge bg-secondary">33</span>
            </div>
          </li>
        </ul>
      </li>

      <li role="treeitem" aria-expanded="false">
        <button class="btn btn-icon" type="button" aria-expanded="false" aria-controls="check-tree-2-sub-2">
          <span class="form-check-tree-icon-expand">{{< icon name="plus-square" >}}</span>
          <span class="form-check-tree-icon-collapse">{{< icon name="dash-square" >}}</span>
        </button>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="check-tree-2-2">
          <label class="form-check-label" for="check-tree-2-2">Item 2</label>
          <span class="badge bg-secondary">18</span>
        </div>

        <ul id="check-tree-2-sub-2" role="group">
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-2-2-1">
              <label class="form-check-label" for="check-tree-2-2-1">Item 2.1</label>
              <span class="badge bg-secondary">2</span>
            </div>
          </li>
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-2-2-2">
              <label class="form-check-label" for="check-tree-2-2-2">Item 2.2</label>
              <span class="badge bg-secondary">7</span>
            </div>
          </li>
          <li role="treeitem" aria-expanded="false">
            <button class="btn btn-icon" type="button" aria-expanded="false" aria-controls="check-tree-2-sub-2-3">
              <span class="form-check-tree-icon-expand">{{< icon name="plus-square" >}}</span>
              <span class="form-check-tree-icon-collapse">{{< icon name="dash-square" >}}</span>
            </button>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="check-tree-2-2-3">
              <label class="form-check-label" for="check-tree-2-2-3">Item 2.3</label>
              <span class="badge bg-secondary">9</span>
            </div>

            <ul id="check-tree-2-sub-2-3" role="group">
              <li role="treeitem">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="check-tree-2-2-3-1">
                  <label class="form-check-label" for="check-tree-2-2-3-1">Item 2.3.1</label>
                  <span class="badge bg-secondary">2</span>
                </div>
              </li>
              <li role="treeitem">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="check-tree-2-2-3-2">
                  <label class="form-check-label" for="check-tree-2-2-3-2">Item 2.3.2</label>
                  <span class="badge bg-secondary">7</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="check-tree-2-3">
          <label class="form-check-label" for="check-tree-2-3">Item 3</label>
          <span class="badge bg-secondary">9</span>
        </div>
      </li>
    </ul>
  </div>
  <div class="col-md-4">
    <h5>Example 3</h5>
    <ul role="tree" class="form-check-tree" data-of-check-tree>
      <li role="treeitem" aria-expanded="false">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="check-tree-3-1">
          <label class="form-check-label" for="check-tree-3-1">Item 1</label>
        </div>

        <button class="btn btn-icon" type="button" aria-expanded="false" aria-controls="check-tree-3-sub-1">
          <span class="form-check-tree-icon-expand">{{< icon name="plus-square" >}}</span>
          <span class="form-check-tree-icon-collapse">{{< icon name="dash-square" >}}</span>
        </button>

        <ul id="check-tree-3-sub-1" role="group">
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-3-1-1">
              <label class="form-check-label" for="check-tree-3-1-1">Item 1.1</label>
              <span class="badge bg-secondary">53</span>
            </div>
          </li>
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-3-1-2">
              <label class="form-check-label" for="check-tree-3-1-2">Item 1.2</label>
              <span class="badge bg-secondary">20</span>
            </div>
          </li>
        </ul>
      </li>

      <li role="treeitem" aria-expanded="false">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="check-tree-3-2">
          <label class="form-check-label" for="check-tree-3-2">Item 2</label>
          <span class="badge bg-secondary">33</span>
        </div>

        <button class="btn btn-icon" type="button" aria-expanded="false" aria-controls="check-tree-3-sub-2">
          <span class="form-check-tree-icon-expand">{{< icon name="plus-square" >}}</span>
          <span class="form-check-tree-icon-collapse">{{< icon name="dash-square" >}}</span>
        </button>

        <ul id="check-tree-3-sub-2" role="group">
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-3-2-1">
              <label class="form-check-label" for="check-tree-3-2-1">Item 2.1</label>
              <span class="badge bg-secondary">2</span>
            </div>
          </li>
          <li role="treeitem">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="check-tree-3-2-2">
              <label class="form-check-label" for="check-tree-3-2-2">Item 2.2</label>
              <span class="badge bg-secondary">7</span>
            </div>
          </li>
          <li role="treeitem" aria-expanded="false">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="check-tree-3-2-3">
              <label class="form-check-label" for="check-tree-3-2-3">Item 2.3</label>
              <span class="badge bg-secondary">9</span>
            </div>

            <button class="btn btn-icon" type="button" aria-expanded="false" aria-controls="check-tree-3-sub-2-3">
              <span class="form-check-tree-icon-expand">{{< icon name="plus-square" >}}</span>
              <span class="form-check-tree-icon-collapse">{{< icon name="dash-square" >}}</span>
            </button>

            <ul id="check-tree-3-sub-2-3" role="group">
              <li role="treeitem">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="check-tree-3-2-3-1">
                  <label class="form-check-label" for="check-tree-3-2-3-1">Item 2.3.1</label>
                  <span class="badge bg-secondary">2</span>
                </div>
              </li>
              <li role="treeitem">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="check-tree-3-2-3-2">
                  <label class="form-check-label" for="check-tree-3-2-3-2">Item 2.3.2</label>
                  <span class="badge bg-secondary">7</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="check-tree-3-3">
          <label class="form-check-label" for="check-tree-3-3">Item 3</label>
          <span class="badge bg-secondary">9</span>
        </div>
      </li>
    </ul>
  </div>
</div>
{{< /example >}}
## Radios

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
{{< /example >}}

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
  <label class="form-check-label" for="flexRadioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexRadioCheckedDisabled">
    Disabled checked radio
  </label>
</div>
{{< /example >}}

## Switches

A switch has the markup of a custom checkbox but uses the `.form-switch` class to render a toggle switch. Consider using `role="switch"` to more accurately convey the nature of the control to assistive technologies that support this role. In older assistive technologies, it will simply be announced as a regular checkbox as a fallback. Switches also support the `disabled` attribute.

{{< example >}}
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
  <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
{{< /example >}}

## Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
{{< /example >}}

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>
{{< /example >}}

## Inline

Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
{{< /example >}}

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
{{< /example >}}

## Reverse

Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.

{{< example >}}
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
  <label class="form-check-label" for="reverseCheck1">
    Reverse checkbox
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled>
  <label class="form-check-label" for="reverseCheck2">
    Disabled reverse checkbox
  </label>
</div>

<div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse">
  <label class="form-check-label" for="flexSwitchCheckReverse">Reverse switch checkbox input</label>
</div>
{{< /example >}}

## Without labels

Omit the wrapping `.form-check` for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`). See the [forms overview accessibility]({{< docsref "/forms/overview#accessibility" >}}) section for details.

{{< example >}}
<div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>

<div>
  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div>
{{< /example >}}

## Toggle buttons

Create button-like checkboxes and radio buttons by using `.btn` styles rather than `.form-check-label` on the `<label>` elements. These toggle buttons can further be grouped in a [button group]({{< docsref "/components/button-group" >}}) if needed.

### Checkbox toggle buttons

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-primary" for="btn-check">Single toggle</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
<label class="btn btn-primary" for="btn-check-2">Checked</label>
{{< /example >}}

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled>
<label class="btn btn-primary" for="btn-check-3">Disabled</label>
{{< /example >}}

{{< callout info >}}
Visually, these checkbox toggle buttons are identical to the [button plugin toggle buttons]({{< docsref "/components/buttons#button-plugin" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}}

### Radio toggle buttons

{{< example >}}
<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
<label class="btn btn-secondary" for="option1">Checked</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
<label class="btn btn-secondary" for="option2">Radio</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
<label class="btn btn-secondary" for="option3">Disabled</label>

<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
<label class="btn btn-secondary" for="option4">Radio</label>
{{< /example >}}

### Outlined styles

Different variants of `.btn`, such at the various outlined styles, are supported.

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label><br>

<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off">
<label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label><br>

<input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
<label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
<label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
{{< /example >}}

## CSS

CSS for check tree:

{{< scss-docs name="form-check-tree-css-vars" file="src/scss/form/_check-tree.scss" >}}

### Sass variables

Variables for checks:

{{< scss-docs name="form-check-variables" file="node_modules/bootstrap/scss/_variables.scss" >}}

Variables for switches:

{{< scss-docs name="form-switch-variables" file="node_modules/bootstrap/scss/_variables.scss" >}}

Variables for check tree:

{{< scss-docs name="form-check-tree" file="src/scss/_variables.scss" >}}
