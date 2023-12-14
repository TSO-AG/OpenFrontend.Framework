import Lightbox from './lightbox-base';

const LIGHTBOX_TABS_ACTIVE_CLASS = 'active'
const LIGHTBOX_TABS_CLASS = 'lightbox-tabs'

class LightboxWithTabs extends Lightbox {
    constructor(identifier, config) {
        super(identifier, config)

        if (this._config.tabs.length === 0) {
            throw new Error('There are no tabs defined')
        }

        this._tabsActiveTabIndex = 0
        this._tabsLinks = []
    }

    // Public
    open(identifierOrIndex) {
        let callback

        // Find the tab and item indexes with given identifier
        if (typeof identifierOrIndex === 'string' && /^\d+$/.exec(identifierOrIndex) === null) {
            callback = (identifier) => identifier === identifierOrIndex
        } else if (identifierOrIndex > 0) {
            // Find the tab and item indexes by numeric index
            callback = (identifier, itemsCount) => itemsCount === parseInt(identifierOrIndex)
        }

        const {tabIndex, itemIndex} = this._getTabAndItemIndexes(callback)

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

    _onOpen() {
        super._onOpen()

        this._tabsElement = this._getLightboxElement(`.${LIGHTBOX_TABS_CLASS}`)
        this._createResizeObserver(this._tabsElement, 'tabs-height')

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

    // Private
    _generateTabs() {
        const tabs = document.createElement('ul')
        tabs.className = 'nav nav-underline'

        for (const [index, tab] of this._config.tabs.entries()) {
            const item = document.createElement('li')
            item.className = 'nav-item'

            const link = document.createElement('a')
            link.className = 'nav-link'
            link.textContent = tab.name || index
            link.href = `#${this._identifier}:${index}` // TODO: fix when URL hash support is here
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
        this._tabsActiveTabIndex = activeTabIndex

        // Set active tab class
        for (const [index, el] of this._tabsLinks.entries()) {
            if (index === activeTabIndex) {
                el.classList.add(LIGHTBOX_TABS_ACTIVE_CLASS)
            } else if (el.classList.contains(LIGHTBOX_TABS_ACTIVE_CLASS)) {
                el.classList.remove(LIGHTBOX_TABS_ACTIVE_CLASS)
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
            })
        }
    }

    _getTabAndItemIndexes(callback) {
        if (typeof callback === 'function') {
            let itemsCount = 0;

            for (let i = 0; i < this._config.tabs.length; i++) {
                for (let j = 0; j < this._config.tabs[i].items.length; j++) {
                    if (callback(this._config.tabs[i].items[j].identifier, itemsCount)) {
                        return {tabIndex: i, itemIndex: j}
                    }

                    itemsCount++
                }
            }
        }

        return {tabIndex: 0, itemIndex: 0}
    }
}

export default LightboxWithTabs
