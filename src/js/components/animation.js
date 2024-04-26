import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * Constants
 */
const NAME = 'animation'
const ANIMATION_CLASS_NAME_PREFIX = ''
const ANIMATION_CLASS_READY = 'animated'
const EVENT_ANIMATION_ENTER = 'in.of.animation'
const EVENT_ANIMATION_EXIT = 'out.of.animation'

const DefaultType = {
  name: 'string',
  duration: 'number',
  delay: 'number',
  offset: 'number',
  repeat: 'boolean',
}

const Default = {
  name: 'fadeIn',
  duration: 1500,
  delay: 0,
  offset: 0,
  repeat: false,
}

class Animation extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    element.style.visibility = 'hidden'
    this._initAnimation()
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

  // Private
  _initAnimation() {
    const observerOptions = {
      rootMargin: `0px 0px ${-this._config.offset}px 0px`,
      threshold: 0
    }

    this._observer = new IntersectionObserver(this._handleIntersect, observerOptions)
    this._observer.observe(this._element)
  }

  _handleIntersect = (entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this._startAnimation(entry.target)
        if (!this._config.repeat) {
          observer.unobserve(entry.target)
        }
      } else if (this._config.repeat) {
        this._reverseAnimation(entry.target)
      }
    }
  }

  _startAnimation(target) {
    target.style.visibility = ''
    target.classList.add(`${ANIMATION_CLASS_NAME_PREFIX}${ANIMATION_CLASS_READY}`)
    target.classList.add(`${ANIMATION_CLASS_NAME_PREFIX}${this._config.name}`)

    target.style.animationDuration = `${this._config.duration}ms`
    target.style.animationDelay = `${this._config.delay}ms`

    target.dispatchEvent(new CustomEvent(EVENT_ANIMATION_ENTER, {detail: {element: target}}))

    target.addEventListener('animationend', () => {
      target.dispatchEvent(new CustomEvent(EVENT_ANIMATION_EXIT, {detail: {element: target}}))
      if (!this._config.repeat) {
        target.classList.remove(this._config.name)
      }
    }, {once: true})
  }

  _reverseAnimation(target) {
    target.classList.remove(this._config.name)
    target.dispatchEvent(new CustomEvent(EVENT_ANIMATION_EXIT, {detail: {element: target}}))
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Animation.getOrCreateInstance(el, el.dataset.ofAnimation ? JSON.parse(el.dataset.ofAnimation) : {})
  }
}

export default Animation
