import fs from 'fs';
import path from 'path';
import postCssPlugin from '../esbuild-plugins/esbuild-pcss-plugin.js';

const packageJson = fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8');
let version = '1.0.0';

try {
    const parsed = JSON.parse(packageJson);
    version = parsed.version;
} catch (ex) {}

export const settings = {
    entryPoints: ['./src/website/index.tsx'],
    format: 'esm',
    bundle: true,
    sourcemap: 'linked', // external
    define: { 'process.env.NODE_ENV': `'production'` }, // dev, production
    minify: true,
    target: ['es6'],
    plugins: [postCssPlugin],
    banner: {
        js: `/* 
SVG Stripes Maker v${ version }
https://github.com/mzusin/stripes-maker-react
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md    
Copyright (c) 2023-present, Miriam Zusin             
*/`,
    },
};