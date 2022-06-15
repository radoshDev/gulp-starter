import { plugins, path } from "../config/app.js"

export const server = () => {
	plugins.browserSync.init({
		server: {
			baseDir: path.build.html,
		},
		notify: false,
		port: 3000,
		open: false,
	})
}
