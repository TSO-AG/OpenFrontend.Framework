import {loadForElements} from './helpers/module-loader';

document.addEventListener('DOMContentLoaded', () => {
  loadForElements(document.querySelectorAll('[data-bs-toggle="tab"]'), () => import(/* webpackChunkName: "open-frontend-tabs" */ './components/tabs'));
  loadForElements(document.querySelectorAll('[data-bs-toggle="tooltip"]'), () => import(/* webpackChunkName: "open-frontend-tooltip" */ './components/tooltip'));
  loadForElements(document.querySelectorAll('[data-bs-toggle="dropdown"]'), () => import(/* webpackChunkName: "open-frontend-dropdown" */ './components/dropdown'));
  loadForElements(document.querySelectorAll('[data-bs-toggle="modal"]'), () => import(/* webpackChunkName: "open-frontend-modal" */ './components/modal'));
  loadForElements(document.querySelectorAll('[data-bs-toggle="offcanvas"]'), () => import(/* webpackChunkName: "open-frontend-offcanvas" */ './components/offcanvas'));
  loadForElements(document.querySelectorAll('[data-of-highlight]'), () => import(/* webpackChunkName: "open-frontend-highlight" */ './components/highlight'));
});


window.bootstrap = {
  OffCanvas() {
    import('/node_modules/bootstrap/js/src/offcanvas.js').then(v => new v.default(...arguments))
  },
  get Toast() {
    return import('/node_modules/bootstrap/js/src/toast.js').then(v => v.default);

  },
  get Tooltip() {
    return import('/node_modules/bootstrap/js/src/tooltip.js').then(v => v.default);
  },
  // get Tooltip() {
  //   return (
  //     async() => {
  //       return new Promise((resolve, reject) => {
  //         import('/node_modules/bootstrap/js/src/tooltip.js').then(v => resolve(v.default))
  //       })
  //     }98
  //   )();
  // },
}
