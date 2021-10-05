const gulp = require('gulp');
const rename = require('gulp-rename');
const size = require('gulp-size');
const terser = require('gulp-terser');
const rollup = require('@rollup/stream');
const source = require('vinyl-source-stream');
const jsdoc = require('gulp-jsdoc3');

function buildModule() {
    return rollup({
        input: './entrypoints/chs.js',
        output: {
            format: 'es',
            strict: false,
        },
    })
        .pipe(source('chs.mjs'))
        .pipe(gulp.dest('dist'));
}

function buildCommonJS() {
    return rollup({
        input: './entrypoints/chs.js',
        output: {
            format: 'cjs',
            strict: false,
        },
    })
        .pipe(source('chs.cjs'))
        .pipe(gulp.dest('dist'));
}

function buildIIFE() {
    return rollup({
        input: './entrypoints/windowBinder.js',
        output: {
            format: 'iife',
            name: 'CHSJS',
            strict: false,
        },
    })
        .pipe(source('chs.iife.js'))
        .pipe(gulp.dest('dist'));
}

function distModule() {
    return gulp
        .src('dist/chs.mjs')
        .pipe(terser())
        .pipe(rename('chs.min.mjs'))
        .pipe(
            size({
                showFiles: true,
            })
        )
        .pipe(
            size({
                showFiles: true,
                gzip: true,
            })
        )
        .pipe(gulp.dest('dist'));
}
function distIIFE() {
    return gulp
        .src('dist/chs.iife.js')
        .pipe(terser())
        .pipe(rename('chs.iife.min.js'))
        .pipe(
            size({
                showFiles: true,
            })
        )
        .pipe(
            size({
                showFiles: true,
                gzip: true,
            })
        )
        .pipe(gulp.dest('dist'));
}

gulp.task('build', gulp.series(buildCommonJS, buildModule, buildIIFE));

gulp.task('docs', () => {
    return gulp.src('src/**/*.js').pipe(
        jsdoc({
            opts: {
                template: 'node_modules/docdash',
                destination: 'docs/gen',
            },
        })
    );
});

gulp.task('dist', gulp.series('build', distModule, distIIFE));

gulp.task('watch', function () {
    gulp.watch('src/*.js', gulp.series('build', 'dist'));
});

gulp.task('default', gulp.series('build', 'watch'));
