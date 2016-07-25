var SCRIPT_NAME = 'app.js';
var CSS_NAME = 'app.css';
var DIST_DIR = './dist';
var DIST_DEPENDENCIES_DIR = DIST_DIR + '/dependencies';
var DIST_INDEX_NAME = 'index.html';
var DIST_JS_DEPENDENCIES = 'dependencies.js';
var DIST_CSS_DEPENDENCIES = 'dependencies.css';
var DIST_ANGULAR = DIST_DEPENDENCIES_DIR + '/angular';
var DIST_RXJS = DIST_DEPENDENCIES_DIR + '/rxjs';
var DIST_SYSTEM = DIST_DEPENDENCIES_DIR;

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var uglifyCss = require('gulp-uglifycss');
var htmlMin = require('gulp-htmlmin');
var copy = require('gulp-contrib-copy');
var embedTemplates = require('gulp-angular-embed-templates');

var src_index = 'src/index.html';

var templates = 'src/templates/**/*.html';

var scripts = 'build/scripts/**/*.js';

var css = 'src/css/*.css';

var angular = 'node_modules/@angular';

var rxjs = 'node_modules/rxjs';

var system = 'node_modules/systemjs/dist/system.js';

var script_dependencies = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.min.js',
    'node_modules/reflect-metadata/Reflect.js',
    'systemjs.config.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
];

var css_dependencies = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
];

var css_dependencies_maps = [
    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css.map',
    'node_modules/systemjs/dist/system.js.map',
    'node_modules/jquery/dist/jquery.min.map'
];

var font_dependencies = [
    'node_modules/bootstrap/dist/fonts/*.svg'
];

function concatDependencies() {
    gulp.src(script_dependencies)
        .pipe(concat(DIST_JS_DEPENDENCIES))
        .pipe(gulp.dest(DIST_DEPENDENCIES_DIR));

    return gulp.src(css_dependencies)
        .pipe(concat(DIST_CSS_DEPENDENCIES))
        .pipe(gulp.dest(DIST_DEPENDENCIES_DIR));
}

function copyIndex() {
    return gulp.src(src_index)
        .pipe(copy())
        .pipe(gulp.dest(DIST_DIR));
}

function copySystem() {
    return gulp.src(system)
        .pipe(copy())
        .pipe(gulp.dest(DIST_SYSTEM));
}

function copyMap() {
    return gulp.src(css_dependencies_maps)
        .pipe(copy())
        .pipe(gulp.dest(DIST_DEPENDENCIES_DIR));
}

function copyFont() {
    return gulp.src(font_dependencies)
        .pipe(copy())
        .pipe(gulp.dest(DIST_DEPENDENCIES_DIR));
}

function uglifyDistJs() {
    return gulp.src(scripts)
        .pipe(embedTemplates())
        .pipe(uglify())
        .pipe(gulp.dest(DIST_DIR));
}

function uglifyDistCss() {
    return gulp.src(css)
        .pipe(concat(CSS_NAME))
        .pipe(uglifyCss())
        .pipe(gulp.dest(DIST_DIR));
}

function buildIndex() {
    var sources = gulp.src([DIST_DIR + '/**/*.js', DIST_DIR + '/**/*.css', DIST_DIR + '/**/*.svg']);
    return copyIndex()
        .pipe(inject(sources, {ignorePath: 'dist', addRootSlash: false}))
        .pipe(gulp.dest(DIST_DIR));
}

function copyAngular() {
    return gulp.src(angular)
        .pipe(copy())
        .pipe(gulp.dest(DIST_ANGULAR));
}

function copyRxjs() {
    return gulp.src(rxjs)
        .pipe(copy())
        .pipe(gulp.dest(DIST_RXJS))
}

gulp.task('concatDependencies', concatDependencies);
gulp.task('copyIndex', copyIndex);
gulp.task('copySystem', copySystem);
gulp.task('copyMap', copyMap);
gulp.task('copyFont', copyFont);
gulp.task('uglifyDistJs', uglifyDistJs);
gulp.task('uglifyDistCss', uglifyDistCss);
gulp.task('buildIndex', buildIndex);
gulp.task('copyAngular', copyAngular);
gulp.task('copyRxjs', copyRxjs);
gulp.task('build', [
    'concatDependencies',
    'copySystem',
    'copyMap',
    'copyFont',
    'uglifyDistJs',
    'uglifyDistCss',
    'buildIndex',
    'copyAngular',
    'copyRxjs'
]);