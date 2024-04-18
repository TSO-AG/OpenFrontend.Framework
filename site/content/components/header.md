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
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="person-circle" >}}</span>
            <span class="header-link-text">Account</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Login</a></li>
            <li><a class="dropdown-item" href="#">Register</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="cart-fill" >}}</span>
            <span class="header-link-text">Cart</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Overview</a></li>
            <li><a class="dropdown-item" href="#">Checkout</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">
              {{< icon name="heart-fill" >}}
              <span class="header-link-icon-badge">
                <span class="badge bg-danger">12</span>
              </span>
            </span>
            <span class="header-link-text">Favorites</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Next Trip</a></li>
            <li><a class="dropdown-item" href="#">Xmas Dinner</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Edit Favorites</a></li>
          </ul>
        </div>
      </div>
      <div>
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="translate" >}}</span>
            <span class="header-link-text">Language</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">German</a></li>
            <li><a class="dropdown-item" href="#">English</a></li>
            <li><a class="dropdown-item" href="#">French</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <button class="header-link" class="header-link" data-bs-toggle="collapse" data-bs-target="#headerSearch"
           aria-controls="headerSearch"
           aria-expanded="false" aria-label="Toggle header search">
          <span class="header-link-icon d-none-collapsed">{{< icon name="search" >}}</span>
          <span class="header-link-icon d-block-collapsed">{{< icon name="x-lg" >}}</span>
          <span class="header-link-text">Search</span>
        </button>
        <div class="collapse header-collapse header-search-wrapper" id="headerSearch">
          <div class="container">
            <div class="header-search">
              <form class="search-form search-form-lg">
                <div class="search-form-inputs">
                  <input type="search" name="keywords" placeholder="Keywords" aria-label="Keywords">
                  <button type="submit">
                    {{< icon name="search" >}}
                    <span class="visually-hidden">Search</span>
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
          <span class="header-link-icon d-none-collapsed">{{< icon name="list" >}}</span>
          <span class="header-link-icon d-block-collapsed">{{< icon name="x-lg" >}}</span>
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
<header class="header header-center" data-of-header>
  <div class="container">
    <div class="header-content d-none d-lg-flex">
      <div>
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="person-circle" >}}</span>
            <span class="header-link-text">Account</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Login</a></li>
            <li><a class="dropdown-item" href="#">Register</a></li>
          </ul>
        </div>
      </div>
      <div>
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="cart-fill" >}}</span>
            <span class="header-link-text">Cart</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Overview</a></li>
            <li><a class="dropdown-item" href="#">Checkout</a></li>
          </ul>
        </div>
      </div>
      <div>
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">
              {{< icon name="heart-fill" >}}
              <span class="header-link-icon-badge">
                <span class="badge bg-danger">2</span>
              </span>
            </span>
            <span class="header-link-text">Favorites</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Next Trip</a></li>
            <li><a class="dropdown-item" href="#">Xmas Dinner</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Edit Favorites</a></li>
          </ul>
        </div>
      </div>
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
            <span class="header-link-icon">{{< icon name="translate" >}}</span>
            <span class="header-link-text">Spreche</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Deutsch</a></li>
            <li><a class="dropdown-item" href="#">Englisch</a></li>
            <li><a class="dropdown-item" href="#">Französisch</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <button class="header-link" data-bs-toggle="collapse" data-bs-target="#headerSearch2"
           aria-controls="headerSearch2"
           aria-expanded="false" aria-label="Toggle header search">
          <span class="header-link-icon d-none-collapsed">{{< icon name="search" >}}</span>
          <span class="header-link-icon d-block-collapsed">{{< icon name="x-lg" >}}</span>
          <span class="header-link-text">Search</span>
        </button>
        <div class="collapse header-collapse header-search-wrapper" id="headerSearch2">
          <div class="container">
            <div class="header-search">
              <form class="search-form search-form-lg">
                <div class="search-form-inputs">
                  <input type="search" name="keywords" placeholder="Keywords" aria-label="Keywords">
                  <button type="submit">
                    {{< icon name="search" >}}
                    <span class="visually-hidden">Search</span>
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
          <span class="header-link-icon d-none-collapsed">{{< icon name="list" >}}</span>
          <span class="header-link-icon d-block-collapsed">{{< icon name="x-lg" >}}</span>
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

