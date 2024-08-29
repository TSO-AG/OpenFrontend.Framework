import Lightbox from './lightbox-base'
import LightboxWithTabs from './lightbox-with-tabs'

class LightboxRegistry {
  constructor() {
    this.configs = new Map()
    this.instances = new Map()
  }

  initializeLightboxes() {
    for (const [identifier, config] of this.configs.entries()) {
      const items = []

      // Get the HTML elements and add them to items
      if (Object.prototype.hasOwnProperty.call(config, 'elements')) {
        for (const [index, { element, options }] of config.elements.entries()) {
          const item = { ...options }

          if (element.hasAttribute('href')) {
            item.href = element.href
          }

          // If the element is inline, convert it to the "content" property with actual node,
          // so the element is moved to the lightbox and not just copied over
          if (item.type === 'inline' && item.href) {
            const inlineElement = document.querySelector(item.href);

            if (inlineElement) {
              item.content = inlineElement;
              delete item.href;
            }
          }

          items.push(item)

          // Open the lightbox on click
          element.addEventListener('click', e => {
            e.preventDefault()
            this.instances.get(identifier).open(index)
          })
        }
      }

      config.items = config.items ? [...items, ...config.items] : items

      if (Object.prototype.hasOwnProperty.call(config, 'tabs') && config.tabs.length > 0) {
        this.instances.set(identifier, new LightboxWithTabs(identifier, config))
      } else {
        this.instances.set(identifier, new Lightbox(identifier, config))
      }
    }
  }

  registerFromConfigElement(element) {
    const identifier = element.dataset.ofLightboxConfig

    if (this.configs.has(identifier)) {
      throw new Error(`You cannot have more than one lightbox config with the same identifier: ${identifier}`)
    }

    const config = JSON.parse(element.textContent.trim())
    config.elements = config.elements || []

    this.configs.set(identifier, config)
  }

  registerFromRegularElement(element) {
    const options = (element.dataset.ofLightbox === '') ? {} : JSON.parse(element.dataset.ofLightbox)
    const identifier = Object.prototype.hasOwnProperty.call(options, 'group') ? options.group : null

    // Group the lightboxes by identifier, and initialize them later on
    if (identifier) {
      if (!this.configs.has(identifier)) {
        this.configs.set(identifier, { elements: [] })
      }

      this.configs.get(identifier).elements.push({ element, options })
      return;
    }

    const ungroupedIdentifier = `ungrouped-${this.instances.size}`

    // If the item has no identifier, create the instance right away
    this.instances.set(ungroupedIdentifier, new Lightbox(ungroupedIdentifier, {
      items: [{...options, href: element.href}],
    }))

    // Open the lightbox on click
    element.addEventListener('click', e => {
      e.preventDefault()
      this.instances.get(ungroupedIdentifier).open()
    })
  }

  registerTriggerElement(element) {
    element.addEventListener('click', e => {
      e.preventDefault()

      const [identifier, item] = element.dataset.ofLightboxOpen.split(':')

      if (!this.instances.has(identifier)) {
        throw new Error(`The lightbox with identifier "${identifier}" does not exist`)
      }

      this.instances.get(identifier).open(item)
    })
  }
}

const registry = new LightboxRegistry()

export function initMultiple(els) {
  // First, register the configs
  for (const el of [...els].filter(el => el.hasAttribute('data-of-lightbox-config'))) {
    registry.registerFromConfigElement(el)
  }

  // Then, register the HTML elements
  for (const el of [...els].filter(el => el.hasAttribute('data-of-lightbox'))) {
    registry.registerFromRegularElement(el)
  }

  // Then, register the trigger elements
  for (const el of [...els].filter(el => el.hasAttribute('data-of-lightbox-open'))) {
    registry.registerTriggerElement(el)
  }

  // Finally initialize the lightboxes
  registry.initializeLightboxes()
}

export default LightboxRegistry
