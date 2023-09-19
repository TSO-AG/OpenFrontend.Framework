import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'ticker'
const EVENT_TICKER_INITIALIZED = 'initialized.of.ticker'

const CLASS_NAME_ICON = 'ticker-icon'
const CLASS_NAME_ITEM = 'ticker-item'
const CLASS_NAME_ITEMS = 'ticker-items'
const CLASS_NAME_LINK = 'ticker-link'
const CLASS_NAME_SHOW = 'ticker-show'
const CLASS_NAME_TEXT = 'ticker-text'

const DefaultType = {
  appendToBody: 'boolean',
  items: 'array',
  pauseOnHover: 'boolean',
  prependToBody: 'boolean',
  speedMobileQuery: 'string',
  speedDesktop: 'number',
  speedMobile: 'number',
}

const Default = {
  appendToBody: false,
  items: [],
  pauseOnHover: true,
  prependToBody: false,
  speedDesktop: 2,
  speedMobile: 1,
  speedMobileQuery: '(max-width: 767px)',
}

class Ticker extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    if (!this._element) {
      return
    }

    this._items = this._config.items
    this._paused = false

    this._itemsElement = document.createElement('div')
    this._itemsElement.className = CLASS_NAME_ITEMS
    this._element.append(this._itemsElement)

    this._initTicker()
    window.addEventListener('resize', () => this._resizeTicker())
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
  setItems(items) {
    this._items = items

    if (this._items.length === 0) {
      this._hideTicker()
    } else {
      this._showTicker()
    }
  }

  // Private
  _resizeTicker(updatePosition = true) {
    const { width } = this._element.getBoundingClientRect()

    for (const el of this._itemsElement.children) {
      el.style.minWidth = `${width}px`

      if (updatePosition) {
        el.style.left = `${width}px`
      }
    }
  }

  _appendItems() {
    if (this._items.length === 0) {
      return
    }

    const elementWidth = this._element.getBoundingClientRect().width

    for (const item of this._items) {
      const div = document.createElement('div')
      div.className = `${CLASS_NAME_ITEM}${item.cssClass ? ` ${item.cssClass}` : ''}`
      div.style.left = `${elementWidth}px`

      // Add the custom CSS class to the data attribute, which will be added to the main element
      // when this item becomes the active/current one.
      if (item.cssClass) {
        div.dataset.cssClass = item.cssClass
      }

      if (item.icon) {
        const i = document.createElement('i')
        i.className = `${CLASS_NAME_ICON} ${item.icon}`

        div.append(i)
      }

      if (item.url) {
        const a = document.createElement('a')
        a.className = CLASS_NAME_LINK
        a.href = item.url
        a.textContent = item.content

        if (item.newWindow) {
          a.target = '_blank'
        }

        div.append(a)
      } else {
        const span = document.createElement('span')
        span.className = CLASS_NAME_TEXT
        span.textContent = item.content

        div.append(span)
      }

      this._itemsElement.append(div)
    }

    this._resizeTicker(false)
    this._showTicker()
  }

  _scrollTicker() {
    if (this._itemsElement.children.length === 0) {
      this._appendItems()
    }

    if (this._paused) {
      this._animationFrameId = requestAnimationFrame(this._scrollTicker.bind(this))
      return
    }

    const item = this._itemsElement.children[0]

    if (!item) {
      this._animationFrameId = requestAnimationFrame(this._scrollTicker.bind(this))
      return
    }

    // const itemOffset = itemBounds.right;
    const itemOffset = item.offsetWidth + item.offsetLeft

    // Stop the animation if th element is out of the view already
    if (itemOffset < 0) {
      this._element.classList.remove(item.dataset.cssClass)

      // Hide ticker if there are ticker
      if (this._itemsElement.children.length === 1 && this._items.length === 0) {
        this._hideTicker()
      }

      item.remove()
    } else {
      item.style.left = `${Number.parseFloat(item.style.left) - this._getTickerSpeed()}px`

      // Add the CSS class to the main element if it's not there yet
      if (item.dataset.cssClass && !this._element.classList.contains(item.dataset.cssClass)) {
        this._element.classList.add(item.dataset.cssClass)
      }

      // Start scrolling the next element if the current one crosses the right border of the window
      if (itemOffset <= this._element.offsetWidth) {
        if (this._itemsElement.children.length === 1) {
          this._appendItems()
        }

        const nextItem = this._itemsElement.children[1]

        if (nextItem) {
          nextItem.style.left = `${Number.parseFloat(item.style.left) + item.offsetWidth}px`
        }
      }
    }

    this._animationFrameId = requestAnimationFrame(this._scrollTicker.bind(this))
  }

  _initTicker() {
    if (this._config.appendToBody) {
      document.body.append(this._element)
    } else if (this._config.prependToBody) {
      document.body.prepend(this._element)
    }

    this._appendItems()

    if (this._config.pauseOnHover) {
      this._element.addEventListener('mouseenter', () => {
        this._paused = true
      })
      this._element.addEventListener('mouseleave', () => {
        this._paused = false
      })
    }

    this._scrollTicker()
    this._element.dispatchEvent(new CustomEvent(EVENT_TICKER_INITIALIZED))
  }

  _getTickerSpeed() {
    if (window.matchMedia(this._config.speedMobileQuery).matches) {
      return this._config.speedMobile
    }

    return this._config.speedDesktop
  }

  _showTicker() {
    if (this._items.length > 0) {
      this._element.classList.add(CLASS_NAME_SHOW)
      this._paused = false
    }
  }

  _hideTicker() {
    this._element.classList.remove(CLASS_NAME_SHOW)
    this._paused = true
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Ticker.getOrCreateInstance(el, el.dataset.ofTicker ? JSON.parse(el.dataset.ofTicker) : {})
  }
}

export default Ticker
