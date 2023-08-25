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
      altFormat: 'd.m.Y',
      // eslint-disable-next-line camelcase
      time_24hr: true,
      dateFormat: 'd.m.Y',
      ...options,
    })
  }
}
