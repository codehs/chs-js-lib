const esbuild = require('esbuild');
const dist = process.argv?.[2] ?? false;

const defaultConfig = {
    logLevel: 'info',
    bundle: true,
};
let configs = [
    {
        ...defaultConfig,
        entryPoints: ['./entrypoints/chs.js'],
        outfile: './dist/chs.mjs',
        format: 'cjs',
    },
    {
        ...defaultConfig,
        entryPoints: ['./entrypoints/windowBinder.js'],
        outfile: './dist/chs.iife.js',
        format: 'iife',
        globalName: 'CHSJS',
    },
];

if (dist) {
    configs = configs.concat([
        {
            ...defaultConfig,
            entryPoints: ['./entrypoints/chs.js'],
            outfile: './dist/chs.min.mjs',
            format: 'cjs',
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
