import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default [{
    input: './src/configure/base/encrypt.js',
    output: [
        {
            file: './Demo/util/sdk/AnalysysAgent_encryption.min.js',
            format: 'cjs',
            name: 'Ans',
            plugins: [uglify({
                'mangle': {
                    toplevel: true
                }
            })]
        }, {
            file: './taroDemo/src/sdk/AnalysysAgent_encryption.min.js',
            format: 'cjs',
            name: 'Ans',
            plugins: [uglify({
                'mangle': {
                    toplevel: true
                }
            })]
        }, {
            file: './SDK/AnalysysAgent_encryption.min.js',
            format: 'cjs',
            name: 'Ans',
            plugins: [uglify({
                'mangle': {
                    toplevel: true
                }
            })]
        }, {
            file: './SDK/AnalysysAgent_encryption.es6.min.js',
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
        resolve({
            jsnext: true,
            main: true,
            browser: true,
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
    ]
}]