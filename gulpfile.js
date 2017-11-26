var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var image = require('gulp-image');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('js', function (cb) {
  pump([
        gulp.src
        ([
          'node_modules/jquery/dist/jquery.js',
          'node_modules/bootstrap/dist/js/bootstrap.js',
          'node_modules/slick-carousel/slick/slick.js',
          'node_modules/swipebox/src/js/jquery.swipebox.js',
          'node_modules/vanilla-lazyload/dist/lazyload.min.js',
          'node_modules/parsleyjs/dist/parsley.min.js',
          'node_modules/slideout/dist/slideout.min.js',
          'src/custom.js'
        ]),
        concat('bundle.min.js'),
        uglify(),
        gulp.dest('assets/js')
    ],
    cb
  );
});

gulp.task('js-player', function () {
  return gulp.src
    ([
      'node_modules/wavesurfer.js/dist/wavesurfer.min.js',
      'src/player.js'
    ])
		.pipe(concat('player.min.js'))
    .pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});

gulp.task('js-search', function () {
  return gulp.src
    ([
      'node_modules/lunr/lunr.min.js',
      'src/search.js'
    ])
		.pipe(concat('search.min.js'))
    .pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});

gulp.task('files', function () {
    gulp.src('src/videos/*')
        .pipe(gulp.dest('assets/videos/'));
    gulp.src('src/files/**/*')
        .pipe(gulp.dest('assets/files/'));
    gulp.src('src/sounds/*')
        .pipe(gulp.dest('assets/sounds/'));
    gulp.src('src/upload/*')
        .pipe(gulp.dest('assets/upload/'));
    gulp.src('src/runtime.js')
        .pipe(gulp.dest('assets/js/'));
    gulp.src('node_modules/video.js/dist/video-js.min.css')
        .pipe(gulp.dest('assets/css/'));
    gulp.src('node_modules/video.js/dist/video.min.js')
        .pipe(gulp.dest('assets/js/'));
    gulp.src('node_modules/vue/dist/vue.min.js')
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('css', function () {
	return gulp.src
    ([
      'node_modules/bootstrap/dist/css/bootstrap.css',
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/swipebox/src/css/swipebox.css',
      'src/slideout.css',
      'src/custom.css'
    ])
    .pipe(concat('custom.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('images', function () {
  gulp.src('src/images/**/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('assets/images'));
  gulp.src('src/icon/**/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('assets/icon'));
});

gulp.task('watch', function () {
   gulp.watch('src/*.css', ['css']);
   gulp.watch('src/*.js', ['js']);
   gulp.watch('src/*.js', ['js-player']);
  gulp.watch('src/*.js', ['js-search']);
});

gulp.task('default', ['js', 'js-player', 'js-search', 'css', 'files']);
