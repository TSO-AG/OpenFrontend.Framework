---
layout: docs
title: Header
description: TODO
group: components
aliases:
  - "/components/"
toc: true
---

## Examples

### Layout 1
{{< example class="bd-example-header" >}}
<header class="header" data-of-header>
  <div class="container">
    <div class="header-brand">
      <a href="#">
        {{< placeholder width="200" height="60" alt="Logo" text="Logo" >}}
      </a>
    </div>
    <div class="header-content">
      <div class="d-none d-lg-block">
        <a href="#" class="header-link">
          <span class="header-link-icon"><i class="ofi-person-circle"></i></span>
          <span class="header-link-text">Account</span>
        </a>
      </div>
      <div class="d-none d-lg-block">
        <a href="#" class="header-link">
          <span class="header-link-icon"><i class="ofi-cart-fill"></i></span>
          <span class="header-link-text">Cart</span>
        </a>
      </div>
      <div class="d-none d-lg-block">
        <a href="#" class="header-link">
          <span class="header-link-icon">
            <i class="ofi-heart-fill"></i>
            <span class="header-link-icon-badge">
              <span class="badge bg-danger">12</span>
            </span>
          </span>
          <span class="header-link-text">Favorites</span>
        </a>
      </div>
      <div>
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon"><i class="ofi-translate"></i></span>
            <span class="header-link-text">Language</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">German</a></li>
            <li><a class="dropdown-item" href="#">English</a></li>
            <li><a class="dropdown-item" href="#">French</a></li>
          </ul>
        </div>
      </div>
      <div>
        <a href="#" class="header-link" data-bs-toggle="collapse" data-bs-target="#headerSearch"
           aria-controls="headerSearch"
           aria-expanded="false" aria-label="Toggle header search">
          <span class="header-link-icon d-none-collapsed"><i class="ofi-search"></i></span>
          <span class="header-link-icon d-block-collapsed"><i class="ofi-x-lg"></i></span>
          <span class="header-link-text">Search</span>
        </a>
        <div class="collapse header-collapse header-search-wrapper" id="headerSearch">
          <div class="container">
            <div class="header-search">
              <form>
                <div class="input-group">
                  <input type="text" class="form-control form-control-lg" placeholder="Keywords" aria-label="Keywords">
                  <button class="btn btn-icon btn-primary btn-lg" type="submit" aria-label="Start search">
                    <i class="ofi-search" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="header-link" type="button" data-bs-toggle="collapse"
                data-bs-target="#pageMenu" aria-controls="pageMenu"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="header-link-icon d-none-collapsed"><i class="ofi-list"></i></span>
          <span class="header-link-icon d-block-collapsed"><i class="ofi-x-lg"></i></span>
          <span class="header-link-text">Menu</span>
        </button>
        <div class="collapse header-collapse page-menu-wrapper" id="pageMenu">
          <div class="container">
             {{< page-menu >}}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
{{< /example >}}

### Layout 2
{{< example class="bd-example-header">}}
<header class="header" data-of-header>
  <div class="container">
    <div class="header-content d-none d-lg-flex">
      <a href="#" class="header-link">
        <span class="header-link-icon"><i class="ofi-person-circle"></i></span>
        <span class="header-link-text">Account</span>
      </a>
      <a href="#" class="header-link">
        <span class="header-link-icon"><i class="ofi-cart-fill"></i></span>
        <span class="header-link-text">Warenkorb</span>
      </a>
      <a href="#" class="header-link">
      <span class="header-link-icon">
        <i class="ofi-heart-fill"></i>
        <span class="header-link-icon-badge">
          <span class="badge bg-danger">2</span>
        </span>
      </span>
        <span class="header-link-text">Favouriten</span>
      </a>
    </div>
    <div class="header-brand">
      <a href="#">
        {{< placeholder width="200" height="60" alt="Logo" text="Logo" >}}
      </a>
    </div>
    <div class="header-content">
      <div>
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon"><i class="ofi-translate"></i></span>
            <span class="header-link-text">Spreche</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Deutsch</a></li>
            <li><a class="dropdown-item" href="#">Englisch</a></li>
            <li><a class="dropdown-item" href="#">Französisch</a></li>
          </ul>
        </div>
      </div>
      <div>
        <a href="#" class="header-link" data-bs-toggle="collapse" data-bs-target="#headerSearch2"
           aria-controls="headerSearch2"
           aria-expanded="false" aria-label="Toggle header search">
          <span class="header-link-icon d-none-collapsed"><i class="ofi-search"></i></span>
          <span class="header-link-icon d-block-collapsed"><i class="ofi-x-lg"></i></span>
          <span class="header-link-text">Search</span>
        </a>
        <div class="collapse header-collapse header-search-wrapper" id="headerSearch2">
          <div class="container">
            <div class="header-search">
              <form>
                <div class="input-group">
                  <input type="text" class="form-control form-control-lg" placeholder="Keywords" aria-label="Keywords">
                  <button class="btn btn-icon btn-primary btn-lg" type="submit" aria-label="Start search">
                    <i class="ofi-search" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="header-link" type="button" data-bs-toggle="collapse"
                data-bs-target="#pageMenu2" aria-controls="pageMenu2"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="header-link-icon d-none-collapsed"><i class="ofi-list"></i></span>
          <span class="header-link-icon d-block-collapsed"><i class="ofi-x-lg"></i></span>
          <span class="header-link-text">Menu</span>
        </button>
        <div class="collapse header-collapse page-menu-wrapper" id="pageMenu2">
          <div class="container">
            {{< page-menu >}}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
{{< /example >}}

