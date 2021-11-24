const esbuild = require('esbuild');
const dist = process.argv?.[2] ?? false;
const watch = process.argv?.[2] === 'watch';

const defaultConfig = {
    logLevel: 'info',
    bundle: true,
};
let configs = [
    {
        ...defaultConfig,
        entryPoints: ['./entrypoints/chs.js'],
        outfile: './dist/chs.mjs',
        format: 'esm',
        watch,
    },
    {
        ...defaultConfig,
        entryPoints: ['./entrypoints/windowBinder.js'],
        outfile: './dist/chs.iife.js',
        format: 'iife',
        globalName: 'CHSJS',
        watch,
    },
];

if (dist) {
    configs = configs.concat([
        {
            ...defaultConfig,
            entryPoints: ['./entrypoints/chs.js'],
            outfile: './dist/chs.min.mjs',
            format: 'esm',
            minify: true,
        },
        {
            ...defaultConfig,
            entryPoints: ['./entrypoints/windowBinder.js'],
            outfile: './dist/chs.iife.min.js',
            format: 'iife',
            globalName: 'CHSJS',
            minify: true,
        },
    ]);
}

configs.forEach(esbuild.build);
