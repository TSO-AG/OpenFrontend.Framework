import Raty from 'raty-js'

export default els => {
  for (const el of els) {
    let options

    try {
      options = JSON.parse(el.dataset.ofRating || '{}')
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
      options = {}
    }

    if (options.icon) {
      options.starOn = `star-on-png ${options.icon}`
      options.starOff = `star-off-png ${options.icon}`
      options.starHalf = `star-half-png ${options.icon}`
    }

    const rating = new Raty(el, {
      ...options,
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
