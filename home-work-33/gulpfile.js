const {src, dest, watch, task, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker')
const sortCSSmq = require('sort-css-media-queries')

const plugins = [
    cssnano({ preset: 'default' }),
    autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: true
    }),
    mqpacker({ sort: sortCSSmq })
]

const PATH = {
    scssSrc: 'src/styles/**/*.scss',
    cssDist: 'dist/styles',
    indexJsSrc: 'index.js',
    htmlSrc: './**/*.html',
}

function scss() {
    return src(PATH.scssSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(PATH.cssDist))
        .pipe(browserSync.stream());
}
function syncInit () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
}

async function sync() {
    browserSync.reload()
}

function watchFiles() {
    syncInit()

    watch(PATH.htmlSrc, sync)
    watch(PATH.indexJsSrc, sync);
    watch(PATH.scssSrc, scss)
}
task('watch', watchFiles);

