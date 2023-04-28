import fs from 'fs';
import path from 'path';

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
    minify: true,
    target: ['es6'],
    // outfile: './dist/darkly.min.js',
    banner: {
        js: `/* 
SVG Stripes Maker
Version: ${version}
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/stripes-maker-react
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/`,
    },
};