const tablesort = require('tablesort') // eslint-disable-line no-undef

export default els => {
  for (const el of els) {
    let options

    try {
      options = JSON.parse(el.dataset.ofTableSort || '{}')
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
      options = {}
    }

    tablesort(el, options)
  }
}
