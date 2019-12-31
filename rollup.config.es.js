/*
    rollup 配置文件
*/
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import image from 'rollup-plugin-image'

// PostCSS plugins
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

const rollupConfig = {
  input: {
    index: 'src/index.js'
  },
  output: {
    dir: 'es',
    format: 'es',
    sourceMap: true,
    entryFileNames: 'player.js',
    exports: 'named'
  },
  plugins: [
    image(),
    postcss({
      plugins: [simplevars(), nested(), cssnext({ warnForDuplicates: false }), cssnano()],
      extensions: ['.less', '.css'],
      use: [
        [
          'less',
          {
            javascriptEnabled: true
          }
        ]
      ],
      inject: false, // dev 环境下的 样式是入住到 js 中的，其他环境不会注入
      extract: true // 无论是 dev 还是其他环境这个配置项都不做 样式的抽离
    }),
    resolve(),
    commonjs({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**' })
  ],
  // 将模块视为外部模块，不会打包在库中
  external: id => Object.keys(pkg.dependencies).some(e => id.indexOf(e) === 0)
}

export default rollupConfig
