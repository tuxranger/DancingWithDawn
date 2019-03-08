var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function (done) {
	gulp.src(['ng/module.js', 'ng/**/*.js'])
	 .pipe(sourcemaps.init())
	  .pipe(concat('app.js'))
	  .pipe(ngAnnotate())
	  .pipe(uglify())
	 .pipe(sourcemaps.write())
	 .pipe(gulp.dest('assets'))

	 done();
})

gulp.task('watch:js', function(){
    gulp.watch('ng/**/*.js', gulp.parallel('js'))
});