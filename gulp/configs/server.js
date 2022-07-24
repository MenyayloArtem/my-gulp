import browserSync from "browser-sync"

export const server = browserSync.init({
    server : {
        baseDir : "dist/"
    },
    notify : false
})