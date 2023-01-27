# OpenFrontend.Framework
## Development

###  Install deps

We use Yarn and Jekyll. Install as described on https://jekyllrb.com/docs/.
Then install the dependencies:

1. `yarn install`
2. `bundle install`

### Build `src`

For development purposes, use `yarn encore dev` (and `--watch`). For production/before you commit, run `yarn encore production`.

### Build documentation

For development purposes, use `bundle exec jekyll serve`. To see what GitHub pages will produce, use `bundle exec jekyll build`.

### Description of the directories

* `.jekyll-cache` - Jekyll cache directory
* `_layouts` - contains the Jekyll layouts, used for the documentation
* `_site` - contains the generated documentation
* `assets/framework` - contains the framework generated using our build process. DO NOT manually adjust anything here.
* `assets/docs` - contains assets required for the docs only
* `node_modules` - Dependencies
* `src` - contains the source files for the framework