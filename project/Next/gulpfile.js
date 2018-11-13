'use_strict';

var gulp   = require('gulp'),
	pug    = require('gulp-pug'),
	csso   = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require("gulp-notify"),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-tinypng'),
	less = require('gulp-less'),
	path = require('path'),
	browserSync = require('browser-sync').create();

// browser-sync
gulp.task('serve', function () {
	browserSync.init({
		server: {
			baseDir: "./build"
		}
	});
	
});

// pug
gulp.task('pug', function(){
	return gulp.src('src/pug/pages/*.pug')
	.pipe(pug({
		pretty:true
	}))
	.pipe(gulp.dest('build'))
	.on('end',browserSync.reload);
});

// stylus
// gulp.task('stylus', function () {
// 	return gulp.src('src/static/stylus/base/main.styl')
// 		.pipe(sourcemaps.init())
// 		.pipe(stylus({
// 			'include css': true
// 		}))
// 		.pipe(autoprefixer({
// 			browsers: ['last 10 versions'],
// 			cascade: false
// 		}))
// 		.on("error", notify.onError({
// 			title: "style"
// 		}))
// 		// .pipe(csso())
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest('build/css'))
// 		.pipe(browserSync.reload({
// 			stream: true
// 		}));
// });


//less
gulp.task('less', function () {
	return gulp.src('src/static/less/base/main.less')
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// sripts:libs
gulp.task('scripts:libs', function () {
	return gulp.src(
		['node_modules/jquery/dist/jquery.min.js'])
		.pipe(concat('libs.min.js'))
		.pipe(gulp.dest('build/libs/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});
// sripts
gulp.task('scripts', function () {
	return gulp.src(['src/static/js/main.js'])
		.pipe(gulp.dest('build/js/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

//img
gulp.task('img:dev', function () {
	return gulp.src(['src/static/img/*.{png,jpg,gif}'])
		// .pipe(tinypng('Kb-7eTSCVAkooxNiN4ULUGrf92Fx6wpN'))
		.pipe(gulp.dest('build/img/'));
});
gulp.task('img:build', function () {
	return gulp.src(['src/static/img/*.{png,jpg,gif}'])
		.pipe(tinypng('Kb-7eTSCVAkooxNiN4ULUGrf92Fx6wpN'))
		.pipe(gulp.dest('build/img/'));
});



// watcher
gulp.task('watch', function(){
	gulp.watch('src/pug/**/*.pug',gulp.series('pug'))
	gulp.watch('src/static/less/**/*.less', gulp.series('less'))
	gulp.watch('src/static/js/main.js', gulp.series('scripts'))
	gulp.watch('src/static/img/*', gulp.series('img:dev'))
});

//default
gulp.task('default',gulp.series(
	gulp.parallel('pug','less','img:dev'),
	gulp.parallel('watch', 'serve')
));

//build
gulp.task('build', gulp.series(
	gulp.parallel('pug', 'less', 'img:build'),
	gulp.parallel('watch', 'serve')
));