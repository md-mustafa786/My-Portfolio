const { build } = require('vite');
const react = require('@vitejs/plugin-react');
const { defineConfig } = require('vite');

const config = defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});

build(config).catch((err) => {
  console.error(err);
  process.exit(1);
});

