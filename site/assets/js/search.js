// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

(() => {
  'use strict'

  const searchElement = document.getElementById('docsearch')

  if (!window.docsearch || !searchElement) {
    return
  }

  const siteDocsVersion = searchElement.getAttribute('data-bd-docs-version')

  window.docsearch({
    apiKey: '',
    indexName: 'openfrontend',
    appId: '',
    container: searchElement,
    searchParameters: {
      facetFilters: [`version:${siteDocsVersion}`]
    },
    transformItems(items) {
      return items.map(item => {
        const liveUrl = 'https://openfrontend.tourismusweb.site/'

        item.url = window.location.origin.startsWith(liveUrl) ?
          // On production, return the result as is
          item.url :
          // On development or Netlify, replace `item.url` with a trailing slash,
          // so that the result link is relative to the server root
          item.url.replace(liveUrl, '/')

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