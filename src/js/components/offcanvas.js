import { Offcanvas } from 'bootstrap'

export function initMultiple(els) {
  for (const el of els) {
    Offcanvas.getOrCreateInstance(el)
  }
}

export { Offcanvas as default } from 'bootstrap'
