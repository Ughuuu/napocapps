import gulp from 'gulp';
import uglify from 'gulp-uglify';
import {path, tasks} from './const';
var babel  = require('gulp-babel');
var plumber = require('gulp-plumber');

const JS = path.DIST + '**/*.js';

gulp.task(tasks.CLIENT_JS_DIST, () => {
  return gulp.src(JS, {base: path.DIST})    
             .pipe(plumber())
             .pipe(babel({presets: ['es2015']}))
             .pipe(uglify())
             .pipe(gulp.dest(path.DIST));
});
