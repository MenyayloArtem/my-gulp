import gulp from "gulp"
import { deleteAsync } from "del"

import html from "./gulp/tasks/html.js"
import scss from "./gulp/tasks/scss.js"
import assets from "./gulp/tasks/assets.js"
import path from "./gulp/configs/path.js"
import js from "./gulp/tasks/js.js"

function clear() {
    return deleteAsync(`dist/**`)
}

const update = gulp.series(clear,html, scss, js, assets)

function watcher(){
    gulp.watch(path.watch.html,update)
    gulp.watch(path.watch.styles,update)
    gulp.watch(path.watch.assets,update)
    gulp.watch(path.watch.js,update)
}

gulp.task("default",gulp.series(
    update,
    watcher,
))

