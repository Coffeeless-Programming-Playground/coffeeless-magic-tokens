import * as esbuild from 'esbuild';

await esbuild.build({ entryPoints: ['src/index.ts'], bundle: true, minify: true, platform: 'browser', target: 'es2022', outfile: 'dist/bundle.js', sourcemap: false, logLevel: 'info', });

console.log('React bundle minified successfully.');