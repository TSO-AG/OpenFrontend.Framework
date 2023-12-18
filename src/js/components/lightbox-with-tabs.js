import Lightbox from './lightbox-base'

const LIGHTBOX_TABS_ACTIVE_CLASS = 'active'
const LIGHTBOX_TABS_CLASS = 'lightbox-tabs'

class LightboxWithTabs extends Lightbox {
  // Public
  open(identifierOrIndex) {
    if (identifierOrIndex === null) {
      return
    }

    const { tabIndex, itemIndex } = this._getTabAndItemIndexes(identifierOrIndex)

    this._setActiveTab(tabIndex, itemIndex)
    this._lightbox.openAt(itemIndex)

    if (this._config.thumbnails) {
      this._setThumbnailsActiveSlide(itemIndex, 0)
    }
  }

  // Overrides
  _getBeforeContentHtml() {
    return `<div class="${LIGHTBOX_TABS_CLASS}"></div>`
  }

  _init() {
    if (this._config.tabs.length === 0) {
      throw new Error('There are no tabs defined')
    }

    this._tabsActiveTabIndex = 0
    this._tabsLinks = []

    // Create a mapper for easier usage later on
    this._tabsItemsMapper = this._config.tabs.flatMap((tab, tabIndex) => tab.items.map((item, itemIndex) => ({ ...item, tabIndex, itemIndex })))

    super._init()
  }

  _onOpen() {
    super._onOpen()

    this._tabsElement = this._getLightboxElement(`.${LIGHTBOX_TABS_CLASS}`)
    this._createResizeObserver(this._tabsElement, 'tabs-wrapper-height')

    this._generateTabs()
    this._bindTabEvents()
  }

  _onClose() {
    super._onClose()

    this._tabsElement.remove()
    this._tabsElement = null

    this._tabsLinks = []
  }

  _generateThumbnailsCarouselSlides(generator) {
    return this._config.tabs[this._tabsActiveTabIndex].items.map(generator)
  }

  _updateUrlHashOnOpen() {
    window.history.pushState({}, null, this._generateUrlForItem(this._getTabItemIndex(this._lightbox.index)))
  }

  _updateUrlHashOnSlideChange(index) {
    window.history.replaceState({}, null, this._generateUrlForItem(this._getTabItemIndex(index)))
  }

  _generateUrlHash(identifierOrIndex = 0) {
    if (typeof identifierOrIndex === 'number') {
      identifierOrIndex = this._tabsItemsMapper[identifierOrIndex].identifier || identifierOrIndex
    }

    return `${this.getUrlHashPrefix()}${this._identifier}:${identifierOrIndex}`
  }

  // Private
  _getTabItemIndex(index) {
    const  itemIndex = this._tabsItemsMapper.findIndex(item => item.itemIndex === index && item.tabIndex === this._tabsActiveTabIndex)

    return (itemIndex !== -1) ? itemIndex : 0
  }

  _generateTabs() {
    const tabs = document.createElement('ul')
    tabs.className = 'nav nav-underline'

    for (const [index, tab] of this._config.tabs.entries()) {
      const item = document.createElement('li')
      item.className = 'nav-item'

      const link = document.createElement('a')
      link.className = 'nav-link'
      link.textContent = tab.name || index
      link.href = this._config.urlHashTracking ? `#${this._generateUrlHash(this._tabsItemsMapper.findIndex(item => item.tabIndex === index))}` : '#'
      link.dataset.tab = index

      this._tabsLinks.push(link)

      if (index === this._tabsActiveTabIndex) {
        link.classList.add(LIGHTBOX_TABS_ACTIVE_CLASS)
      }

      item.append(link)
      tabs.append(item)
    }

    this._tabsElement.append(tabs)
  }

  _setActiveTab(activeTabIndex) {
    this._tabsActiveTabIndex = Number.parseInt(activeTabIndex, 10)

    // Set active tab class
    for (const [index, element] of this._tabsLinks.entries()) {
      if (index === this._tabsActiveTabIndex) {
        element.classList.add(LIGHTBOX_TABS_ACTIVE_CLASS)
      } else if (element.classList.contains(LIGHTBOX_TABS_ACTIVE_CLASS)) {
        element.classList.remove(LIGHTBOX_TABS_ACTIVE_CLASS)
      }
    }

    // Avoid the error of getting the previous slide configuration, when new lightbox slides are set up
    this._lightbox.prevActiveSlideIndex = null
    this._lightbox.prevActiveSlide = null
    this._lightbox.setElements(this._config.tabs[this._tabsActiveTabIndex].items)
  }

  _bindTabEvents() {
    // Change tab content on tab click
    for (const link of this._tabsLinks) {
      link.addEventListener('click', event => {
        event.preventDefault()

        // Do nothing if the tab is already active
        if (link.classList.contains(LIGHTBOX_TABS_ACTIVE_CLASS)) {
          return
        }

        this._setActiveTab(link.dataset.tab)

        // Update the thumbnails, if any
        if (this._config.thumbnails) {
          this._updateThumbnails()
          this._setThumbnailsActiveSlide(0, 0)
        }

        // Update the URL hash
        if (this._config.urlHashTracking) {
          window.history.replaceState({}, null, this._generateUrlForItem(this._tabsItemsMapper.findIndex(item => item.tabIndex === this._tabsActiveTabIndex)))
        }
      })
    }
  }

  _getTabAndItemIndexes(identifierOrIndex) {
    let index

    // Find the item with given identifier
    if (typeof identifierOrIndex === 'string' && /^\d+$/.exec(identifierOrIndex) === null) {
      index = this._tabsItemsMapper.findIndex(item => item.identifier === identifierOrIndex)
      index = (index === -1) ? 0 : index
    } else {
      index = identifierOrIndex || 0
    }

    if (this._tabsItemsMapper[index]) {
      return {
        tabIndex: this._tabsItemsMapper[index].tabIndex,
        itemIndex: this._tabsItemsMapper[index].itemIndex,
      }
    }

    return { tabIndex: 0, itemIndex: 0 }
  }
}

export default LightboxWithTabs
