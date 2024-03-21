const fs = require('node:fs')
const path = require('node:path')
const md5Dir = require('md5-dir')
const Encore = require('@symfony/webpack-encore')

class CreateHtaccessPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('CreateHtaccessPlugin', () => {
      fs.copyFileSync(
        dir('src/.htaccess'),
        dir('_site-dist/.htaccess'),
      );
    });
  }
}

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

// Remove the query string form the keys of manifest.json file, especially those for IcoMoon font icons
class RemoveQueryStringFromManifestPlugin {
  constructor(outputPath) {
    this.outputPath = outputPath
  }

  apply(compiler) {
    compiler.hooks.done.tap('RemoveQueryStringFromManifestPlugin', () => {
      const path = dir(`${this.outputPath}/manifest.json`)
      const manifest = JSON.parse(fs.readFileSync(path))

      for (const key of Object.keys(manifest)
        .filter(key => key.includes('?'))) {
        manifest[key.split('?').shift()] = manifest[key]
        delete manifest[key]
      }

      fs.writeFileSync(path, JSON.stringify(manifest))
    })
  }
}

function dir(value) {
  return path.resolve(__dirname, value)
}

function getFilename(folder, hash = '[contenthash]') {
  return Encore.isProduction() ? `${folder}/[name].${hash}[ext]` : `${folder}/[name][ext]`
}

function createConfigDraft(outputPath, publicPath) {
  Encore.reset()

  return Encore
    .addEntry('open-frontend', './src/entrypoint.js')
    .addPlugin(new RemoveQueryStringFromManifestPlugin(outputPath))
    .cleanupOutputBeforeBuild()
    .disableSingleRuntimeChunk()
    .enableSassLoader()
    .enablePostCssLoader()
    .setManifestKeyPrefix('')
    .setOutputPath(outputPath)
    .setPublicPath(publicPath)

    // Load the fonts and icons
    .configureFontRule({ enabled: false })
    .addLoader({
      test: /\.(woff|woff2|ttf|eot|otf)$/i,
      include: [
        dir('src/fonts'),
        dir('node_modules/@fontsource')
      ],
      oneOf: [
        {
          resourceQuery: /copy-files-loader/,
          type: 'javascript/auto'
        },
        {
          type: 'asset/resource',
          generator: {
            filename: getFilename('fonts')
          }
        }
      ]
    })

    // Load optimized and minified images
    .configureImageRule({ enabled: false })
    .addLoader({
      test: /\.(png|jpg|jpeg)$/i,
      oneOf: [
        {
          resourceQuery: /copy-files-loader/,
          type: 'javascript/auto'
        },
        {
          type: 'asset/resource',
          generator: {
            filename: getFilename('images')
          }
        }
      ]
    })
    .addLoader({
      test: /\.(gif|ico|svg|webp|avif)$/i,
      exclude: [
        dir('src/fonts')
      ],
      oneOf: [
        {
          resourceQuery: /copy-files-loader/,
          type: 'javascript/auto'
        },
        {
          type: 'asset/resource',
          generator: {
            filename: getFilename('images')
          }
        }
      ]
    })
}

function createDistConfig() {
  return createConfigDraft('dist', '/')
    .getWebpackConfig()
}

function createDocsConfig(baseUrl) {
  let publicPath = ''

  // Get the public path from base URL. Only the top level folders are support (e.g. https://domain.tld/folder).
  if (baseUrl.length > 0) {
    const regexp = new RegExp('^https?://[^/]+(/[^/]+)(/)?$')
    const matches = regexp.exec(baseUrl)

    if (matches !== null) {
      publicPath = matches[1]
    }
  }

  return createConfigDraft('_site-dist', `${publicPath}/dist`)
    .addPlugin(new CreateHtaccessPlugin())
    .enableSourceMaps()
    .enableVersioning(Encore.isProduction())
    .getWebpackConfig()
}

function createNamedConfig(name, config) {
  config.name = name

  return config
}

module.exports = env => {
  return [
    createNamedConfig('dist', createDistConfig()),
    createNamedConfig('docs', createDocsConfig(env.BASE_URL || ''))
  ]
}
