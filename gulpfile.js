var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function () {
    return gulp.src('**/*.es6')
        .pipe( babel() )
        .pipe( gulp.dest('') );
});

gulp.task('watch', function() {
	gulp.watch( '**/*.es6', ['default'] );
});