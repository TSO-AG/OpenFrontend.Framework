import { loadForElements } from './helpers/module-loader';

document.addEventListener('DOMContentLoaded', () => {
    loadForElements(document.querySelectorAll('[data-bs-toggle]'), () => import('bootstrap/js/src/tab'));
});
