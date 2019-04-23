const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const safePostCssParser = require("postcss-safe-parser");
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const lessRegex = /\.less$/;

const getStyleLoaders = (cssOptions, preProcessor, otherOptions) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: Object.assign({}, { publicPath: "../../" })
    },
    {
      loader: require.resolve("css-loader"),
      options: cssOptions
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve("postcss-loader"),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: "postcss",
        plugins: () => [
          require("postcss-flexbugs-fixes"),
          require("postcss-preset-env")({
            autoprefixer: {
              flexbox: "no-2009"
            },
            stage: 3
          })
        ]
      }
    }
  ];
  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: otherOptions
    });
  }
  return loaders;
};
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "LMPlayer.js",
    path: path.resolve(__dirname, "dist"),
    umdNamedDefine: true,
    libraryTarget: "umd",
    libraryExport: "default",
    library: "LMPlayer"
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        parallel: true,
        cache: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: {
            inline: false,
            annotation: true
          }
        }
      })
    ],
    splitChunks: {
      chunks: "async",
      name: false
    },
    runtimeChunk: false
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          customize: require.resolve(
            "babel-preset-react-app/webpack-overrides"
          ),
          plugins: [
            [
              require.resolve("babel-plugin-named-asset-import"),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: "@svgr/webpack?-prettier,-svgo![path]"
                  }
                }
              }
            ]
          ],
          cacheDirectory: true,
          cacheCompression: true,
          compact: true
        }
      },
      {
        test: lessRegex,
        use: getStyleLoaders(
          {
            importLoaders: 2,
            sourceMap: true
          },
          "less-loader",
          {
            javascriptEnabled: true
          }
        ),
        sideEffects: true
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "prop-types": "PropTypes",
    "flv.js": "flvjs",
    "hls.js": "Hls"
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "LMPlayer.css",
      chunkFilename: "LMPlayer.chunk.css"
    })
  ]
};
