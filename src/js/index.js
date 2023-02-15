import { loadForElements } from './helpers/module-loader';

document.addEventListener('DOMContentLoaded', () => {
    loadForElements(document.querySelectorAll('[data-bs-toggle]'), () => import(/* webpackChunkName: "open-frontend-tabs" */ 'bootstrap/js/src/tab'));
});
