/*
    rollup 配置文件
*/
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import dependencies from './dependencies'

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

const rollupConfig = {
  input: {
    index: 'src/index.js',
  },
  output: {
    dir: 'es',
    format: 'es',
    sourcemap: true,
    entryFileNames: 'player.js',
    exports: 'named',
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
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    resolve({ module: true, jsnext: true, main: true, browser: true, extensions: ['.js'] }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        lodash: ['replace', 'escapeRegExp', 'cloneDeep', 'debounce', 'isEmpty', 'intersectionBy', 'difference', 'uniq'],
      },
    }),
  ],
  // 将模块视为外部模块，不会打包在库中
  external: (id) => Object.keys(dependencies).some((e) => id.indexOf(e) === 0),
}

export default rollupConfig
