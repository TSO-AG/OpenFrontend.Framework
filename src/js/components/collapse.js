import { Collapse } from 'bootstrap'

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

export { Collapse as default } from 'bootstrap'