### Menu type grid
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
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="person-circle" >}}</span>
            <span class="header-link-text">Account</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Login</a></li>
            <li><a class="dropdown-item" href="#">Register</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="cart-fill" >}}</span>
            <span class="header-link-text">Cart</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Overview</a></li>
            <li><a class="dropdown-item" href="#">Checkout</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">
              {{< icon name="heart-fill" >}}
              <span class="header-link-icon-badge">
                <span class="badge bg-danger">12</span>
              </span>
            </span>
            <span class="header-link-text">Favorites</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Next Trip</a></li>
            <li><a class="dropdown-item" href="#">Xmas Dinner</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Edit Favorites</a></li>
          </ul>
        </div>
      </div>
      <div>
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="translate" >}}</span>
            <span class="header-link-text">Language</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">German</a></li>
            <li><a class="dropdown-item" href="#">English</a></li>
            <li><a class="dropdown-item" href="#">French</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <button class="header-link" class="header-link" data-bs-toggle="collapse" data-bs-target="#headerSearch"
           aria-controls="headerSearch"
           aria-expanded="false" aria-label="Toggle header search">
          <span class="header-link-icon d-none-collapsed">{{< icon name="search" >}}</span>
          <span class="header-link-icon d-block-collapsed">{{< icon name="x-lg" >}}</span>
          <span class="header-link-text">Search</span>
        </button>
        <div class="collapse header-collapse header-search-wrapper" id="headerSearch">
          <div class="container">
            <div class="header-search">
              <form class="search-form search-form-lg">
                <div class="search-form-inputs">
                  <input type="search" name="keywords" placeholder="Keywords" aria-label="Keywords">
                  <button type="submit">
                    {{< icon name="search" >}}
                    <span class="visually-hidden">Search</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="header-link" type="button" data-bs-toggle="collapse"
                data-bs-target="#pageMenuTypeGrid" aria-controls="pageMenuTypeGrid"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="header-link-icon d-none-collapsed">{{< icon name="list" >}}</span>
          <span class="header-link-icon d-block-collapsed">{{< icon name="x-lg" >}}</span>
          <span class="header-link-text">Menu</span>
        </button>
        <div class="collapse header-collapse page-menu-wrapper" id="pageMenuTypeGrid">
          <div class="container">
             {{< page-menu-type-grid page_nav_type_grid_column="3">}}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
{{< /example >}}

### Dark header
{{< example class="bd-example-header" >}}
<header class="header header-dark" data-of-header data-bs-theme="dark">
  <div class="container">
    <div class="header-brand">
      <a href="#">
        {{< placeholder width="200" height="60" alt="Logo" text="Logo" >}}
      </a>
    </div>
    <div class="header-content">
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="person-circle" >}}</span>
            <span class="header-link-text">Account</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Login</a></li>
            <li><a class="dropdown-item" href="#">Register</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="cart-fill" >}}</span>
            <span class="header-link-text">Cart</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Overview</a></li>
            <li><a class="dropdown-item" href="#">Checkout</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">
              {{< icon name="heart-fill" >}}
              <span class="header-link-icon-badge">
                <span class="badge bg-danger">12</span>
              </span>
            </span>
            <span class="header-link-text">Favorites</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Next Trip</a></li>
            <li><a class="dropdown-item" href="#">Xmas Dinner</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Edit Favorites</a></li>
          </ul>
        </div>
      </div>
      <div>
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="translate" >}}</span>
            <span class="header-link-text">Spreche</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Deutsch</a></li>
            <li><a class="dropdown-item" href="#">Englisch</a></li>
            <li><a class="dropdown-item" href="#">Französisch</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <button class="header-link" data-bs-toggle="collapse" data-bs-target="#headerSearch3"
           aria-controls="headerSearch3"
           aria-expanded="false" aria-label="Toggle header search">
          <span class="header-link-icon d-none-collapsed">{{< icon name="search" >}}</span>
          <span class="header-link-icon d-block-collapsed">{{< icon name="x-lg" >}}</span>
          <span class="header-link-text">Suche</span>
        </button>
        <div class="collapse header-collapse header-search-wrapper" id="headerSearch3">
          <div class="container">
            <div class="header-search">
              <form class="search-form search-form-lg">
                <div class="search-form-inputs">
                  <input type="search" name="keywords" placeholder="Keywords" aria-label="Keywords">
                  <button type="submit">
                    {{< icon name="search" >}}
                    <span class="visually-hidden">Search</span>
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
          <span class="header-link-icon d-none-collapsed">{{< icon name="list" >}}</span>
          <span class="header-link-icon d-block-collapsed">{{< icon name="x-lg" >}}</span>
          <span class="header-link-text">Menu</span>
        </button>
        <div class="collapse header-collapse page-menu-wrapper" id="pageMenu3">
          <div class="container">
             {{< page-menu >}}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
{{< /example >}}

