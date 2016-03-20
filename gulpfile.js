
'use strict';
   // this is strict...

var gulp            = require('gulp'),
    notify          = require('gulp-notify'),
    // CSS plugins
    rucksack        = require('gulp-rucksack'),
    sass            = require('gulp-sass');

// import the variables for the tasks and files, etc

var TASKS           = require('./gulp-helpers/tasks'),
    FILES           = require('./gulp-helpers/files');

// deveolpment style tasks
// --------------------------------------------------------
gulp.task(TASKS.dev.style, () => {
  return gulp.src(FILES.css.source)
    .pipe( sass().on('error' , function(err) {
      notify({title: 'CSS Task'}).write(err.line  + ': ' + err.message);
      return this.emit('end')
    } ))
    .pipe( rucksack({autoprefixer: true, fallbacks: false }) )
    .pipe( gulp.dest(FILES.css.dest) );
});

gulp.task(TASKS.watch, () => {
    gulp.watch( FILES.css.all , [TASKS.dev.style]);
});

// default
// --------------------------------------------------------
gulp.task(TASKS.default, [TASKS.dev.style, TASKS.watch] );
