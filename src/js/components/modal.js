import {Modal} from 'bootstrap' // eslint-disable-line no-unused-vars

export function initMultiple(els) {
  for (const el of els) {
    Modal.getOrCreateInstance(el)
  }
}

export default Modal
