# OpenFrontend.Framework

## Users

To use the OpenFrontend.Framework you can either use the pre-built assets (`/assets/framework`) or the source files (`/src`)
that can be included in your own build process.

## Development

###  Install deps

We use Yarn and Jekyll. Install as described on https://jekyllrb.com/docs/.
Then install the dependencies:

1. `yarn`
2. `bundle install`

### Build `src`

For development purposes, use `encore dev` (and `--watch`). For production/before you commit, run `encore production`.

### Build documentation

For development purposes, use `bundle exec jekyll serve`. To see what GitHub pages will produce, use `bundle exec jekyll build`.