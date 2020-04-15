var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var $             = require('gulp-load-plugins')();
var autoprefixer  = require('autoprefixer');

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

function sass() {
  return gulp.src('public/s/css/*.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] })
    ]))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
};

// function serve() {
//   browserSync.init({
//     server: "./"
//   });

//   gulp.watch("s/css/*.scss", sass);
//   gulp.watch("*.html").on('change', browserSync.reload);
// }
function serve() {
  browserSync.init({
    
  proxy: "localhost:5000" // makes a proxy for localhost:8080"
  });

  gulp.watch("public/s/css/*.scss", sass);
  gulp.watch("views/*.ejs").on('change', browserSync.reload);
  gulp.watch("views/partials/*.ejs").on('change', browserSync.reload);
  gulp.watch("public/js/*.js").on('change', browserSync.reload);
}

gulp.task('sass', sass);
gulp.task('serve', gulp.series('sass', serve));
gulp.task('default', gulp.series('sass', serve));
