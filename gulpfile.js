var gulp = require('gulp')
var fs = require('fs')
var js = require('./gulp/scripts.js')

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
	require('./gulp/' + task)
})

gulp.task('dev', gulp.parallel('watch:js', 'watch:css', 'dev:server'))

gulp.task('build', gulp.series('js', 'css'))