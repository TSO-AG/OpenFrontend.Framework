import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'page-navigation'

const CLASS_NAME_SUBMENU_ACTIVE = 'active-level'
const CLASS_NAME_PANEL_ACTIVE = 'active-panel'
const CLASS_NAME_PANEL_PARENT = 'active-panel-parent'
const PANEL_HEIGHT_PROPERTY_NAME = '--page-nav-panel-height'

const DefaultType = {
  back: 'string',
  submenuSelector: 'string',
}

const Default = {
  back: 'Back',
  submenuSelector: 'li.page-nav-submenu',
}

class PageNavigation extends BaseComponent {
  constructor(element, config) {
    super(element, config)
    this._submenuLinks = element.querySelectorAll(this._config.submenuSelector)
    this._panels = element.querySelectorAll('ul')
    this._initTogglers()
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

  // Public

  // Private
  _initTogglers() {
    // Open panel on click
    for (const submenu of this._submenuLinks) {
      submenu.addEventListener('click', e => {
        if (e.target === submenu) {
          e.preventDefault()
          this._openPanel(submenu)
          this._closeSiblings(submenu)
          this._setHighestPanelHeight()
        }
      })
    }

    // Close panel when 'Back' is clicked
    for (const panel of this._panels) {
      panel.addEventListener('click', e => {
        if (e.target === panel && panel.classList.contains(CLASS_NAME_PANEL_ACTIVE)) {
          this._closePanel(panel)
          this._setHighestPanelHeight()
        }
      })
    }
  }

  _openPanel(submenu) {
    const panel = submenu.querySelector('ul')
    const parent = submenu.parentElement.closest('ul')

    submenu.classList.add(CLASS_NAME_SUBMENU_ACTIVE)

    if (submenu) {
      panel.classList.add(CLASS_NAME_PANEL_ACTIVE)
    }

    if (parent) {
      parent.classList.add(CLASS_NAME_PANEL_PARENT)
    }
  }

  _closePanel(panel) {
    if (!panel) {
      return
    }

    panel.classList.remove(CLASS_NAME_PANEL_ACTIVE)

    const parentPanel = panel.parentElement.closest('ul')
    const parenSubmenu = panel.parentElement.closest('li')

    if (parentPanel) {
      parentPanel.classList.remove(CLASS_NAME_PANEL_PARENT)
    }

    if (parenSubmenu) {
      parenSubmenu.classList.remove(CLASS_NAME_SUBMENU_ACTIVE)
    }
  }

  _closeSiblings(submenu) {
    const siblings = [...submenu.parentNode.children].filter(node => node !== submenu && node.classList.contains(CLASS_NAME_SUBMENU_ACTIVE))

    for (const el of siblings) {
      this._closeAllPanelChild(el)
    }
  }

  _closeAllPanelChild(submenu) {
    for (const panel of submenu.querySelectorAll(`.${CLASS_NAME_PANEL_ACTIVE}`)) {
      this._closePanel(panel)
    }
  }

  _setHighestPanelHeight() {
    const panels = this._element.querySelectorAll('.active-panel')
    let maxHeight = 0
    this._element.style.removeProperty(PANEL_HEIGHT_PROPERTY_NAME)

    for (const panel of panels) {
      const panelHeight = panel.scrollHeight // @TODO - do not include hidden children for height calculation
      if (panelHeight > maxHeight) {
        maxHeight = panelHeight
      }
    }

    this._element.style.setProperty(PANEL_HEIGHT_PROPERTY_NAME, `${maxHeight}px`)
  }
}

export function initMultiple(els) {
  for (const el of els) {
    PageNavigation.getOrCreateInstance(el, el.dataset.ofPageRating ? JSON.parse(el.dataset.ofRating) : {})
  }
}

export default PageNavigation
