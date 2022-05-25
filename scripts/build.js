const { build } = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/index.js',
  plugins: [nodeExternalsPlugin()],
  external: ['esbuild'],
});

build({
  entryPoints: ['src/browser.ts'],
  bundle: true,
  platform: 'node',
  minify: true,
  format: 'esm',
  outfile: 'dist/browser.js',
});
