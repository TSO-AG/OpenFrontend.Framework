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
  togglePanelButtonsSelector: 'string',
  closePanelButtonsSelector: 'string',
}

const Default = {
  togglePanelButtonsSelector: '[data-of-page-menu-toggle]',
  closePanelButtonsSelector: '[data-of-page-menu-close]',
}

class PageNavigation extends BaseComponent {
  constructor(element, config) {
    super(element, config)
    this._togglePanelButtons = element.querySelectorAll(this._config.togglePanelButtonsSelector)
    this._closePanelButtons = element.querySelectorAll(this._config.closePanelButtonsSelector)
    this._initTriggers()
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
  _initTriggers() {
    // Open panel on click
    for (const toggleButton of this._togglePanelButtons) {
      const submenu = toggleButton.closest('li')
      const panel = submenu.querySelector('ul')

      toggleButton.addEventListener('click', e => {
        e.preventDefault()
        if (submenu.classList.contains(CLASS_NAME_SUBMENU_ACTIVE)) {
          this._closePanel(panel)
        } else {
          submenu.classList.add(CLASS_NAME_SUBMENU_ACTIVE)
          this._openPanel(panel)
          this._closeSiblings(submenu)
        }

        this._setHighestPanelHeight()
      })
    }

    // Close panel when 'Back' is clicked
    for (const button of this._closePanelButtons) {
      button.addEventListener('click', e => {
        e.preventDefault()
        const panel = button.closest('ul')
        if (panel?.classList.contains(CLASS_NAME_PANEL_ACTIVE)) {
          this._closePanel(panel)
          this._setHighestPanelHeight()
        }
      })
    }
  }

  _openPanel(panel) {
    this._activateMenuPanel(panel)
    this._activateMenuPanelParent(panel)
  }

  _closePanel(panel) {
    this._deactivateMenuPanel(panel)
    this._deactivateMenuPanelParent(panel)
    this._closeAllPanelChild(panel)
  }

  _activateMenuPanel(panel) {
    panel.classList.add(CLASS_NAME_PANEL_ACTIVE)
    panel.parentElement.querySelector(this._config.submenuSelector)?.setAttribute('aria-expanded', 'true')
  }

  _deactivateMenuPanel(panel) {
    panel.classList.remove(CLASS_NAME_PANEL_ACTIVE)
    panel.parentElement.querySelector(this._config.submenuSelector)?.setAttribute('aria-expanded', 'false')
  }

  _activateMenuPanelParent(panel) {
    const parentPanel = panel.parentElement.closest('ul')

    if (parentPanel) {
      parentPanel.classList.add(CLASS_NAME_PANEL_PARENT)
    }
  }

  _deactivateMenuPanelParent(panel) {
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
      const panelHeight = panel.scrollHeight
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
