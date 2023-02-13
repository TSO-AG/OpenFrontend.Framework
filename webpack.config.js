const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('assets/framework/')
    .setPublicPath('/')
    .addEntry('open-frontend', './src/entrypoint.js')
    .enableSassLoader()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();
