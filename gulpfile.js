var browserify = require('browserify');
var gulpBrowserify = require('gulp-browserify');
var watchify = require('watchify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var nib = require('nib');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var sourceFile = './js/app.js';
var destFolder = './js/';
var destFile = 'main.min.js';

var dirPath = './blocks';

gulp.task('css', function() {
    gulp.src([
            dirPath + '/main.styl',
            dirPath + '/bpl-main.styl',
            dirPath + '/bpl-normalize.styl',
            dirPath + '/**/*.styl']
    )
        .pipe(concat('main.styl'))
        .pipe(stylus({use: [nib()], compress: true}))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest(dirPath));
});

gulp.task('js', function() {
    gulp.src(sourceFile)
        .pipe(gulpBrowserify())
        .pipe(uglify())
        .pipe(rename(destFile))
        .pipe(gulp.dest(destFolder))
});

gulp.task('watch', function() {
    watch(dirPath + '/**/*.styl', function() {
        return gulp.src([
            dirPath + '/main.styl',
            dirPath + '/bpl-main.styl',
            dirPath + '/bpl-normalize.styl',
            dirPath + '/**/*.styl'])
            .pipe(concat('main.styl'))
            .pipe(stylus({use: [nib()]}))
            .pipe(rename('main.min.css'))
            .pipe(gulp.dest(dirPath));
    });
});

gulp.task('default', ['build']);
gulp.task('build', ['css']);

gulp.task('default', ['watch']);