export function loadForElements(els, importer, method = 'default') {
  if (els.length > 0) {
    importer().then(module => module[method] && module[method](els))
  }
}
