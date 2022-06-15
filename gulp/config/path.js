import nodePath from "path"

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = "./dist"
const srcFolder = "./src"
const imgFolder = "images"

export const path = {
	build: {
		css: `${buildFolder}/css/`,
		files: `${buildFolder}/files/`,
		fonts: `${buildFolder}/fonts/`,
		images: `${buildFolder}/${imgFolder}/`,
		html: `${buildFolder}/`,
		script: `${buildFolder}/script/`,
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
		fonts: `${srcFolder}/fonts/`,
		images: `${srcFolder}/${imgFolder}/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/${imgFolder}/**/*.svg`,
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/main.scss`,
		script: `${srcFolder}/script/app.ts`,
		svgIcons: `${srcFolder}/svg-icons/*.svg`,
	},
	watch: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/${imgFolder}/**/*.{jpg,jpeg,png,gif,svg,webp}`,
		scss: `${srcFolder}/scss/*.scss`,
		script: `${srcFolder}/script/**/*.ts`,
	},
	buildFolder,
	srcFolder,
	rootFolder,
	imgFolder,
	ftp: "",
}
