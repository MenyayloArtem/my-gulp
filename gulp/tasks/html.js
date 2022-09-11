import path from "../configs/path.js"
import fileinclude from "gulp-file-include"
// import { server } from "../configs/server.js"
import gulp from "gulp"
import browserSync from "browser-sync"


export default function html() {
    return gulp.src(path.src.html)
    .pipe(fileinclude())
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.reload({stream:true}))
}