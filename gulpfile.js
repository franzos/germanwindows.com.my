var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var pump = require('pump');

const { series } = require('gulp');
const { src, dest } = require('gulp');

function js(cb) {
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
};

function jsLanding(cb) {
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
};

function jsPlayer() {
  return gulp.src
    ([
      'node_modules/wavesurfer.js/dist/wavesurfer.min.js',
      'src/player.js'
    ])
		.pipe(concat('player.min.js'))
    .pipe(uglify())
		.pipe(gulp.dest('assets/js'));
};

function jsReviews() {
    return gulp.src
    ([
        'src/reviews.js'
    ])
        .pipe(concat('reviews.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
};

function css() {
	return gulp.src
	([
		'node_modules/bootstrap/dist/css/bootstrap.css',
		'node_modules/slick-carousel/slick/slick.css',
		'node_modules/swipebox/src/css/swipebox.css',
		'src/slideout.css',
		'src/custom.css',
		'src/custom-promo.css'
	])
			.pipe(concat('custom.min.css'))
			.pipe(cleanCss())
			.pipe(gulp.dest('assets/css'));
};

function images() {
	return gulp.src('src/images/**/*')
			.pipe(imagemin([
				imagemin.jpegtran({progressive: true}),
				imagemin.optipng({optimizationLevel: 5})
			]))
			.pipe(gulp.dest('assets/images'));
};

function imagesIcon() {
	return gulp.src('src/icon/**/*')
			.pipe(imagemin([
				imagemin.jpegtran({progressive: true}),
				imagemin.optipng({optimizationLevel: 5})
			]))
			.pipe(gulp.dest('assets/icon'));
};

function moveFonts() {
  return src('src/fonts/*')
      .pipe(dest('assets/fonts/'));
}

function moveBootstrapFonts() {
  return src('node_modules/bootstrap/fonts/*')
    .pipe(dest('assets/fonts/'));
}

function moveVideos() {
  return src('src/videos/*')
      .pipe(dest('assets/videos/'));
}

function moveFiles() {
  return src('src/files/**/*')
      .pipe(dest('assets/files/'));
}

function moveSounds() {
  return src('src/sounds/*')
      .pipe(dest('assets/sounds/'));
}

function moveVideoCss() {
  return src('node_modules/video.js/dist/video-js.min.css')
      .pipe(dest('assets/css/'));
}

function moveVideoJs() {
  return src('node_modules/video.js/dist/video.min.js')
      .pipe(dest('assets/js/'));
}

function moveVue() {
  return src('node_modules/vue/dist/vue.min.js')
      .pipe(dest('assets/js/'));
}

function moveIcons() {
  return src('assets/icon/**/*')
      .pipe(dest('../q-windows.sg/assets/icon/'));
}

function moveImages() {
  return src('assets/images/**/*')
      .pipe(dest('../q-windows.sg/assets/images/'));
}

function moveWestag() {
  return src('_product_westag/*')
      .pipe(dest('../q-windows.sg/_product_westag/'));
}

function moveTypes() {
  return src('_types/*')
      .pipe(dest('../q-windows.sg/_types/'));
}

function watch() {
   gulp.watch('src/*.css', ['css']);
   gulp.watch('src/*.js', ['js']);
   gulp.watch('src/*.js', ['js-player']);
  gulp.watch('src/*.js', ['js-search']);
};

exports.moveVue = moveVue;
exports.default = series(js, jsLanding, jsPlayer, jsReviews, css, images, imagesIcon, moveFonts, moveBootstrapFonts, moveVideos, moveFiles, moveSounds, moveVideoCss, moveVideoJs, moveIcons, moveImages, moveWestag, moveTypes, moveVue);
