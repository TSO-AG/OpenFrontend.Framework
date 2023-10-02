import { Tab } from 'bootstrap'

export function initMultiple(els) {
  for (const el of els) {
    Tab.getOrCreateInstance(el)
  }
}

export { Tab as default } from 'bootstrap'
