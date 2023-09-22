import {Offcanvas} from 'bootstrap' // eslint-disable-line no-unused-vars

export function initMultiple(els) {
  for (const el of els) {
    Offcanvas.getOrCreateInstance(el)
  }
}

export default Offcanvas;
