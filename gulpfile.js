const gulp = require('gulp');
const plug = require('gulp-load-plugins')();

const OPTS = {
  ghp : {

  }
}

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(plug.ghPages(OPTS.ghp));
});
