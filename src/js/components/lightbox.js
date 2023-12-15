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

  registerFromConfigElement(el) {
    const identifier = el.dataset.ofLightboxConfig

    if (this.configs.has(identifier)) {
      throw new Error(`You cannot have more than one lightbox config with the same identifier: ${identifier}`)
    }

    const config = JSON.parse(el.textContent.trim())
    config.elements = config.elements || []

    this.configs.set(identifier, config)
  }

  registerFromRegularElement(el) {
    // TODO: validate options
    const options = (el.dataset.ofLightbox === '') ? {} : JSON.parse(el.dataset.ofLightbox)
    const identifier = Object.prototype.hasOwnProperty.call(options, 'group') ? options.group : 'ungroupped'

    // Create a config if it does not exist yet
    if (!this.configs.has(identifier)) {
      this.configs.set(identifier, { elements: [] })
    }

    this.configs.get(identifier).elements.push({
      element: el,
      options,
    })
  }

  registerTriggerElement(el) {
    el.addEventListener('click', e => {
      e.preventDefault()

      const [identifier, item] = el.dataset.ofLightboxOpen.split(':')

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
