import { gulp, path } from "./gulp/config/app.js"
import { copy } from "./gulp/tasks/copy.js"
import { clean } from "./gulp/tasks/clean.js"
import { html } from "./gulp/tasks/html.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { script } from "./gulp/tasks/script.js"
import { images } from "./gulp/tasks/images.js"
import { fontsStyle, otfToTtf, ttfToWoff } from "./gulp/tasks/fonts.js"
import { svgSprite } from "./gulp/tasks/svgSprite.js"
import { zip } from "./gulp/tasks/zip.js"

function watcher() {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.scss, scss)
	gulp.watch(path.watch.script, script)
	gulp.watch(path.watch.images, images)
}
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)
const mainTasks = gulp.series(
	fonts,
	gulp.parallel(copy, html, scss, script, images)
)

const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(clean, mainTasks)

export { svgSprite, build, zip }
gulp.task("default", dev)
