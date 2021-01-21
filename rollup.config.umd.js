// Rollup plugins
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import image from 'rollup-plugin-image'
// import { uglify } from 'rollup-plugin-uglify'

// PostCSS plugins
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

export default {
  input: {
    index: 'src/index.js'
  },
  output: {
    dir: 'umd',
    format: 'umd',
    sourceMap: true,
    entryFileNames: 'player.js',
    exports: 'named',
    name: 'LMPlayer',
    globals: {
      ['prop-types']: 'PropTypes',
      ['react']: 'React',
      ['react-dom']: 'ReactDOM',
      ['flv.zv.js']: 'flvjs',
      ['hls.js']: 'Hls'
    }
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
    babel({ exclude: 'node_modules/**' }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    })
    // process.env.NODE_ENV === 'production' && uglify({ ecma: 8 }) //压缩仅支持es5
  ],
  external: id => Object.keys(pkg.dependencies).some(e => id.indexOf(e) === 0)
}
