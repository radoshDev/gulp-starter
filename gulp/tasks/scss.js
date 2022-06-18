import dartSass from "sass"
import gulpSass from "gulp-sass"
import cleanCss from "gulp-clean-css"
import webpCss from "gulp-webpcss"
import autoPrefixer from "gulp-autoprefixer"
import groupeCssMediaQueries from "gulp-group-css-media-queries"
import { plugins, path, gulp, isBuild, isDev } from "../config/app.js"

const sass = gulpSass(dartSass)

export const scss = () => {
	return gulp
		.src(path.src.scss, { sourcemaps: isDev })
		.pipe(
			sass({ outputStyle: "expanded", sourceMap: true }).on(
				"error",
				sass.logError
			)
		)
		.pipe(plugins.replace("@img/", `../${path.imgFolder}/`))
		.pipe(plugins.if(isBuild, groupeCssMediaQueries()))
		.pipe(
			plugins.if(
				isBuild,
				webpCss({ webpClass: ".webp", noWebpClass: ".no-webp" })
			)
		)
		.pipe(
			autoPrefixer({
				grid: "autoplace",
				cascade: true,
			})
		)
		.pipe(plugins.if(isBuild, plugins.rename("style.css")))
		.pipe(plugins.if(isBuild, gulp.dest(path.build.css))) //Якщо потрібно не зжатий .css
		.pipe(plugins.if(isBuild, cleanCss()))
		.pipe(plugins.rename("style.min.css"))
		.pipe(gulp.dest(path.build.css))
		.pipe(plugins.browserSync.stream())
}
