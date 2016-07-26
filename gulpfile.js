var source_folder = 'src';
var production_folder = 'dist';
var build_folder = 'build';
var index_file = 'index.html';

// Files
var SRC_INDEX = source_folder + '/' + index_file;
var DIST_INDEX_NAME = index_file;
var DIST_JS_DEPENDENCIES = 'dependencies.js';
var DIST_CSS_DEPENDENCIES = 'dependencies.css';
// Folders
var DIST_DIR = production_folder;
var DIST_DEPENDENCIES = DIST_DIR + '/dependencies';
var DIST_SCRIPTS = DIST_DIR + '/scripts';
var DIST_TEMPLATES = DIST_DIR + '/templates';
var DIST_STYLESHEETS = DIST_DIR + '/stylesheets';
var DIST_FONTS = DIST_DEPENDENCIES;
var DIST_ANGULAR = DIST_DEPENDENCIES + '/angular';
var DIST_RXJS = DIST_DEPENDENCIES + '/rxjs';
var DIST_WEBAPI = DIST_DEPENDENCIES + '/webapi';

/** Dependencies */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var uglifyCss = require('gulp-uglifycss');
var htmlMin = require('gulp-htmlmin');
/** End Dependencies */

var templates = source_folder + '/templates/**/*.html';
var scripts = build_folder + '/scripts/**/*.js';
var stylesheets = source_folder + '/stylesheets/*.css';

var angular = 'node_modules/@angular/**/*';
var webapi = 'node_modules/angular2-in-memory-web-api/**/*';
var rxjs = 'node_modules/rxjs/**/*';

var scripts_concat = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
]

var scripts_dependencies = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/core-js/client/shim.min.js.map',
    'node_modules/zone.js/dist/zone.min.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/reflect-metadata/Reflect.js.map',
    'node_modules/systemjs/dist/system.js.map',
    source_folder + '/systemjs.config.js'
];

var css_dependencies = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
];

var font_dependencies = [
    'node_modules/bootstrap/dist/fonts/*.svg'
];

var inject_files = [
    DIST_DEPENDENCIES + '/shim.min.js',
    DIST_DEPENDENCIES + '/zone.min.js',
    DIST_DEPENDENCIES + '/Reflect.js',
    DIST_DEPENDENCIES + '/system.js',
    DIST_DEPENDENCIES + '/systemjs.config.js',
    DIST_DEPENDENCIES + DIST_JS_DEPENDENCIES,
    DIST_DEPENDENCIES + DIST_CSS_DEPENDENCIES
];

function concatDependencies() {
    return gulp.src(scripts_concat)
        .pipe(concat(DIST_JS_DEPENDENCIES))
        .pipe(gulp.dest(DIST_DEPENDENCIES));
}

function copyFont() {
    return gulp.src(font_dependencies)
        .pipe(gulp.dest(DIST_FONTS));
}

function uglifyDistJs() {
    return gulp.src(scripts)
        .pipe(uglify())
        .pipe(gulp.dest(DIST_SCRIPTS));
}

function uglifyDistCss() {
    return gulp.src(stylesheets)
        .pipe(uglifyCss())
        .pipe(gulp.dest(DIST_STYLESHEETS));
}

function minifyTemplates() {
    return gulp.src(templates)
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest(DIST_TEMPLATES))
}

function copyDependencies() {
    return gulp.src(scripts_dependencies)
        .pipe(gulp.dest(DIST_DEPENDENCIES));
}

function buildIndex() {
    var sources = gulp.src(inject_files, {read: false});
    return gulp.src(SRC_INDEX)
        .pipe(inject(sources, {ignorePath: 'dist', addRootSlash: false}))
        .pipe(gulp.dest(DIST_DIR));
}

function copyAngular() {
    return gulp.src(angular)
        .pipe(gulp.dest(DIST_ANGULAR));
}

function copyRxjs() {
    return gulp.src(rxjs)
        .pipe(gulp.dest(DIST_RXJS))
}

function copyWebapi() {
    return gulp.src(webapi)
        .pipe(gulp.dest(DIST_WEBAPI))
}

gulp.task('concatDependencies', concatDependencies);
gulp.task('copyFont', copyFont);
gulp.task('uglifyDistJs', uglifyDistJs);
gulp.task('uglifyDistCss', uglifyDistCss);
gulp.task('minifyTemplates', minifyTemplates);
gulp.task('copyDependencies', copyDependencies);
gulp.task('buildIndex', ['concatDependencies', 'copyDependencies', 'uglifyDistCss'], buildIndex);
gulp.task('copyAngular', copyAngular);
gulp.task('copyRxjs', copyRxjs);
gulp.task('copyWebapi', copyWebapi);
gulp.task('build-full', [
    'concatDependencies',
    'copyFont',
    'uglifyDistJs',
    'uglifyDistCss',
    'minifyTemplates',
    'copyDependencies',
    'buildIndex',
    'copyAngular',
    'copyRxjs',
    'copyWebapi'
]);
gulp.task('build-quick', [
    'concatDependencies',
    'copyFont',
    'uglifyDistJs',
    'uglifyDistCss',
    'minifyTemplates',
    'copyDependencies',
    'buildIndex',
]);
gulp.task('build', [
    'build-quick'
]);