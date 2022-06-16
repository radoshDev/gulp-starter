import fs from "fs"
import fonter from "gulp-fonter"
import ttf2woff2 from "gulp-ttf2woff2"
import { path, gulp } from "../config/app.js"

const FONT_WEIGHT = {
	thin: 100,
	extralight: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
	extrabold: 800,
	black: 900,
}

export const otfToTtf = () => {
	return gulp
		.src(`${path.src.fonts}*.otf`, {})
		.pipe(fonter({ formats: ["ttf"] }))
		.pipe(gulp.dest(path.src.fonts))
}

export const ttfToWoff = () => {
	return gulp
		.src(`${path.src.fonts}*.ttf`)
		.pipe(fonter({ formats: ["woff"] }))
		.pipe(gulp.dest(path.build.fonts))
		.pipe(gulp.src(`${path.src.fonts}*.ttf`))
		.pipe(ttf2woff2())
		.pipe(gulp.dest(path.build.fonts))
}

export const fontsStyle = async () => {
	try {
		const styleFontsFile = `${path.srcFolder}/scss/fonts.scss`
		let styleFontsFileContent = ""
		const fontsFiles = await fs.promises.readdir(path.build.fonts)

		if (!fontsFiles || fontsFiles.length === 0) {
			console.log("Fonts files not exist")
			return
		}

		if (fs.existsSync(styleFontsFile)) {
			console.log(
				`File scss/fonts.scss already exist. If you wanna update, delete first`
			)
			return
		}

		let newFileOnly
		for (let fontFile of fontsFiles) {
			let fontFileName = fontFile.substring(0, fontFile.lastIndexOf("."))
			if (fontFileName === newFileOnly) continue

			let [fontName, fontWeightName] = fontFileName.split("-")
			const fontWeight =
				FONT_WEIGHT[fontWeightName.toLocaleLowerCase()] || FONT_WEIGHT.regular
			styleFontsFileContent += `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n\t}\r\n`
			newFileOnly = fontFileName
			}
			await fs.promises.writeFile(styleFontsFile, styleFontsFileContent)
		} catch (error) {
			console.log(error)
			return
	}
}
