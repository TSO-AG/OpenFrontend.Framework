import Raty from 'raty-js'

export default els => {
  for (const el of els) {
    const raty = new Raty(el, {
      starType: 'i',
      click(number) {
        const event = new CustomEvent('of.ratings.click', {
          detail: {
            rating: number
          }
        })

        el.dispatchEvent(event)
      }
    })
    raty.init()
    el.raty = raty
  }
}
