import { loadForElements } from './helpers/module-loader'

document.addEventListener('DOMContentLoaded', () => {
  loadForElements(document.querySelectorAll('[data-bs-toggle="tab"]'), () => import(/* webpackChunkName: "open-frontend-tabs" */ './components/tabs'))
  loadForElements(document.querySelectorAll('[data-bs-toggle="tooltip"]'), () => import(/* webpackChunkName: "open-frontend-tooltip" */ './components/tooltip'))
  loadForElements(document.querySelectorAll('[data-bs-toggle="dropdown"]'), () => import(/* webpackChunkName: "open-frontend-dropdown" */ './components/dropdown'))
  loadForElements(document.querySelectorAll('[data-bs-toggle="modal"]'), () => import(/* webpackChunkName: "open-frontend-modal" */ './components/modal'))
  loadForElements(document.querySelectorAll('[data-bs-toggle="offcanvas"]'), () => import(/* webpackChunkName: "open-frontend-offcanvas" */ './components/offcanvas'))
  loadForElements(document.querySelectorAll('[data-of-highlight]'), () => import(/* webpackChunkName: "open-frontend-highlight" */ './components/highlight'))
  loadForElements(document.querySelectorAll('[data-of-rating]'), () => import(/* webpackChunkName: "open-frontend-rating" */ './components/rating'))
})

window.bootstrap = {
  OffCanvas(...args) {
    import('bootstrap/js/dist/offcanvas').then(v => new v.default(...args))
  },
  get Toast() {
    return import('bootstrap/js/dist/toast').then(v => v.default)
  },
  get Tooltip() {
    return import('bootstrap/js/dist/tooltip').then(v => v.default)
  },
}
