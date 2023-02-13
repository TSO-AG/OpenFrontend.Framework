import { loadForElements } from './helpers/module-loader';

document.addEventListener('DOMContentLoaded', () => {
    loadForElements(document.querySelectorAll('[data-accordion]'), () => import('./components/accordion'));
});
