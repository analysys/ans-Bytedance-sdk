module.exports = {
    env: {
        NODE_ENV: '"development"'
    },
    defineConstants: {},
    weapp: {
        compile: {
            exclude: ['src/sdk/AnalysysAgent_ByteDance_SDK.custom.min.js', 'src/sdk/AnalysysAgent_ByteDance_SDK.min.js', 'src/sdk/AnalysysAgent_encryption.min.js']
        }
    },
    h5: {}
}
