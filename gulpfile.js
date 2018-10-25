var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
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

gulp.task('js-landing', function (cb) {
	pump([
				gulp.src
				([
					'node_modules/jquery/dist/jquery.js',
					'node_modules/bootstrap/dist/js/bootstrap.js',
					'node_modules/parsleyjs/dist/parsley.min.js',
					'src/custom-landing.js'
				]),
				concat('bundle-landing.min.js'),
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
			.pipe(imagemin([
				imagemin.jpegtran({progressive: true}),
				imagemin.optipng({optimizationLevel: 5})
			]))
			.pipe(gulp.dest('assets/images'));
	gulp.src('src/icon/**/*')
			.pipe(imagemin([
				imagemin.jpegtran({progressive: true}),
				imagemin.optipng({optimizationLevel: 5})
			]))
			.pipe(gulp.dest('assets/icon'));
});


gulp.task('files', function () {
		gulp.src('node_modules/bootstrap/fonts/*')
			.pipe(gulp.dest('assets/fonts/'));
		gulp.src('src/fonts/*')
				.pipe(gulp.dest('assets/fonts/'));
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

gulp.task('files-ext', function () {
  gulp.src('assets/icon/**/*')
      .pipe(gulp.dest('../q-windows.sg/assets/icon/'));
    gulp.src('assets/images/**/*')
        .pipe(gulp.dest('../q-windows.sg/assets/images/'));
    gulp.src('_product_westag/*')
        .pipe(gulp.dest('../q-windows.sg/_product_westag/'));
    gulp.src('_types/*')
        .pipe(gulp.dest('../q-windows.sg/_types/'));
});

gulp.task('watch', function () {
   gulp.watch('src/*.css', ['css']);
   gulp.watch('src/*.js', ['js']);
   gulp.watch('src/*.js', ['js-player']);
  gulp.watch('src/*.js', ['js-search']);
});

gulp.task('default', ['js', 'js-landing', 'js-player', 'js-search', 'css', 'images', 'files', 'files-ext']);
