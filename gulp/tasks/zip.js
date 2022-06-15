import fs from "fs"
import zipPlugin from "gulp-zip"
import { path, gulp } from "../config/app.js"

export const zip = () => {
	fs.rmSync(`./${path.rootFolder}.zip`, { recursive: true, force: true })
	return gulp
		.src(`${path.buildFolder}/**/*.*`)
		.pipe(zipPlugin(`${path.rootFolder}.zip`))
		.pipe(gulp.dest("./"))
}
