const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('assets/framework/')
    .setPublicPath('/framework/')
    .addEntry('open-frontend', './src/entrypoint.js')
    .enableSassLoader()
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();
