import { Collapse } from 'bootstrap'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'
import EventHandler from 'bootstrap/js/src/dom/event-handler'

function toggleClassOnEvent(event, targetEl, className) {
  if (event.target === event.currentTarget) {
    event.type === 'show.bs.collapse' ?
      targetEl.classList.add(className) :
      targetEl.classList.remove(className)
  }
}

export function initMultiple(els) {
  for (const el of els) {
    const collapseInstance = Collapse.getOrCreateInstance(el, { toggle: false })

    // Add dynamic class toggling to collapse component
    let collapseToggleClassOptions

    try {
      collapseToggleClassOptions = JSON.parse(el.dataset.ofCollapseToggleClass || '{}')
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

// Links with the attribute [data-of-collapse-link] should only expand the collapse
EventHandler.on(document, 'click.bs.collapse.data-api', '[data-of-collapse-link]', function (event) {
  const collapseElement = SelectorEngine.getElementFromSelector(this)
  const collapseInstance = Collapse.getOrCreateInstance(collapseElement, { toggle: false })

  if (!collapseInstance._isShown() && (event.target.tagName === 'A' || (event.delegateTarget && event.delegateTarget.tagName === 'A'))) {
    event.preventDefault()
    collapseInstance.toggle()
  }
})

export { Collapse as default } from 'bootstrap'
