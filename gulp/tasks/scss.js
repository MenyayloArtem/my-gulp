import dartSass from "sass"
import gulpSass from "gulp-sass"
import gulp from "gulp"
import path from "../configs/path.js"
const sass = gulpSass(dartSass)

export default function scss() {
    return gulp.src(path.src.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.dist.styles))
}