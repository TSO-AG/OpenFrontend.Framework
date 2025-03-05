import BaseComponent from 'bootstrap/js/src/base-component'
import {isDisabled, isVisible} from 'bootstrap/js/src/util';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';

/**
 * Constants
 */
const NAME = 'anchor_navigation'
const EVENT_COMPONENT_INITIALIZED = 'initialized.of.anchor_navigation'

const CLASS_NAME_ACTIVE = 'active'

const CSS_HEIGHT_PROPERTY_NAME = '--bs-anchor-navigation-height'

const SELECTOR_LINKS = '[href]'
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group'
const SELECTOR_NAV_LINKS = '.nav-link'
const SELECTOR_NAV_ITEMS = '.nav-item'
const SELECTOR_LIST_ITEMS = '.list-group-item'
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`

const DefaultType = {
  urlHashTracking: 'boolean',
}

const Default = {
  urlHashTracking: true,
}

class AnchorNavigation extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._activeTarget = null
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }

    document.documentElement.style.setProperty(CSS_HEIGHT_PROPERTY_NAME, `${this._element.offsetHeight}px`)

    this._initializeTargetsAndObservables()
    this._initializeObservers()
    this._initializeUrlHashTracking()

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

    this._sections.get(section).scrollIntoView({ behavior: 'smooth' });
  }

  // Private
  _initializeTargetsAndObservables() {
    this._links = new Map()
    this._sections = new Map()

    const links = [...this._element.querySelectorAll(SELECTOR_LINKS)]

    for (const anchor of links) {
      const hash = this._getSectionNameFromLink(anchor)

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

        if (this._config.urlHashTracking) {
          window.history.pushState({ section: this._getSectionNameFromLink(anchor) }, '', anchor.href)
        }
      });

      this._links.set(hash, anchor)
      this._sections.set(hash, section)
    }
  }

  _initializeObservers() {
    const intersectionObserver = new IntersectionObserver(entries => this._observerCallback(entries), {
      rootMargin: '0px 0px -25%',
      threshold: [0.1, 0.5, 1]
    })

    for (const section of this._sections.values()) {
      intersectionObserver.observe(section)
    }

    new ResizeObserver(entries => {
      for (const entry of entries) {
        document.documentElement.style.setProperty(CSS_HEIGHT_PROPERTY_NAME, `${entry.target.offsetHeight}px`)
      }
    }).observe(this._element)
  }

  _initializeUrlHashTracking() {
    if (!this._config.urlHashTracking) {
      return;
    }

    const hash = window.location.hash.substring(1);

    // Scroll the initially provided section
    if (hash && this._sections.has(hash)) {
      setTimeout(() => this.scrollToSection(hash), 500)
    }

    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.addEventListener('popstate', event => {
      if (event.state?.section) {
        event.preventDefault();
        this.scrollToSection(event.state.section)
      }
    });
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
    target.ariaCurrent = 'true';
    target.classList.add(CLASS_NAME_ACTIVE)
    this._activateParents(target)
    this._scrollLinkIntoView(target)
  }

  _scrollLinkIntoView(link) {
    const navigation = this._element.querySelector(SELECTOR_NAV_LIST_GROUP);

    // Do not scroll if there is no overflow
    if (navigation.scrollWidth === navigation.clientWidth) {
      return;
    }

    let offset = 0;

    // If the active link width is larger than the element width itself, scroll to the left edge of it
    if (link.offsetWidth > navigation.clientWidth) {
      offset = link.offsetLeft - navigation.offsetLeft;
    } else {
      // Otherwise, scroll to the center of active link
      offset = link.offsetLeft - navigation.offsetLeft - (navigation.clientWidth / 2) + (link.offsetWidth / 2);
    }

    navigation.scrollTo({ left: offset, behavior: 'smooth' });
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
    parent.querySelectorAll(`${SELECTOR_LINKS}.${CLASS_NAME_ACTIVE}`).forEach(v => {
      v.removeAttribute('aria-current');
      v.classList.remove(CLASS_NAME_ACTIVE)
    })
  }

  _getSectionNameFromLink(link) {
    return decodeURI(link.hash).substring(1)
  }
}

export function initMultiple(els) {
  for (const el of els) {
    AnchorNavigation.getOrCreateInstance(el, el.dataset.ofAnchorNavigation ? JSON.parse(el.dataset.ofAnchorNavigation) : {})
  }
}

export default AnchorNavigation
