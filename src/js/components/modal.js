import { Modal } from 'bootstrap'

export function initMultiple(els) {
  for (const el of els) {
    Modal.getOrCreateInstance(el)
  }
}

export { Modal as default } from 'bootstrap'
