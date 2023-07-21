(() => {
  'use strict'

  document.querySelectorAll('a[href*=\\#]:not([href=\\#])').forEach(el => {
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
