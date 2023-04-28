import fs from 'fs';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import uglifycss from 'uglifycss';
import tailwindcss from 'tailwindcss';

const tailwindSettings = {

    // purge --------
    content: [
        './src/main/**/*.tsx',
        './src/main/**/*.ts',
    ],
    theme: {

        // https://tailwindcss.com/docs/font-family
        /*fontFamily: {
            roboto: '"Roboto",system-ui,-apple-system,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
        },*/
    },
    variants: {
        extend: {},
    },

    darkMode: 'class',
};

const esbuildPostCssPlugin = {
    name: 'pcss',
    setup(build) {

        build.onLoad({ filter: /\.pcss$/ }, async (args) => {

            if(args.path.indexOf('/examples/example-1') !== -1){
                tailwindSettings.content = [
                    './src/main/**/*.ts',
                    './src/main/**/*.tsx',
                    './src/examples/example-1/**/*.html',
                    './src/examples/example-1/**/*.tsx',
                    './src/examples/example-1/**/*.ts',
                ];
            }

            const source = await fs.promises.readFile(args.path, 'utf8');

            const result = await postcss([
                tailwindcss(tailwindSettings),
                // cssnano({ preset: 'default' }),
                autoprefixer({
                    overrideBrowserslist: [
                        '>0.2%',
                        'not dead',
                        'not op_mini all',
                    ]
                })
            ]).process(source, {
                from: undefined,
            });

            result.warnings().forEach(function (warn) {
                console.warn(warn.toString());
            });

            const uglified = uglifycss.processString(result.css);
            // console.log(uglified);

            return {
                contents: uglified,
                loader: 'css',
            };
        })
    },
};

export default esbuildPostCssPlugin;