### Sticky Header
{{< example class="bd-example-header" >}}
<header class="header" style="z-index: 1021; --bs-header-sticky-background-color: #eaeaea; --bs-header-sticky-color: #595959; --bs-header-sticky-padding-y: 10px;" data-of-header='{
  "sticky": true
  }'>
  <div class="container">
    <div class="header-brand">
      <a href="#">
        {{< placeholder width="200" height="60" alt="Logo" text="Logo" >}}
      </a>
    </div>
    <div class="header-content">
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="person-circle" >}}</span>
            <span class="header-link-text">Account</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Login</a></li>
            <li><a class="dropdown-item" href="#">Register</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="cart-fill" >}}</span>
            <span class="header-link-text">Cart</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Overview</a></li>
            <li><a class="dropdown-item" href="#">Checkout</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">
              {{< icon name="heart-fill" >}}
              <span class="header-link-icon-badge">
                <span class="badge bg-danger">12</span>
              </span>
            </span>
            <span class="header-link-text">Favorites</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Next Trip</a></li>
            <li><a class="dropdown-item" href="#">Xmas Dinner</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Edit Favorites</a></li>
          </ul>
        </div>
      </div>
      <div>
        <div class="dropdown">
          <button class="header-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-link-icon">{{< icon name="translate" >}}</span>
            <span class="header-link-text">Language</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">German</a></li>
            <li><a class="dropdown-item" href="#">English</a></li>
            <li><a class="dropdown-item" href="#">French</a></li>
          </ul>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <button class="header-link" class="header-link" data-bs-toggle="collapse" data-bs-target="#headerSearch"
           aria-controls="headerSearch"
           aria-expanded="false" aria-label="Toggle header search">
          <span class="header-link-icon d-none-collapsed">{{< icon name="search" >}}</span>
          <span class="header-link-icon d-block-collapsed">{{< icon name="x-lg" >}}</span>
          <span class="header-link-text">Search</span>
        </button>
        <div class="collapse header-collapse header-search-wrapper" id="headerSearch">
          <div class="container">
            <div class="header-search">
              <form class="search-form search-form-lg">
                <div class="search-form-inputs">
                  <input type="search" name="keywords" placeholder="Keywords" aria-label="Keywords">
                  <button type="submit">
                    {{< icon name="search" >}}
                    <span class="visually-hidden">Search</span>
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
          <span class="header-link-icon d-none-collapsed">{{< icon name="list" >}}</span>
          <span class="header-link-icon d-block-collapsed">{{< icon name="x-lg" >}}</span>
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

## Helper classes

In the context of the header component, we have added some helper classes that you may use in your elements. Below are the available classes:

- `.header-sticky-hide`: This class will hide an element inside the header, when the header becomes sticky.

- `.header-sticky-show`: This class will hide an element by default, and show it only when the header becomes sticky.

- `.sticky-top-header`: This class will make your element stick to the top of the viewport once you scroll past it. If a sticky header is present on the page, this class will take into account its height. For more detailed information, please refer to the section dedicated to this helper class in our documentation. [Read more.]({{< docsref "/helpers/position#sticky-top-header" >}})

- `.min-vh-100-header`: This class will adjust the minimum height of your element to fit the viewport height, diminished by the height of the header. It is a useful class to ensure that your elements properly take up vertical space. More detailed information can be found in the dedicated section in our documentation. [Read more.]({{< docsref "/utilities/sizing#100vh-diminished-by-header-height" >}})

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
