import gulp from "gulp"
import path from "../configs/path.js"

export default function scss() {
    return gulp.src(path.src.assets)
    .pipe(gulp.dest(path.dist.assets))
}