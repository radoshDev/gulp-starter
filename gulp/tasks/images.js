import webp from "gulp-webp"
import imagemin from "gulp-imagemin"
import { path, gulp, plugins, isBuild } from "../config/app.js"

export const images = () => {
	return gulp
		.src(path.src.images)
		.pipe(plugins.newer(path.build.images))
		.pipe(plugins.if(isBuild, webp()))
		.pipe(plugins.if(isBuild, gulp.dest(path.build.images)))
		.pipe(plugins.if(isBuild, gulp.src(path.src.images)))
		.pipe(
			plugins.if(
				isBuild,
				imagemin({
					progressive: true,
					svgoPlugins: [{ removeViewBox: false }],
					interlaced: true,
					optimizationLevel: 3,
				})
			)
		)
		.pipe(gulp.dest(path.build.images))
		.pipe(gulp.src(path.src.svg))
		.pipe(gulp.dest(path.build.images))
		.pipe(plugins.browserSync.stream())
}
