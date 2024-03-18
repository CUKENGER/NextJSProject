// next.config.js

module.exports = {
    // Other Next.js config options...
    cssModules: true,
    cssLoaderOptions: {
        modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
        },
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};