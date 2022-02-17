/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    productionSourceMap: false,
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config
                .output
                .filename('js/[name].js?_hash=[contenthash:8]')
                .chunkFilename('js/[name].js?_hash=[contenthash:8]');
        }
    },
};
