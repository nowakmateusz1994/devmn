const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
gulp.task('sass', async function () {
    gulp.src('src/sass/*.scss')
            .pipe(concat('style.css'))
            .pipe(sass().on('error', sass.logError))
            .pipe(minifyCSS())
            .pipe(gulp.dest('css/'))
})
gulp.task('minify', async function () {
    gulp.src('src/js/references.js')
            .pipe(uglify())
            .pipe(gulp.dest('js'))
    gulp.src('src/js/menu.js')
            .pipe(uglify())
            .pipe(gulp.dest('js'))
    gulp.src('src/js/slick-slider.js')
            .pipe(uglify())
            .pipe(gulp.dest('js'))
    gulp.src('src/js/animate.js')
            .pipe(uglify())
            .pipe(gulp.dest('js'))
})
gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: "localhost/devmn",
        notify: false,
        ghostMode: {
            scroll: false,
            clicks: false
        }
    });
    gulp.watch('src/sass/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('src/sass/*/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('src/js/references.js', gulp.series('minify')).on('change', browserSync.reload);
    gulp.watch('src/js/menu.js', gulp.series('minify')).on('change', browserSync.reload);
    gulp.watch('src/js/slick-slider.js', gulp.series('minify')).on('change', browserSync.reload);
    gulp.watch('src/js/counter.js', gulp.series('minify')).on('change', browserSync.reload);
    gulp.watch('src/js/animate.js', gulp.series('minify')).on('change', browserSync.reload);
})