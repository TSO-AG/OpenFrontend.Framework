const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

function createDistConfig() {
    Encore.reset();

    return Encore
        .setOutputPath('dist')
        .setPublicPath('/')
        .setManifestKeyPrefix('')
        .addEntry('open-frontend', './src/entrypoint.js')
        .enableSassLoader()
        .disableSingleRuntimeChunk()
        .splitEntryChunks()
        .cleanupOutputBeforeBuild()
        .getWebpackConfig()
    ;
}

function createDocsConfig() {
    Encore.reset();

    return Encore
        .setOutputPath('_site-dist')
        .setPublicPath('/dist')
        .setManifestKeyPrefix('')
        .addEntry('open-frontend', './src/entrypoint.js')
        .enableSassLoader()
        .disableSingleRuntimeChunk()
        .splitEntryChunks()
        .cleanupOutputBeforeBuild()
        .getWebpackConfig()
    ;
}

module.exports = [
    createDistConfig(),
    createDocsConfig(),
];
