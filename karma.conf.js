// Karma configuration
// Generated on Thu Sep 23 2021 11:54:30 GMT-0700 (Pacific Daylight Time)

module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            { pattern: 'src/*.js', type: 'module', included: false },
            // { pattern: 'test/setup.js', type: 'module' },
            // { pattern: 'src/*.js', type: 'module', included: false, watched: true },
            // { pattern: 'test/*.test.js', type: 'module' },
            // setup
            { pattern: 'test/setup.js', type: 'module' },

            // // assets
            // { pattern: 'test/imgs/*.*', included: false, served: true },
            // { pattern: 'test/audio/*.*', included: false, served: true },
            // { pattern: 'test/data/*.*', included: false, served: true },
            { pattern: 'test/*.test.js', type: 'module' },
            // { pattern: 'test/integration/*.spec.js', type: 'module' },
        ],

        // list of files / patterns to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
        preprocessors: {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
        reporters: ['mocha'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
        browsers: ['ChromeHeadless'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser instances should be started simultaneously
        concurrency: Infinity,
    });
};
