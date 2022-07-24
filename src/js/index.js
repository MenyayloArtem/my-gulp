const items = document.querySelectorAll(".drag__item")

let el = null
function dragstart (e) {
    el = e.target
}

function dragend () {
    el = null
}

function dragenter (e) {
    e.preventDefault()
    e.target.style.background = "lightgray"
}

function dragleave (e) {
    e.preventDefault()
    e.target.style.background = "white"
}

function drop(e) {
    let buf = e.target.textContent
    e.target.textContent = el.textContent
    el.textContent = buf
    e.target.style.background = "white"
}

items.forEach(item => {
    item.ondragstart=dragstart
    item.ondragenter = dragenter
    item.ondragleave = dragleave
    item.ondragover=(e) => e.preventDefault()
    item.ondragend = dragend
    item.ondrop=drop
})