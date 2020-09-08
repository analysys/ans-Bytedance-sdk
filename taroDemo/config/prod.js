module.exports = {
    env: {
        NODE_ENV: '"production"'
    },
    defineConstants: {
    },
    weapp: {
        compile: {
            exclude: ['src/sdk/AnalysysAgent_ByteDance_SDK.custom.min.js', 'src/sdk/AnalysysAgent_ByteDance_SDK.min.js', 'src/sdk/AnalysysAgent_encryption.min.js']
        }
    },
    h5: {
        /**
         * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
         * 参考代码如下：
         * webpackChain (chain) {
         *   chain.plugin('analyzer')
         *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
         * }
         */
    }
}
