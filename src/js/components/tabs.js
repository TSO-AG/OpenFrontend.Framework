import {Tab as BootstrapTab} from 'bootstrap'

class Tab extends BootstrapTab {
  constructor(element, config) {
    super(element, config);

    // Open the element if it's present in the URL hash
    if (window.location.hash === `#${this._element.id}`) {
      this._element.addEventListener('shown.bs.tab', () => this._element.scrollIntoView({ behavior: 'smooth' }), { once: true })
      this.show();
    }
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Tab.getOrCreateInstance(el)
  }
}

export { Tab as default } from 'bootstrap'
