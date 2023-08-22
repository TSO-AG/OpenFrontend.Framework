import Raty from 'raty-js'

export default els => {
  for (const el of els) {
    const rating = new Raty(el, {
      starType: 'i',
      click(number) {
        const event = new CustomEvent('clicked.of.rating', {
          detail: {
            rating: number
          }
        })

        el.dispatchEvent(event)
      }
    })
    rating.init()
    el.rating = rating
  }
}
