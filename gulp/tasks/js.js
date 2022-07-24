import gulp from "gulp"
import path from "../configs/path.js"
import webpackConfig from "../../webpack.config.js"
import webpack from "webpack-stream"
import GulpUglify from "gulp-uglify"

export default function scss() {
    return gulp.src(path.src.js)
    .pipe(webpack(webpackConfig))
    .pipe(GulpUglify())
    .pipe(gulp.dest(path.dist.js))
}