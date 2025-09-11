import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'check_tree'
const CHECK_TREE_INITIALIZED = 'initialized.of.check_tree'
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

  // Private
  _initFields() {
    this._fields.forEach(field => {
      this._updateField(field)
      field.addEventListener('change', () => this._updateField(field))
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
      console.log(parentField)
      console.log(allFields);
      console.log(`checkedFields: ${checkedFields} / ${allFields.length}`);
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
