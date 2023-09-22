export function loadForElements(els, importer, method = 'default') {
  if (els.length > 0) {
    importer().then(module => {
      if (Object.prototype.hasOwnProperty.call(module, 'initMultiple')) {
        method = 'initMultiple'
      }

      if (typeof module[method] === 'function') {
        module[method](els)
      }
    })
  }
}
