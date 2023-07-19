import { defineConfig } from 'father';

const importProps = {
  style: false,
  camel2DashComponentName: false,
  libraryDirectory: 'es',
};

export default defineConfig({
  platform: 'browser',
  esm: {
    output: 'es',
  },
});
