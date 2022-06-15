import sprite from "gulp-svg-sprite"
import { path, gulp } from "../config/app.js"

export const svgSprite = () => {
	return gulp
		.src(path.src.svgIcons, {})
		.pipe(
			sprite({
				mode: {
					stack: {
						sprite: "../icons.svg",
					},
				},
			})
		)
		.pipe(gulp.dest(`${path.srcFolder}/${path.imgFolder}`))
}
