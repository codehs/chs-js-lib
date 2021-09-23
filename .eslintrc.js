module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        es6: true,
        commonjs: true,
        browser: true,
    },
    extends: ['eslint:recommended'],
    globals: {},
    rules: {
        'no-console': false,
    },
};
