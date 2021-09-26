const gulp = require('gulp');
const rename = require('gulp-rename');
const size = require('gulp-size');
const terser = require('gulp-terser');
const rollup = require('@rollup/stream');
const source = require('vinyl-source-stream');

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

function buildIife() {
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

gulp.task('build', gulp.series(buildCommonJS, buildModule, buildIife));

gulp.task('dist', gulp.series('build', distModule));

gulp.task('watch', function () {
    gulp.watch('src/*.js', gulp.series('build', 'dist'));
});

gulp.task('default', gulp.series('build', 'watch'));
