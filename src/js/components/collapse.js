import { Collapse as BootstrapCollapse } from 'bootstrap'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'
import EventHandler from 'bootstrap/js/src/dom/event-handler'

class Collapse extends BootstrapCollapse {
  #heightChangingTimeout = null

  constructor(element, config) {
    super(element, config);

    // To prevent side effects (like header stuck), indicate that the <body> may be changing its height
    this._element.addEventListener('show.bs.collapse', () => this.#onHeightChangingStart())
    this._element.addEventListener('shown.bs.collapse', () => this.#onHeightChangingEnd())
    this._element.addEventListener('hide.bs.collapse', () => this.#onHeightChangingStart())
    this._element.addEventListener('hidden.bs.collapse', () => this.#onHeightChangingEnd())
  }

  #onHeightChangingStart() {
    document.body.setAttribute('data-of-height-changing', '')
    clearTimeout(this.#heightChangingTimeout)
  }

  #onHeightChangingEnd() {
    this.#heightChangingTimeout = setTimeout(() => {
      document.body.removeAttribute('data-of-height-changing')
    }, 100)
  }
}

function toggleClassOnEvent(event, targetEl, className) {
  if (event.target === event.currentTarget) {
    event.type === 'show.bs.collapse' ?
      targetEl.classList.add(className) :
      targetEl.classList.remove(className)
  }
}

export function initMultiple(triggers) {
  for (const trigger of triggers) {
    for (const element of SelectorEngine.getMultipleElementsFromSelector(trigger)) {
      const collapseInstance = Collapse.getOrCreateInstance(element, { toggle: false })

      // Add dynamic class toggling to collapse component
      let collapseToggleClassOptions

      try {
        collapseToggleClassOptions = JSON.parse(trigger.dataset.ofCollapseToggleClass || '{}')
      } catch (error) {
        console.error(error) // eslint-disable-line no-console
        collapseToggleClassOptions = {}
      }

      const { className, targetSelector } = collapseToggleClassOptions

      if (className && targetSelector) {
        const targetEl = document.querySelector(targetSelector)
        const controlledEl = document.querySelector(collapseInstance._config.target)

        if (targetEl && controlledEl) {
          controlledEl.addEventListener('show.bs.collapse', event => toggleClassOnEvent(event, targetEl, className))
          controlledEl.addEventListener('hide.bs.collapse', event => toggleClassOnEvent(event, targetEl, className))
        }
      }
    }
  }
}

// Links with the attribute [data-of-collapse-link] should only expand the collapse
EventHandler.on(document, 'click.bs.collapse.data-api', '[data-of-collapse-link]', function (event) {
  const collapseElement = SelectorEngine.getElementFromSelector(this)
  let collapseInstance = Collapse.getInstance(collapseElement)

  if (!collapseInstance) {
    collapseInstance = Collapse.getOrCreateInstance(collapseElement, { toggle: false })

    const targetElement = event.delegateTarget

    if (targetElement) {
      collapseElement.addEventListener('show.bs.collapse', () => targetElement.setAttribute('aria-expanded', 'true'))
      collapseElement.addEventListener('hide.bs.collapse', () => targetElement.setAttribute('aria-expanded', 'false'))
    }
  }

  if (!collapseInstance._isShown() && (event.target.tagName === 'A' || (event.delegateTarget && event.delegateTarget.tagName === 'A'))) {
    event.preventDefault()
    collapseInstance.toggle()
  }
})

export default Collapse;
