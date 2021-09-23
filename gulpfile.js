const gulp = require('gulp');
const rename = require('gulp-rename');
const size = require('gulp-size');
const terser = require('gulp-terser');
const rollup = require('@rollup/stream');
const source = require('vinyl-source-stream');

function buildIife() {
    return rollup({
        input: './entrypoints/chsjs.default.js',
        output: {
            format: 'iife',
            name: 'chsjs',
            strict: false,
        },
    })
        .pipe(source('chs.js'))
        .pipe(gulp.dest('.'));
}

function buildWindowBoundIife() {
    return rollup({
        input: './entrypoints/windowattacher.js',
        output: {
            format: 'iife',
            name: 'chsjs',
            strict: false,
        },
    })
        .pipe(source('windowchs.js'))
        .pipe(gulp.dest('.'));
}

function buildModule() {
    return rollup({
        input: './entrypoints/chs.js',
        output: {
            format: 'es',
            strict: false,
        },
    })
        .pipe(source('chs.mjs'))
        .pipe(gulp.dest('.'));
}

function distIife() {
    return gulp
        .src('chs.js')
        .pipe(terser())
        .pipe(rename('chsjs.min.js'))
        .pipe(
            size({
                showFiles: true,
            }),
        )
        .pipe(
            size({
                showFiles: true,
                gzip: true,
            }),
        )
        .pipe(gulp.dest('.'));
}

function distModule() {
    return gulp
        .src('chs.mjs')
        .pipe(terser())
        .pipe(rename('chs.min.mjs'))
        .pipe(
            size({
                showFiles: true,
            }),
        )
        .pipe(
            size({
                showFiles: true,
                gzip: true,
            }),
        )
        .pipe(gulp.dest('.'));
}

gulp.task('build', gulp.series(buildIife, buildModule, buildWindowBoundIife));

gulp.task('dist', gulp.series('build', distIife, distModule));

gulp.task('watch', function () {
    gulp.watch('src/*.js', gulp.series('build', 'dist'));
});

gulp.task('default', gulp.series('build', 'watch'));
