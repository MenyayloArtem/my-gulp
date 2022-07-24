import path from "path"
import { fileURLToPath } from "url";


const destDir = "dist"
const srcDir = "src"

export default {
    dist : {
        html : `${destDir}/`,
        styles : `${destDir}/styles/`,
        assets : `${destDir}/assets/`,
        js : `${destDir}/js/`
    },
    src : {
        html : `${srcDir}/*.html`,
        styles : `${srcDir}/scss/styles/**/*.scss`,
        assets : `${srcDir}/assets/**/*.*`,
        js : `${srcDir}/js/**/*.js`,
    },
    watch : {
        html : `${srcDir}/**/*.html`,
        styles : `${srcDir}/scss/**/*.*`,
        assets : `${srcDir}/assets/**/*.*`,
        js : `${srcDir}/js/**/*.*`
    }
}