import { Dropdown } from 'bootstrap' // eslint-disable-line no-unused-vars

export function initMultiple(els) {
  for (const el of els) {
    Dropdown.getOrCreateInstance(el)
  }
}

export default Dropdown
