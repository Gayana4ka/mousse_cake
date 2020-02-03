var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');


gulp.task('browser-sync', async function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
        open: true

    })
});


gulp.task('sass', async function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});


gulp.task('code', async function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true}))

});


gulp.task('watch', async function () {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('code'));
});


gulp.task('default', gulp.parallel('watch', 'sass', 'browser-sync'));
