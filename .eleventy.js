const prettier = require('prettier');

module.exports = eleventyConfig => {
    eleventyConfig.addTransform('prettier', (content, outputPath) => {
        return prettier.resolveConfig(outputPath).then(options => {
            return prettier.format(content, {
                ...options,
            });
        });
    });
    eleventyConfig.addPassthroughCopy('site/assets');
    eleventyConfig.addPassthroughCopy('site/docs');
    eleventyConfig.addWatchTarget('site/examples/');

    return {
        pathPrefix: process.env.GITHUB_ACTION ? '/chs-js-lib/' : '',
        dir: {
            input: 'site',
            output: '_site',
        },
    };
};
