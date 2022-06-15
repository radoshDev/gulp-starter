declare module "gulp-webp-html-nosvg" {
	export default function (): any
}

declare module "gulp-version-number" {
	import internal from "stream"
	interface Options {
		value: string
		append: { key: string; cover: 0 | 1; to: string[] }
		output: { file: string }
	}
	export default function (options: Options): internal.Stream
}

declare module "gulp-notify"
