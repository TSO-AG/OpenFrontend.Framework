import BaseComponent from 'bootstrap/js/src/base-component'
import {isElement} from 'bootstrap/js/src/util';

/**
 * Constants
 */
const NAME = 'page-navigation'

const CLASS_NAME_SUBMENU_ACTIVE = 'active-level'
const CLASS_NAME_PANEL_ACTIVE = 'active-panel'
const CLASS_NAME_PANEL_ACTIVE_CALCULATING = 'active-panel-calculating'
const CLASS_NAME_PANEL_PARENT = 'active-panel-parent'
const PANEL_HEIGHT_PROPERTY_NAME = '--page-nav-panel-height'
const PANEL_LAST_HEIGHT_PROPERTY_NAME = '--page-nav-panel-last-height'
const ACTIVE_ITEM_SELECTOR = 'span.active'
const CSS_MENU_COLUMN_PROPERTY_NAME = '--columns'

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
    this._menuContentWrappers = new Map([...element.parentElement.querySelectorAll('[data-of-page-menu-content]')].map(el => [el.dataset.ofPageMenuContent, el]));

    this._initTriggers()

    // Display active level after navigation initialization
    this._openActivePanelsOnVisible()

    // Set the panel-height property when the navigation size changes due to resolution change or collapse component action
    new ResizeObserver(() => {
      this._setHighestPanelHeight()
    }).observe(this._element)
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
          this._closeSiblings(submenu)
          this._openPanel(panel)
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

  _openActivePanelsOnVisible() {
    // Wait for element to be visible before reading CSS column properties in _openActivePagePanels
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this._openActivePagePanels()
        this._setHighestPanelHeight()
        observer.disconnect()
      }
    })

    observer.observe(this._element)
  }

  _openActivePagePanels() {
    // Find first active item
    const activeItem = this._element.querySelector(ACTIVE_ITEM_SELECTOR)

    if (activeItem) {
      let currentElement

      // In single-column layout: make the entire column (ul) visible to show the active page
      // In multi-column layout: start from the active item to show both parent and children columns
      const cssColumnsValue = getComputedStyle(activeItem).getPropertyValue(CSS_MENU_COLUMN_PROPERTY_NAME).trim()
      const cssColumns = Math.min(...(cssColumnsValue.match(/\d+/g) || ['1']).map(Number))

      currentElement = cssColumns === 1 ? activeItem.closest('ul') : activeItem

      // Open all panels that are parents of activeItem
      while (currentElement && currentElement !== this._element) {
        if (currentElement.tagName === 'LI') {
          const submenu = currentElement
          const panel = submenu.querySelector('ul')
          submenu.classList.add(CLASS_NAME_SUBMENU_ACTIVE)

          if (panel) {
            this._openPanel(panel)
          }
        }

        currentElement = currentElement.parentNode
      }
    }
  }

  _openPanel(panel) {
    this._activateMenuPanel(panel)
    this._activateMenuPanelParent(panel)
    this._toggleMenuContentWrappers();
  }

  _closePanel(panel) {
    this._deactivateMenuPanel(panel)
    this._deactivateMenuPanelParent(panel)
    this._closeAllPanelChild(panel)
    this._toggleMenuContentWrappers();
  }

  _activateMenuPanel(panel) {
    panel.classList.add(CLASS_NAME_PANEL_ACTIVE)
    panel.parentElement.querySelector(this._config.togglePanelButtonsSelector)?.setAttribute('aria-expanded', 'true')
  }

  _deactivateMenuPanel(panel) {
    panel.classList.remove(CLASS_NAME_PANEL_ACTIVE)
    panel.parentElement.querySelector(this._config.togglePanelButtonsSelector)?.setAttribute('aria-expanded', 'false')
  }

  _activateMenuPanelParent(panel) {
    const parentPanel = panel.parentElement.closest('ul')

    if (parentPanel) {
      parentPanel.classList.add(CLASS_NAME_PANEL_PARENT)
    }
  }

  _toggleMenuContentWrappers() {
    const activePanel = this._element.querySelector(`ul.${CLASS_NAME_PANEL_ACTIVE}:not(.${CLASS_NAME_PANEL_PARENT})`);

    // Show the default content wrapper if there is no active panel
    if (!activePanel) {
      this._toggleMenuContentWrapper('default', true);
      return;
    }

    let nextPanel = activePanel;
    let toggleButton;

    do {
      const parentLi = nextPanel.parentElement;

      // Break if we are out of the menu
      if (parentLi?.tagName !== 'LI') {
        toggleButton = null;
        break;
      }

      toggleButton = [...parentLi.children].find(sibling => sibling.matches(this._config.togglePanelButtonsSelector));

      // Break if there is no toggle button
      if (!toggleButton) {
        break;
      }

      // Break if the next toggle has content wrapper
      if (toggleButton.dataset.ofPageMenuContentToggle) {
        break;
      }

      nextPanel = parentLi.parentElement;
    } while (nextPanel);


    if (!toggleButton) {
      this._toggleMenuContentWrapper('default', true);
      return;
    }

    for (const [key, wrapper] of this._menuContentWrappers) {
      this._toggleMenuContentWrapper(wrapper, key === toggleButton.dataset.ofPageMenuContentToggle);
    }

  }

  _toggleMenuContentWrapper(elementOrIdentifier, show) {
    let element;

    if (isElement(elementOrIdentifier)) {
      element = elementOrIdentifier;
    } else {
      element = this._menuContentWrappers.get(elementOrIdentifier);
    }

    if (!element) {
      return;
    }

    element.classList.toggle('visually-hidden', !show);
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
    const panels = this._element.querySelectorAll(`.${CLASS_NAME_PANEL_ACTIVE}`)
    let maxHeight = 0
    this._element.style.removeProperty(PANEL_HEIGHT_PROPERTY_NAME)

    for (const panel of panels) {
      panel.classList.add(CLASS_NAME_PANEL_ACTIVE_CALCULATING)
      const panelHeight = panel.scrollHeight
      panel.classList.remove(CLASS_NAME_PANEL_ACTIVE_CALCULATING)

      if (panelHeight > maxHeight) {
        maxHeight = panelHeight
      }
    }

    this._element.style.setProperty(PANEL_HEIGHT_PROPERTY_NAME, `${maxHeight}px`)

    // Update the last panel height property for smooth collapse transition
    if (!this._element.checkVisibility()) {
      return
    }

    if (panels.length > 0 && maxHeight > 0) {
      this._element.style.setProperty(PANEL_LAST_HEIGHT_PROPERTY_NAME, `${maxHeight}px`)
    } else {
      this._element.style.removeProperty(PANEL_LAST_HEIGHT_PROPERTY_NAME)
    }
  }
}

export function initMultiple(els) {
  for (const el of els) {
    PageNavigation.getOrCreateInstance(el, el.dataset.ofPageNavigation ? JSON.parse(el.dataset.ofPageNavigation) : {})
  }
}

export default PageNavigation