### Dark header
{{< example class="bd-example-header" >}}
<header class="header header-dark" data-of-header>
  <div class="container">
    <div class="header-brand">
      <a href="#">
        {{< placeholder width="200" height="60" alt="Logo" text="Logo" >}}
      </a>
    </div>
    <div class="header-content">
      <div class="d-none d-lg-block">
        <a href="#" class="header-link">
          <span class="header-link-icon"><i class="ofi-person-circle"></i></span>
          <span class="header-link-text">Account</span>
        </a>
      </div>
      <div class="d-none d-lg-block">
        <a href="#" class="header-link">
          <span class="header-link-icon"><i class="ofi-cart-fill"></i></span>
          <span class="header-link-text">Warenkorb</span>
        </a>
      </div>
      <div class="d-none d-lg-block">
        <a href="#" class="header-link">
          <span class="header-link-icon">
            <i class="ofi-heart-fill"></i>
            <span class="header-link-icon-badge">
              <span class="badge bg-danger">12</span>
            </span>
          </span>
          <span class="header-link-text">Favouriten</span>
        </a>
      </div>
      <div>
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon"><i class="ofi-translate"></i></span>
            <span class="header-link-text">Spreche</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Deutsch</a></li>
            <li><a class="dropdown-item" href="#">Englisch</a></li>
            <li><a class="dropdown-item" href="#">Französisch</a></li>
          </ul>
        </div>
      </div>
      <div>
        <a href="#" class="header-link" data-bs-toggle="collapse" data-bs-target="#headerSearch3"
           aria-controls="headerSearch3"
           aria-expanded="false" aria-label="Toggle header search">
          <span class="header-link-icon d-none-collapsed"><i class="ofi-search"></i></span>
          <span class="header-link-icon d-block-collapsed"><i class="ofi-x-lg"></i></span>
          <span class="header-link-text">Suche</span>
        </a>
        <div class="collapse header-collapse header-search-wrapper header-search-wrapper-dark" id="headerSearch3">
          <div class="container">
            <div class="header-search">
              <form>
                <div class="input-group">
                  <input type="text" class="form-control form-control-lg" placeholder="Keywords" aria-label="Keywords">
                  <button class="btn btn-icon btn-primary btn-lg" type="submit" aria-label="Start search">
                    <i class="ofi-search" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="header-link" type="button" data-bs-toggle="collapse"
                data-bs-target="#pageMenu3" aria-controls="pageMenu3"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="header-link-icon d-none-collapsed"><i class="ofi-list"></i></span>
          <span class="header-link-icon d-block-collapsed"><i class="ofi-x-lg"></i></span>
          <span class="header-link-text">Menu</span>
        </button>
        <div class="collapse header-collapse page-menu-wrapper page-menu-wrapper-dark" id="pageMenu3">
          <div class="container">
             {{< page-menu >}}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="header-css-vars" file="src/scss/_header.scss" >}}

Customization through CSS variables can be seen on the `.header-dark` class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="header-dark-css-vars" file="src/scss/_header.scss" >}}

### Sass variables
Variables for all headers:

{{< scss-docs name="header-variables" file="src/scss/_variables.scss" >}}

Variables for the [dark header](#dark-header):

{{< scss-docs name="header-dark-variables" file="src/scss/_variables.scss" >}}
