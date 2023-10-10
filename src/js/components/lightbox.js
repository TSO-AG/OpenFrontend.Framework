import GLightbox from 'glightbox/src/js/glightbox';
import 'glightbox/dist/css/glightbox.min.css';

export default els => {
  const groups = [];

  els.forEach(link => {
    if (!groups.includes(link.dataset.ofLightbox)) {
      groups.push(link.dataset.ofLightbox);
    }
  });

  groups.forEach(group => {
    GLightbox({
      selector: `[data-of-lightbox="${group}"]`,
    });
  });
}
