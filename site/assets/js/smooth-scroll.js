(() => {
  'use strict'

  document.querySelectorAll('a[href*=\\#]:not([href=\\#])').forEach(el => {
    // Ignore links in the example (especially useful for ScrollSpy or similar components)
    if (el.closest('.bd-example') !== null) {
      return;
    }

    el.addEventListener('click', function (e) {
      const targetElement = document.querySelector(this.hash)

      if (!targetElement) {
        return
      }

      e.preventDefault()
      targetElement.scrollIntoView()
    })
  })
})()
