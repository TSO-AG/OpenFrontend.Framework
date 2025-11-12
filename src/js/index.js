import { detectUserAgent } from './helpers/ua';
import { initComponents } from './helpers/components-initializer';

window.openFrontend = {
  get Alert() {
    return new Promise(resolve => import(/* webpackChunkName: "of-alert" */ 'bootstrap/js/src/alert').then(v => resolve(v.default)))
  },
  get AnchorNavigation() {
    return new Promise(resolve => import(/* webpackChunkName: "of-anchor-navigation" */ './components/anchor-navigation').then(v => resolve(v.default)))
  },
  get Animation() {
    return new Promise(resolve => import(/* webpackChunkName: "of-animation" */ './components/animation').then(v => resolve(v.default)))
  },
  get Button() {
    return new Promise(resolve => import(/* webpackChunkName: "of-button" */ 'bootstrap/js/src/button').then(v => resolve(v.default)))
  },
  get Calendar() {
    return new Promise(resolve => import(/* webpackChunkName: "of-calendar" */ './components/calendar').then(v => resolve(v.default)))
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
  get FieldRange() {
    return new Promise(resolve => import(/* webpackChunkName: "of-field-range" */ './components/field-range').then(v => resolve(v.default)))
  },
  get FieldSync() {
    return new Promise(resolve => import(/* webpackChunkName: "of-field-sync" */ './components/field-sync').then(v => resolve(v.default)))
  },
  get Lightbox() {
    return new Promise(resolve => import(/* webpackChunkName: "of-lightbox" */ './components/lightbox').then(v => resolve(v.default)))
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
  get Popover() {
    return new Promise(resolve => import(/* webpackChunkName: "of-popover" */ './components/popover').then(v => resolve(v.default)))
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

const components = [
  { selector: '[data-bs-toggle="tab"]', callback: () => import(/* webpackChunkName: "of-tabs" */ './components/tabs') },
  { selector: '[data-bs-toggle="tooltip"]', callback: () => import(/* webpackChunkName: "of-tooltip" */ './components/tooltip') },
  { selector: '[data-bs-toggle="dropdown"]', callback: () => import(/* webpackChunkName: "of-dropdown" */ './components/dropdown') },
  { selector: '[data-bs-toggle="collapse"], [data-of-collapse-link]', callback: () => import(/* webpackChunkName: "of-collapse" */ './components/collapse') },
  { selector: '[data-bs-toggle="modal"]', callback: () => import(/* webpackChunkName: "of-modal" */ './components/modal') },
  { selector: '[data-bs-toggle="offcanvas"]', callback: () => import(/* webpackChunkName: "of-offcanvas" */ './components/offcanvas') },
  { selector: '[data-bs-toggle="popover"]', callback: () => import(/* webpackChunkName: "of-popover" */ './components/popover') },
  { selector: '[data-of-anchor-navigation]', callback: () => import(/* webpackChunkName: "of-anchor-navigation" */ './components/anchor-navigation') },
  { selector: '[data-of-calendar]', callback: () => import(/* webpackChunkName: "of-calendar" */ './components/calendar') },
  { selector: '[data-of-check-tree]', callback: () => import(/* webpackChunkName: "of-check-tree" */ './components/check-tree') },
  { selector: '[data-of-combo-box]', callback: () => import(/* webpackChunkName: "of-combo-box" */ './components/combo-box') },
  { selector: '[data-of-highlight]', callback: () => import(/* webpackChunkName: "of-highlight" */ './components/highlight') },
  { selector: '[data-of-carousel]', callback: () => import(/* webpackChunkName: "of-carousel" */ './components/carousel') },
  { selector: '[data-of-slider]', callback: () => import(/* webpackChunkName: "of-slider" */ './components/slider') },
  { selector: '[data-of-elements-filter]', callback: () => import(/* webpackChunkName: "of-elements-filter" */ './components/elements-filter') },
  { selector: '[data-of-datepicker]', callback: () => import(/* webpackChunkName: "of-datepicker" */ './components/datepicker') },
  { selector: '[data-of-lightbox],[data-of-lightbox-config],[data-of-lightbox-open]', callback: () => import(/* webpackChunkName: "of-lightbox" */ './components/lightbox') },
  { selector: '[data-of-table-sort]', callback: () => import(/* webpackChunkName: "of-tablesort" */ './components/tablesort') },
  { selector: '[data-of-quantity-picker]', callback: () => import(/* webpackChunkName: "of-quantity-picker" */ './components/quantity-picker') },
  { selector: '[data-of-rating]', callback: () => import(/* webpackChunkName: "of-rating" */ './components/rating') },
  { selector: '[data-of-video-play]', callback: () => import(/* webpackChunkName: "of-video-play" */ './components/video-play') },
  { selector: '[data-of-ticker]', callback: () => import(/* webpackChunkName: "of-ticker" */ './components/ticker') },
  { selector: '[data-of-page-navigation]', callback: () => import(/* webpackChunkName: "of-page-navigation" */ './components/page-navigation') },
  { selector: '[data-of-header]', callback: () => import(/* webpackChunkName: "of-page-header" */ './components/header') },
  { selector: '[data-of-animation]', callback: () => import(/* webpackChunkName: "of-animation" */ './components/animation') },
  { selector: '[data-of-field-range]', callback: () => import(/* webpackChunkName: "of-field-range" */ './components/field-range') },
  { selector: '[data-of-field-sync]', callback: () => import(/* webpackChunkName: "of-field-sync" */ './components/field-sync') },
  { selector: '[data-of-scroll-shadow]', callback: () => import(/* webpackChunkName: "of-scroll-shadow" */ './components/scroll-shadow') },
]

// Detect the user agent in the first place
detectUserAgent(document.body);

// Then initialize the components
initComponents(components);
