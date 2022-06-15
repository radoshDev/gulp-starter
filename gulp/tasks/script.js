import webpack from "webpack-stream"
import { plugins, path, gulp, isBuild } from "../config/app.js"

export const script = () => {
	return gulp
		.src(path.src.script, { sourcemaps: true })
		.pipe(
			webpack({
				mode: isBuild ? "production" : "development",
				module: {
					rules: [
						{
							test: /\.ts$/,
							use: [
								{
									loader: "babel-loader",
									options: { presets: ["@babel/preset-env"] },
								},
								"ts-loader",
							],
						},
					],
				},
				resolve: {
					extensions: [".tsx", ".ts", ".js"],
				},
				output: {
					filename: "app.min.js",
				},
			})
		)
		.pipe(gulp.dest(path.build.script))
		.pipe(plugins.browserSync.stream())
}
