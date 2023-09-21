import { loadForElements } from './helpers/module-loader'

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

window.openFrontend = {
  get Rating() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-ticker" */ './components/rating').then(v => resolve(v.default)))
  },
  get Ticker() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-ticker" */ './components/ticker').then(v => resolve(v.default)))
  },
}

window.initOpenFrontend = function (element) {
  loadForElements(element.querySelectorAll('[data-bs-toggle="tab"]'), () => import(/* webpackChunkName: "open-frontend-tabs" */ './components/tabs'))
  loadForElements(element.querySelectorAll('[data-bs-toggle="tooltip"]'), () => import(/* webpackChunkName: "open-frontend-tooltip" */ './components/tooltip'))
  loadForElements(element.querySelectorAll('[data-bs-toggle="dropdown"]'), () => import(/* webpackChunkName: "open-frontend-dropdown" */ './components/dropdown'))
  loadForElements(element.querySelectorAll('[data-bs-toggle="modal"]'), () => import(/* webpackChunkName: "open-frontend-modal" */ './components/modal'))
  loadForElements(element.querySelectorAll('[data-bs-toggle="offcanvas"]'), () => import(/* webpackChunkName: "open-frontend-offcanvas" */ './components/offcanvas'))
  loadForElements(element.querySelectorAll('[data-of-highlight]'), () => import(/* webpackChunkName: "open-frontend-highlight" */ './components/highlight'))
  loadForElements(element.querySelectorAll('[data-of-datepicker]'), () => import(/* webpackChunkName: "open-frontend-datepicker" */ './components/datepicker'))
  loadForElements(element.querySelectorAll('[data-of-table-sort]'), () => import(/* webpackChunkName: "open-frontend-tablesort" */ './components/tablesort'))
  loadForElements(element.querySelectorAll('[data-of-rating]'), () => import(/* webpackChunkName: "open-frontend-rating" */ './components/rating'), 'initMultiple')
  loadForElements(element.querySelectorAll('[data-of-video-play]'), () => import(/* webpackChunkName: "open-frontend-video-play" */ './components/video-play'))
  loadForElements(element.querySelectorAll('[data-of-ticker]'), () => import(/* webpackChunkName: "open-frontend-ticker" */ './components/ticker'), 'initMultiple')
}

document.addEventListener('DOMContentLoaded', () => window.initOpenFrontend(document))
