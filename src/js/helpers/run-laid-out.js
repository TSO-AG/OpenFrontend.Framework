// This helper ensures safe initialization of components that depend on element
// dimensions (e.g. calendars, carousels, sliders).
//
// Some components fail or initialize incorrectly when their target element
// does not yet participate in layout — most commonly when it is inside an
// ancestor with `display: none` (such as a collapsed accordion or inactive tab).
//
// This function defers execution of the provided callback until the element
// has a layout box (i.e. it participates in layout and has non-zero geometry),
// guaranteeing that width/height–dependent initialization runs at the
// earliest correct moment.

export function runWhenLaidOut(el, callback) {
  const dimensions = el.getBoundingClientRect();

  // If the element is visible, run the callback right away
  if (dimensions.width > 0 || dimensions.height > 0) {
    callback();

    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Fix Firefox bug, e.g. when element is inside a tab
        setTimeout(() => callback(), 10)
        observer.disconnect()
      }
    });
  }, {
    threshold: 0
  });

  observer.observe(el);
}
