import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'check_tree'
const CHECK_TREE_INITIALIZED = 'initialized.of.check_tree'
const CHECK_TREE_CHANGED = 'changed.of.check_tree'
const SELECTOR_CHECK = 'input[type="checkbox"]';

const DefaultType = {
}

const Default = {
}

class CheckTree extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._fields = [...this._element.querySelectorAll(SELECTOR_CHECK)];
    this._togglers = [...this._element.querySelectorAll('button[type="button"]')];

    this._initFields()
    this._initTogglers()

    this._element.dispatchEvent(new CustomEvent(CHECK_TREE_INITIALIZED))
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  /**
   * @return string[]
   */
  getValue() {
    return this._collectValuesFromElement(this._element);
  }

  /**
   * @param values string[]
   * @param events bool
   */
  setValue(values, events = true) {
    // First, clear all the fields
    this._fields.filter(field => {
      field.checked = false
      field.indeterminate = false
    });

    // Then check every field and update it by the way
    this._fields.filter(field => values.includes(field.value)).forEach(field => {
      field.checked = true;
      this._updateField(field);
    });

    if (events) {
      this._element.dispatchEvent(new CustomEvent(CHECK_TREE_CHANGED));
    }
  }

  // Private
  _initFields() {
    this._fields.forEach(field => {
      if (field.checked) {
        this._updateField(field)
      }

      field.addEventListener('change', () => {
        this._updateField(field)
        this._element.dispatchEvent(new CustomEvent(CHECK_TREE_CHANGED))
      })
    });
  }

  _initTogglers() {
    this._togglers.forEach(toggler => toggler.addEventListener('click', () => {
      if (toggler.ariaExpanded === 'true') {
        this._collapseToggler(toggler);
      } else {
        this._expandToggler(toggler);
      }
    }));
  }

  /**
   * Return all selected values. If all children are selected, only the parent value is returned.
   */
  _collectValuesFromElement(el) {
    const values = [];
    const fields = el.querySelectorAll(`:scope > li > * > ${SELECTOR_CHECK}`);

    for (const field of fields) {
      // All children are selected
      if (field.checked) {
        values.push(field.value);

        continue;
      }

      // No children are selected
      if (!field.checked && !field.indeterminate) {
        continue;
      }

      // Some children are selected
      if (!field.checked && field.indeterminate) {
        const subtree = this._getFieldSubtree(field);

        if (!subtree) {
          continue;
        }

        values.push(...this._collectValuesFromElement(subtree));
      }
    }

    return values;
  }

  _updateField(field) {
    const subtree = this._getFieldSubtree(field);

    // Update all fields nested below
    if (subtree) {
      subtree.querySelectorAll(SELECTOR_CHECK).forEach(el => el.checked = field.checked)
    }

    // Update all parent fields
    this._getParentFields(field).forEach(parentField => {
      const allFields = [...this._getFieldSubtree(parentField).querySelectorAll(SELECTOR_CHECK)];
      const checkedFields = allFields.filter(v => v.checked).length;

      switch (true) {
        case checkedFields === allFields.length:
          parentField.checked = true;
          parentField.indeterminate = false;
          break;

        case checkedFields > 0:
          parentField.checked = false;
          parentField.indeterminate = true;
          break;

        case checkedFields === 0:
          parentField.checked = false;
          parentField.indeterminate = false;
          break;
      }
    })
  }

  _getFieldSubtree(field) {
    return field.closest('li').querySelector(':scope > ul');
  }

  _getParentFields(field) {
    const parentFields = [];
    let element = field.closest('li').parentElement;

    while (element && element !== this._element) {
      if (element.tagName === 'LI') {
        parentFields.push(element.querySelector(`:scope > * > ${SELECTOR_CHECK}`));
      }

      element = element.parentElement;
    }

    return parentFields;
  }

  _collapseToggler(toggler) {
    toggler.ariaExpanded = 'false';
    toggler.parentElement.ariaExpanded = 'false';
  }

  _expandToggler(toggler) {
    toggler.ariaExpanded = 'true';
    toggler.parentElement.ariaExpanded = 'true';
  }
}

export function initMultiple(els) {
  for (const el of els) {
    CheckTree.getOrCreateInstance(el, el.dataset.ofCheckTree ? JSON.parse(el.dataset.ofCheckTree) : {})
  }
}

export default CheckTree
