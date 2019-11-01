/*
    rollup 配置文件
*/
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";
import clear from "rollup-plugin-clear";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
const external = Object.keys(pkg.dependencies);
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const rollupConfig = {
  input: "src/index.js",
  output: {
    dir: "umd",
    format: "umd",
    name:"LMPlayer",
    sourceMap: true,
    entryFileNames: "player.min.js",
    exports: "named"
  },
  experimentalCodeSplitting: true,
  plugins: [
    resolve(),
    babel({ runtimeHelpers: true,exclude:"node_modules/**" }),
    clear({
      targets: ["umd"]
    }),
    postcss({
      // modules: true, // 增加 css-module 功能
      extensions: [".less", ".css"],
      use: [
        [
          "less",
          {
            javascriptEnabled: true
          }
        ]
      ],
      inject: false, // dev 环境下的 样式是入住到 js 中的，其他环境不会注入
      extract: true // 无论是 dev 还是其他环境这个配置项都不做 样式的抽离
    }),
    uglify()
  ],
  // 将模块视为外部模块，不会打包在库中
  external: id => external.some(e => id.indexOf(e) === 0)
};

export default rollupConfig;
