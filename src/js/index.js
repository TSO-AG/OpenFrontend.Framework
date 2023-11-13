import { loadForElements } from './helpers/module-loader'

window.openFrontend = {
  get Alert() {
    return new Promise(resolve => import(/* webpackChunkName: "of-alert" */ 'bootstrap/js/src/alert').then(v => resolve(v.default)))
  },
  get Button() {
    return new Promise(resolve => import(/* webpackChunkName: "of-button" */ 'bootstrap/js/src/button').then(v => resolve(v.default)))
  },
  get Carousel() {
    return new Promise(resolve => import(/* webpackChunkName: "of-carousel" */ './components/carousel').then(v => resolve(v.default)))
  },
  get Collapse() {
    return new Promise(resolve => import(/* webpackChunkName: "of-collapse" */ './components/collapse').then(v => resolve(v.default)))
  },
  get ComboBox() {
    return new Promise(resolve => import(/* webpackChunkName: "of-combo-box" */ './components/combo-box').then(v => resolve(v.default)))
  },
  get Dropdown() {
    return new Promise(resolve => import(/* webpackChunkName: "of-dropdown" */ './components/dropdown').then(v => resolve(v.default)))
  },
  get ElementsFilter() {
    return new Promise(resolve => import(/* webpackChunkName: "of-elements-filter" */ './components/elements-filter').then(v => resolve(v.default)))
  },
  get Modal() {
    return new Promise(resolve => import(/* webpackChunkName: "of-modal" */ './components/modal').then(v => resolve(v.default)))
  },
  get OffCanvas() {
    return new Promise(resolve => import(/* webpackChunkName: "of-offcanvas" */ './components/offcanvas').then(v => resolve(v.default)))
  },
  get QuantityPicker() {
    return new Promise(resolve => import(/* webpackChunkName: "of-quantity-picker" */ './components/quantity-picker').then(v => resolve(v.default)))
  },
  get Rating() {
    return new Promise(resolve => import(/* webpackChunkName: "of-ticker" */ './components/rating').then(v => resolve(v.default)))
  },
  get Slider() {
    return new Promise(resolve => import(/* webpackChunkName: "of-slider" */ './components/slider').then(v => resolve(v.default)))
  },
  get Tab() {
    return new Promise(resolve => import(/* webpackChunkName: "of-tabs" */ './components/tabs').then(v => resolve(v.default)))
  },
  get Ticker() {
    return new Promise(resolve => import(/* webpackChunkName: "of-ticker" */ './components/ticker').then(v => resolve(v.default)))
  },
  get Tooltip() {
    return new Promise(resolve => import(/* webpackChunkName: "of-tooltip" */ './components/tooltip').then(v => resolve(v.default)))
  },
}

window.initOpenFrontend = function (element) {
  loadForElements(element.querySelectorAll('[data-bs-toggle="tab"]'), () => import(/* webpackChunkName: "of-tabs" */ './components/tabs'))
  loadForElements(element.querySelectorAll('[data-bs-toggle="tooltip"]'), () => import(/* webpackChunkName: "of-tooltip" */ './components/tooltip'))
  loadForElements(element.querySelectorAll('[data-bs-toggle="dropdown"]'), () => import(/* webpackChunkName: "of-dropdown" */ './components/dropdown'))
  loadForElements(element.querySelectorAll('[data-bs-toggle="collapse"]'), () => import(/* webpackChunkName: "of-collapse" */ './components/collapse'))
  loadForElements(element.querySelectorAll('[data-bs-toggle="modal"]'), () => import(/* webpackChunkName: "of-modal" */ './components/modal'))
  loadForElements(element.querySelectorAll('[data-bs-toggle="offcanvas"]'), () => import(/* webpackChunkName: "of-offcanvas" */ './components/offcanvas'))
  loadForElements(element.querySelectorAll('[data-of-combo-box]'), () => import(/* webpackChunkName: "of-combo-box" */ './components/combo-box'))
  loadForElements(element.querySelectorAll('[data-of-highlight]'), () => import(/* webpackChunkName: "of-highlight" */ './components/highlight'))
  loadForElements(element.querySelectorAll('[data-of-carousel]'), () => import(/* webpackChunkName: "of-carousel" */ './components/carousel'))
  loadForElements(element.querySelectorAll('[data-of-slider]'), () => import(/* webpackChunkName: "of-slider" */ './components/slider'))
  loadForElements(element.querySelectorAll('[data-of-elements-filter]'), () => import(/* webpackChunkName: "of-datepicker" */ './components/elements-filter'))
  loadForElements(element.querySelectorAll('[data-of-datepicker]'), () => import(/* webpackChunkName: "of-datepicker" */ './components/datepicker'))
  loadForElements(element.querySelectorAll('[data-of-table-sort]'), () => import(/* webpackChunkName: "of-tablesort" */ './components/tablesort'))
  loadForElements(element.querySelectorAll('[data-of-quantity-picker]'), () => import(/* webpackChunkName: "of-quantity-picker" */ './components/quantity-picker'))
  loadForElements(element.querySelectorAll('[data-of-rating]'), () => import(/* webpackChunkName: "of-rating" */ './components/rating'))
  loadForElements(element.querySelectorAll('[data-of-video-play]'), () => import(/* webpackChunkName: "of-video-play" */ './components/video-play'))
  loadForElements(element.querySelectorAll('[data-of-ticker]'), () => import(/* webpackChunkName: "of-ticker" */ './components/ticker'))
  loadForElements(element.querySelectorAll('[data-of-page-navigation]'), () => import(/* webpackChunkName: "of-page-navigation" */ './components/page-navigation'))
  loadForElements(element.querySelectorAll('[data-of-header]'), () => import(/* webpackChunkName: "of-page-navigation" */ './components/header'))
}

document.addEventListener('DOMContentLoaded', () => window.initOpenFrontend(document))
