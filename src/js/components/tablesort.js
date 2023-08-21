const tablesort = require('tablesort') // eslint-disable-line no-undef

tablesort.extend(
  'number',
  item => item.match(/^\d+$/),
  (a, b) => parseFloat(b) - parseFloat(a),
)

export default els => {
  for (const el of els) {
    let options

    try {
      options = JSON.parse(el.dataset.ofTableSort || '{}')
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
      options = {}
    }

    const thead = el.querySelector('thead')

    if (thead && options.index >= 0) {
      thead.children[0].children[options.index].setAttribute('data-sort-default', '')
    }

    tablesort(el, {
      descending: options.direction === 'desc',
      sortAttribute: 'data-of-table-sort-value',
    })
  }
}
