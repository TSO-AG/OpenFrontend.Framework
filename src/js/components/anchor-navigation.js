import BaseComponent from 'bootstrap/js/src/base-component'
import {isDisabled, isVisible} from 'bootstrap/js/src/util';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';

/**
 * Constants
 */
const NAME = 'anchor_navigation'
const EVENT_COMPONENT_INITIALIZED = 'initialized.of.anchor_navigation'

const CLASS_NAME_ACTIVE = 'active'

const SELECTOR_LINKS = '[href]'
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group'
const SELECTOR_NAV_LINKS = '.nav-link'
const SELECTOR_NAV_ITEMS = '.nav-item'
const SELECTOR_LIST_ITEMS = '.list-group-item'
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`

const DefaultType = {}

const Default = {}

class AnchorNavigation extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._activeTarget = null
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }

    this._initializeTargetsAndObservables()
    this._initializeObserver()
    this._element.dispatchEvent(new CustomEvent(EVENT_COMPONENT_INITIALIZED))
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  scrollToSection(section) {
    if (!this._sections.has(section)) {
      throw new Error(`The section "${section}" does not exist`)
    }

    const height = Math.max(this._sections.get(section).offsetTop - this._getStickyElementsOffset(), 0)

    if (window.scrollTo) {
      window.scrollTo({ top: height, behavior: 'smooth' })
      return
    }

    // Chrome 60 doesn't support `scrollTo`
    window.scrollTop = height
  }

  // Private
  _getStickyElementsOffset() {
    let offset = this._element.offsetHeight;
    const header = document.querySelector('header.header-sticky');

    // Add the sticky header height
    if (header) {
      offset = offset + header.offsetHeight;
    }

    return offset;
  }

  _initializeTargetsAndObservables() {
    this._links = new Map()
    this._sections = new Map()

    const links = [...this._element.querySelectorAll(SELECTOR_LINKS)]

    for (const anchor of links) {
      const hash = decodeURI(anchor.hash).substring(1)

      // ensure that the anchor has an id and is not disabled
      if (!hash || isDisabled(anchor)) {
        continue
      }

      const section = document.getElementById(hash)

      // ensure that the section exists & is visible
      if (!isVisible(section)) {
        continue
      }

      anchor.addEventListener('click', e => {
        e.preventDefault();
        this.scrollToSection(hash)
      });

      this._links.set(hash, anchor)
      this._sections.set(hash, section)
    }
  }

  _initializeObserver() {
    this._observer = new IntersectionObserver(entries => this._observerCallback(entries), {
      threshold: 0.5,
    })

    for (const section of this._sections.values()) {
      this._observer.observe(section)
    }
  }

  _observerCallback(entries) {
    const targetElement = entry => this._links.get(entry.target.id)
    const activate = entry => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop
      this._process(targetElement(entry))
    }

    const parentScrollTop = document.documentElement.scrollTop
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop
    this._previousScrollData.parentScrollTop = parentScrollTop

    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null
        this._clearActiveClass(targetElement(entry))

        continue
      }

      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop

      // if we are scrolling down, pick the bigger offsetTop
      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry)
        // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
        if (!parentScrollTop) {
          return
        }

        continue
      }

      // if we are scrolling up, pick the smallest offsetTop
      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry)
      }
    }
  }

  _process(target) {
    if (this._activeTarget === target) {
      return
    }

    this._clearActiveClass(this._element)
    this._activeTarget = target
    target.classList.add(CLASS_NAME_ACTIVE)
    this._activateParents(target)
  }

  _activateParents(target) {
    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      // Set triggered links parents as active
      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE)
      }
    }
  }

  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE)
    parent.querySelectorAll(`${SELECTOR_LINKS}.${CLASS_NAME_ACTIVE}`).forEach(v => v.classList.remove(CLASS_NAME_ACTIVE))
  }
}

export function initMultiple(els) {
  for (const el of els) {
    AnchorNavigation.getOrCreateInstance(el, el.dataset.ofAnchorNavigation ? JSON.parse(el.dataset.ofAnchorNavigation) : {})
  }
}

export default AnchorNavigation
