import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

export default (els) => {
    els.forEach(el => {
        let options = el.dataset.ofHighlight === '' ? {} : { language: el.dataset.ofHighlight};
        hljs.highlightElement(el, options);
    });
}
