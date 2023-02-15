const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('docs/assets/open-frontend')
    .setPublicPath('/assets/open-frontend')
    .setManifestKeyPrefix('')
    .addEntry('open-frontend', './src/entrypoint.js')
    .enableSassLoader()
    .enableVersioning()
    .disableSingleRuntimeChunk()
    .splitEntryChunks()
    .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();