// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

(() => {
  'use strict'

  const searchElement = document.getElementById('docsearch')

  if (!window.docsearch || !searchElement) {
    return
  }

  window.docsearch({
    apiKey: '83e0710cd8094cb2e05351f4040d23de',
    indexName: 'openfrontend',
    appId: 'GEG4FKAQFB',
    container: searchElement,
    transformItems(items) {
      return items.map(item => {
        // Prevent jumping to first header
        if (item.anchor === 'content') {
          item.url = item.url.replace(/#content$/, '')
          item.anchor = null
        }

        return item
      })
    }
  })
})()
