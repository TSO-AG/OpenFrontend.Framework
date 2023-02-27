import { loadForElements } from './helpers/module-loader';

document.addEventListener('DOMContentLoaded', () => {
    loadForElements(document.querySelectorAll('[data-bs-toggle]'), () => import(/* webpackChunkName: "open-frontend-tabs" */ './components/tabs'));
    loadForElements(document.querySelectorAll('[data-of-highlight]'), () => import(/* webpackChunkName: "open-frontend-highlight" */ './components/highlight'));
});
