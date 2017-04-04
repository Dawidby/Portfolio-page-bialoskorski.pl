var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps'); //załadowanie wtyczki do map źródłowych
var gplumber = require('gulp-plumber');  // nie zatrzymuje błędów w scss-ie
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function () {
    return gulp.src('style.css')
        .pipe(uncss({
            html: ['index.html', 'posts/**/*.html', 'http://example.com']
        }))
        .pipe(gulp.dest('css/override.css'));
});


var errorHandler = function (){             // wyśweitl błąd w konsoli
    return gplumber(function(error){
        console.log(error.message);
    })
};
var autoprefixerOptions = {
    browsers: ['last 10 versions', '> 1%', 'Firefox ESR']
};

gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
        .pipe(errorHandler())

        .pipe(sourcemaps.init())                    //inizjalizacja
        .pipe(sass.sync({outputStyle: 'expanded'}))
        .pipe(sourcemaps.write())                   //zapis mapy źródowej
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())

});

gulp.task('watch', function(){
    return gulp.watch('scss/**/*.scss', ['sass']),
        browserSync.init({                          // live web
            server: {
                baseDir: "./"
            }
        });
    browserSync.init({
        proxy: "./"
    });
});

gulp.task('default', ['sass', 'watch']); // fajny task ;)