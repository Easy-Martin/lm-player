const rollup = require('rollup');
const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const typescript = require('rollup-plugin-typescript');

const args = process.argv.slice(2);

const params = {};
args
  .filter(name => /^--/.test(name))
  .map(name => {
    let arr = name.split('=');
    params[arr[0].replace('--', '')] = arr[1] || true;
  });



const commonjsArgs = {
  include: 'node_modules/**',
  // needed for react-is via react-redux v5.1
  // https://stackoverflow.com/questions/50080893/rollup-error-isvalidelementtype-is-not-exported-by-node-modules-react-is-inde/50098540
  namedExports: {
    'node_modules/react-is/index.js': ['isValidElementType']
  }
};

const external = [
  { 'react': 'React' },
  { 'flv.js': 'flvjs' },
  { 'hls.js': 'Hls' }
];

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';


function getInputOptions(input) {
  let plugins = [
    resolve(),
    typescript(),
    commonjs(commonjsArgs),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ];
  return {
    input,
    external,
    plugins
  };
}
const formats = ['amd', 'cjs', 'es', 'iife', 'umd'];
const format = formats.indexOf(params.format) > -1 ? params.format : 'umd'

function getOutputOptions(output, name) {

  return {
    file: output,
    format,
    name,
    sourcemap: params.sourcemap !== false
  };
}

async function build() {
  const bundle = await rollup.rollup(getInputOptions(path.resolve(process.cwd(), './src/player.ts')));
  await bundle.write(getOutputOptions(path.resolve(process.cwd(), `./libs/player.${format}.js`), 'YMPlayer'));
  // create a bundle

  // or write the bundle to disk
}

build();
