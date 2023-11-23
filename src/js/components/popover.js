import { Popover } from 'bootstrap'

export function initMultiple(els) {
  for (const el of els) {
    Popover.getOrCreateInstance(el)
  }
}

export { Popover as default } from 'bootstrap'
