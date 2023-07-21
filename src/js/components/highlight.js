import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

export default els => {
  for (const el of els) {
    const options = el.dataset.ofHighlight === '' ? {} : { language: el.dataset.ofHighlight }
    hljs.highlightElement(el, options)
  }
}
