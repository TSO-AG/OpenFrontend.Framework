import { loadForElements } from './helpers/module-loader'

window.openFrontend = {
  get Alert() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-alert" */ 'bootstrap/js/src/alert').then(v => resolve(v.default)))
  },
  get Button() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-button" */ 'bootstrap/js/src/button').then(v => resolve(v.default)))
  },
  get Carousel() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-carousel" */ './components/carousel').then(v => resolve(v.default)))
  },
  get Collapse() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-collapse" */ 'bootstrap/js/src/collapse').then(v => resolve(v.default)))
  },
  get Dropdown() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-dropdown" */ './components/dropdown').then(v => resolve(v.default)))
  },
  get Modal() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-modal" */ './components/modal').then(v => resolve(v.default)))
  },
  get OffCanvas() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-offcanvas" */ './components/offcanvas').then(v => resolve(v.default)))
  },
  get Rating() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-ticker" */ './components/rating').then(v => resolve(v.default)))
  },
  get Tab() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-tabs" */ './components/tabs').then(v => resolve(v.default)))
  },
  get Ticker() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-ticker" */ './components/ticker').then(v => resolve(v.default)))
  },
  get Tooltip() {
    return new Promise(resolve => import(/* webpackChunkName: "open-frontend-tooltip" */ './components/tooltip').then(v => resolve(v.default)))
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
  loadForElements(element.querySelectorAll('[data-of-rating]'), () => import(/* webpackChunkName: "open-frontend-rating" */ './components/rating'))
  loadForElements(element.querySelectorAll('[data-of-video-play]'), () => import(/* webpackChunkName: "open-frontend-video-play" */ './components/video-play'))
  loadForElements(element.querySelectorAll('[data-of-ticker]'), () => import(/* webpackChunkName: "open-frontend-ticker" */ './components/ticker'))
  loadForElements(element.querySelectorAll('[data-of-carousel]'), () => import(/* webpackChunkName: "open-frontend-carousel" */ './components/carousel'))
}

document.addEventListener('DOMContentLoaded', () => window.initOpenFrontend(document))
