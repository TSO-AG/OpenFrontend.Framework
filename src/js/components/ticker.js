class Ticker {
  constructor(el) {
    const config = el.dataset.ofTicker ? JSON.parse(el.dataset.ofTicker) : {};
    config.bodyCssClass = config.bodyCssClass || 'ticker-show';
    config.items = config.items || [];
    config.pauseOnHover = config.hasOwnProperty('pauseOnHover') ? config.pauseOnHover : true;
    config.speedBreakpoint = config.speedBreakpoint || 767;
    config.speedDesktop = config.speedDesktop || 2;
    config.speedMobile = config.speedMobile || 1;

    this.el = el;
    this.config = config;
    this.interval = null;
    this.items = config.items;
    this.paused = false;

    this.itemsContainer = document.createElement('div');
    this.itemsContainer.className = 'ticker-items';
    this.el.append(this.itemsContainer);

    document.body.prepend(this.el);
    this.initTicker();
    window.addEventListener('resize', () => this.resizeTicker());
  }

  setItems(items) {
    this.items = items;

    if (this.items.length === 0) {
      this.hideTicker();
    } else {
      this.showTicker();
    }
  }

  resizeTicker(updatePosition = true) {
    const width = this.el.getBoundingClientRect().width;

    [...this.itemsContainer.children].forEach(el => {
      el.style.minWidth = `${width}px`;

      if (updatePosition) {
        el.style.left = `${width}px`;
      }
    });
  }

  appendItems() {
    if (this.items.length === 0) {
      return;
    }

    const elementWidth = this.el.getBoundingClientRect().width;

    this.items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'ticker-item' + (item.cssClass ? ` ${item.cssClass}` : '');
      div.style.left = `${elementWidth}px`;

      // Add the custom CSS class to the data attribute, which will be added to the main element
      // when this item becomes the active/current one.
      if (item.cssClass) {
        div.dataset.cssClass = item.cssClass;
      }

      if (item.icon) {
        const i = document.createElement('i');
        i.className = `ticker-icon ${item.icon}`;

        div.appendChild(i);
      }

      if (item.url) {
        const a = document.createElement('a');
        a.className = 'ticker-link';
        a.href = item.url;
        a.innerText = item.content;

        if (item.newWindow) {
          a.target = '_blank';
        }

        div.appendChild(a);
      } else {
        const span = document.createElement('span');
        span.className = 'ticker-text';
        span.innerText = item.content;

        div.appendChild(span);
      }

      this.itemsContainer.appendChild(div);
    });

    this.resizeTicker(false);
    this.showTicker();
  }

  scrollTicker() {
    if (this.itemsContainer.children.length === 0) {
      this.appendItems();
    }

    if (this.paused) {
      this.animationFrameId = requestAnimationFrame(this.scrollTicker.bind(this));
      return;
    }

    const item = this.itemsContainer.children[0];

    if (!item) {
      this.animationFrameId = requestAnimationFrame(this.scrollTicker.bind(this));
      return;
    }

    const elementBounds = this.el.getBoundingClientRect();
    const itemBounds = item.getBoundingClientRect();

    // Stop the animation if th element is out of the view already
    if (itemBounds.right < 0) {
      this.el.classList.remove(item.dataset.cssClass);

      // Hide ticker if there are ticker
      if (this.itemsContainer.children.length === 1 && this.items.length === 0) {
        this.hideTicker();
      }

      item.remove();
    } else {
      item.style.left = `${parseFloat(item.style.left) - this.getTickerSpeed()}px`;

      // Add the CSS class to the main element if it's not there yet
      if (item.dataset.cssClass && !this.el.classList.contains(item.dataset.cssClass)) {
        this.el.classList.add(item.dataset.cssClass);
      }

      // Start scrolling the next element if the current one crosses the right border of the window
      if (itemBounds.right <= elementBounds.width) {
        if (this.itemsContainer.children.length === 1) {
          this.appendItems();
        }

        const nextItem = this.itemsContainer.children[1];

        if (nextItem) {
          nextItem.style.left = `${parseFloat(item.style.left) + itemBounds.width}px`
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(this.scrollTicker.bind(this));
  }

  initTicker() {
    this.appendItems();

    if (this.config.pauseOnHover) {
      this.el.addEventListener('mouseenter', () => this.paused = true);
      this.el.addEventListener('mouseleave', () => this.paused = false);
    }

    this.scrollTicker();

    this.el.ticker = this;
    this.el.dispatchEvent(new CustomEvent('initialized.of.ticker'));
  }

  getTickerSpeed() {
    if (window.matchMedia(`(max-width: ${this.config.speedBreakpoint}px)`).matches) {
      return this.config.speedMobile;
    }

    return this.config.speedDesktop;
  }

  showTicker() {
    if (this.items.length > 0) {
      document.body.classList.add(this.config.bodyCssClass);
      this.paused = false;
    }
  }

  hideTicker() {
    document.body.classList.remove(this.config.bodyCssClass);
    this.paused = true;
  }
}

export default els => {
  const el = els[0];

  if (!el) {
    return;
  }

  new Ticker(el);
}
