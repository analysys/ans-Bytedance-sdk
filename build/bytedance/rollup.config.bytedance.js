import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'
import path from 'path'

const pathResolve = p => path.join(__dirname, p)

function changePath () {
    return {
        name: 'changePath',
        transform: function transform (code, id) {
            code = code.replace(/\@Storage/g, pathResolve('../../src/ProgramDiff/bytedance/storage'))
                .replace(/\@Device/g, pathResolve('../../src/ProgramDiff/bytedance/device'))
                .replace(/\@Fetch/g, pathResolve('../../src/ProgramDiff/bytedance/fetch'))
                .replace(/\@Router/g, pathResolve('../../src/ProgramDiff/bytedance/router'))
                .replace(/\$ANS/g, 'BTD')
                .replace(/\$LIB/g, 'ByteDance')
                .replace(/\$LibVERSION/, '4.3.1')
            return {
                code: code,
                id: id
            }
        }
    }
}
export default [{
    input: './src/main.js',
    output: [
        {
            file: './Demo/util/sdk/AnalysysAgent_ByteDance_SDK.min.js',
            format: 'cjs',
            name: 'Ans',
            plugins: [
                uglify({
                    mangle: {
                        toplevel: true
                    }
                })
            ]
        }, {
            file: './taroDemo/src/sdk/AnalysysAgent_ByteDance_SDK.min.js',
            format: 'cjs',
            name: 'Ans',
            plugins: [
                uglify({
                    mangle: {
                        toplevel: true
                    }
                })
            ]
        }, {
            file: './taroDemo/src/sdk/AnalysysAgent_ByteDance_SDK.es6.min.js',
            format: 'esm',
            name: 'Ans',
            plugins: [
                terser({
                    mangle: {
                        toplevel: true
                    }
                })
            ]
        }, {
            file: './SDK/AnalysysAgent_ByteDance_SDK.min.js',
            format: 'cjs',
            name: 'Ans',
            plugins: [
                uglify({
                    mangle: {
                        toplevel: true
                    }
                })
            ]
        }, {
            file: './SDK/AnalysysAgent_ByteDance_SDK.es6.min.js',
            format: 'esm',
            name: 'Ans',
            plugins: [
                terser({
                    mangle: {
                        toplevel: true
                    }
                })
            ]
        }
    ],
    plugins: [
        changePath(),
        replace({
            $ans: 'tt',
            delimiters: ['', '']
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        eslint({
            exclude: [
                'src/**'
            ]
        }),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    sourceMap: true

}, {
    input: './src/main_custom.js',
    output: [
        {
            file: './Demo/util/sdk/AnalysysAgent_ByteDance_SDK.custom.min.js',
            format: 'cjs',
            name: 'Ans',
            plugins: [
                uglify({
                    mangle: {
                        toplevel: true
                    }
                })
            ]
        }, {
            file: './taroDemo/src/sdk/AnalysysAgent_ByteDance_SDK.custom.min.js',
            format: 'cjs',
            name: 'Ans',
            plugins: [
                uglify({
                    mangle: {
                        toplevel: true
                    }
                })
            ]
        }, {
            file: './taroDemo/src/sdk/AnalysysAgent_ByteDance_SDK.custom.es6.min.js',
            format: 'esm',
            name: 'Ans',
            plugins: [
                terser({
                    mangle: {
                        toplevel: true
                    }
                })
            ]
        }, {
            file: './SDK/AnalysysAgent_ByteDance_SDK.custom.min.js',
            format: 'cjs',
            name: 'Ans',
            plugins: [
                uglify({
                    mangle: {
                        toplevel: true
                    }
                })
            ]
        }, {
            file: './SDK/AnalysysAgent_ByteDance_SDK.custom.es6.min.js',
            format: 'esm',
            name: 'Ans',
            plugins: [
                terser({
                    mangle: {
                        toplevel: true
                    }
                })
            ]
        }
    ],
    plugins: [
        changePath(),
        replace({
            $ans: 'tt',
            delimiters: ['', '']
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        eslint({
            exclude: [
                'src/**'
            ]
        }),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    sourceMap: true
}]
