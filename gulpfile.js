var gulp = require('gulp');
var useref = require('gulp-useref');
var minifyCss = require('gulp-minify-css');
var gulpif = require('gulp-if');

gulp.task('copy-html-task', function() {
    var stream = gulp.src('./app/views/*.html')
        .pipe(gulp.dest('./dist/views/'));
    return stream;
});

gulp.task('css-files', function() {
    var stream = gulp.src('./app/views/index.html')
        .pipe(useref())
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulpif('*.css', gulp.dest('./dist')));
    return stream;
});