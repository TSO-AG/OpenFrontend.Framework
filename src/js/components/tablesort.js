const tablesort = require('tablesort') // eslint-disable-line no-undef

export default els => {
  for (const el of els) {
    let options

    try {
      options = JSON.parse(el.dataset.ofTableSort)
    } catch {
      options = {}
    }

    tablesort(el, options)
  }
}
