const prettier = require('prettier');

// this file configures how eleventy should behave when run with CLI
module.exports = eleventyConfig => {
    // this adds a transform that will automatically run prettier on the HTML files that eleventy
    // generates. resolveConfig will find the .prettierrc.json, then prettier will format it
    eleventyConfig.addTransform('prettier', (content, outputPath) => {
        return prettier.resolveConfig(outputPath).then(options => {
            return prettier.format(content, {
                ...options,
            });
        });
    });
    // these passthroughcopy configurations will directly copy the files from the site/ folder
    // to the output _site folder. assets/ is the css and javascript that should run on the static
    // site, and docs/ is the auto-generated documentation that JSDoc makes and copies in
    // (run `npm run docs` to generate it)
    eleventyConfig.addPassthroughCopy('site/assets');
    eleventyConfig.addPassthroughCopy('site/docs');
    // this makes sure that any changes to the javascript files in the examples/ directory
    // will trigger a re-build
    eleventyConfig.addWatchTarget('site/examples/');

    return {
        // when distributed on github, all URLs need to be prefixed with /chs-js-lib/. this
        // environment variable is set in the GitHub action workflow `pages-build-and-publish`
        pathPrefix: process.env.GITHUB_ACTION ? '/chs-js-lib/' : '/_site/',
        dir: {
            input: 'site',
            output: '_site',
        },
    };
};
