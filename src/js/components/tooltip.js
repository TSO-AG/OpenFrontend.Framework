import { Tooltip } from 'bootstrap'

export function initMultiple(els) {
  for (const el of els) {
    Tooltip.getOrCreateInstance(el)
  }
}

export { Tooltip as default } from 'bootstrap'
