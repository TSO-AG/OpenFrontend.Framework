import flatpickr from 'flatpickr'

export default els => {
  for (const el of els) {
    let options

    try {
      options = JSON.parse(el.dataset.ofDatepicker || '{}')
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
      options = {}
    }

    flatpickr(el, {
      ...options,
    })
  }
}
