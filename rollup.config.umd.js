// Rollup plugins
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import dependencies from './dependencies'

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

export default {
  input: {
    index: 'src/index.js',
  },
  output: {
    dir: 'umd',
    format: 'umd',
    sourcemap: true,
    entryFileNames: 'player.js',
    exports: 'named',
    name: 'LMPlayer',
    globals: {
      ['prop-types']: 'PropTypes',
      ['react']: 'React',
      ['react-dom']: 'ReactDOM',
      ['flv.zv.js']: 'flvjs',
      ['hls.js']: 'Hls',
    },
  },
  plugins: [
    postcss({
      // modules: true, // 增加 css-module 功能
      extensions: ['.less', '.css'],
      use: [
        [
          'less',
          {
            javascriptEnabled: true,
          },
        ],
      ],
      inject: true,
      extract: true,
    }),
    resolve(),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        lodash: ['replace', 'escapeRegExp', 'cloneDeep', 'debounce', 'isEmpty', 'intersectionBy', 'difference', 'uniq'],
        namedExports: { react: ['createElement', 'Component'] },
      },
    }),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),

    // process.env.NODE_ENV === 'production' && uglify({ ecma: 8 }) //压缩仅支持es5
  ],
  external: (id) => Object.keys(dependencies).some((e) => id.indexOf(e) === 0),
}
