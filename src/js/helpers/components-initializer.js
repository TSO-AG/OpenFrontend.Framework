import { loadForElements } from './module-loader'

export function initComponents(components, nodeCallback) {
  // Initial setup for the existing elements
  components.forEach(component => loadForElements(document.querySelectorAll(component.selector), () => component.callback()));

  // Set up a MutationObserver to detect when new elements are added
  new MutationObserver(mutationsList => mutationsList.forEach(mutation => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (typeof nodeCallback === 'function') {
            nodeCallback(node)
          }

          components.forEach(component => {
            const elements = [...node.querySelectorAll(component.selector)];

            // Push the node itself, if it matches the criteria
            if (node.matches(component.selector)) {
              elements.push(node)
            }

            loadForElements(elements, () => component.callback())
          })
        }
      });
    }
  })).observe(document.body, { childList: true, subtree: true });
}
