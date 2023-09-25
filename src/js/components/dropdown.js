import { Dropdown } from 'bootstrap'

export function initMultiple(els) {
  for (const el of els) {
    Dropdown.getOrCreateInstance(el)
  }
}

export { Dropdown as default } from 'bootstrap'
