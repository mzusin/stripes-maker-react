import esbuild from 'esbuild';
import { settings } from './settings.js';
import esbuildWatchPlugin from '../esbuild-plugins/esbuild-watch-plugin.js';
import path from 'path';

/**
 * Build js/css.
 */
const buildAssets = () => {

    // empty assets folder
    const assetsPath =  path.join(process.cwd(), './website/assets');
    console.log(assetsPath);

    const args = process.argv.slice(2);
    const watch = args.length > 1 && args[1].trim().toLowerCase() === 'watch';

    settings.outfile = './website/assets/website.min.js';

    if(watch){
        // ------------- watch ---------------
        (async () => {
            settings.plugins.push(esbuildWatchPlugin);
            const ctx = await esbuild.context(settings);
            await ctx.watch();
            console.log('Watching...');
        })();
    }
    else{
        esbuild
            .build(settings)
            .then(result => {
                console.log('Done.');
            })
            .catch(() => process.exit(1));

    }
};

/**
 * Entry point.
 */
const init = () => {
    buildAssets();
};

init();
