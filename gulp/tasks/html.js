import fileInclude from "gulp-file-include"
import webpHtmlNoSvg from "gulp-webp-html-nosvg"
import versionNumber from "gulp-version-number"
import { path, plugins, gulp, isBuild } from "../config/app.js"

export const html = () => {
	return gulp
		.src(path.src.html)
		.pipe(fileInclude({ prefix: "@@", indent: true }))
		.pipe(plugins.replace("@img/", `${path.imgFolder}/`))
		.pipe(plugins.if(isBuild, webpHtmlNoSvg()))
		.pipe(
			plugins.if(
				isBuild,
				versionNumber({
					value: "%DT%",
					append: { key: "_v", cover: 0, to: ["css", "js"] },
					output: { file: "gulp/version.json" },
				})
			)
		)
		.pipe(gulp.dest(path.build.html))
		.pipe(plugins.browserSync.stream())
}
