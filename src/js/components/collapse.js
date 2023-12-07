import { Collapse } from 'bootstrap'

export function initMultiple(els) {
  for (const el of els) {
    Collapse.getOrCreateInstance(el, { toggle: false })
  }
}

export { Collapse as default } from 'bootstrap'
