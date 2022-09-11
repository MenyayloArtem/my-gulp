import browserSync from "browser-sync"
import gulp from 'gulp'

export default gulp.task('server',() => browserSync.init({
    server : {
        baseDir : "dist/"
    },
    notify : false
}))