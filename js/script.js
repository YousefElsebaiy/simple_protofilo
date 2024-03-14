let home = document.getElementById("home")
let about = document.getElementById("about")
let services = document.getElementById("services")
let btn = document.getElementById("btn")
let project = document.getElementById("project")
let contact_us = document.getElementById("contact-us")
let menu = document.querySelector(".menu")
let first = document.getElementById("first")
let center = document.getElementById("center")
let last = document.getElementById("last")
let links = document.querySelector(".links")
home.addEventListener('click', function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})
about.addEventListener('click', function () {
    window.scroll({
        top: 660,
        left: 0,
        behavior: 'smooth',
    })
})
services.addEventListener('click', function () {
    window.scroll({
        top: 870,
        left: 0,
        behavior: 'smooth',
    })
})
btn.addEventListener('click', function () {
    window.scroll({
        top: 660,
        left: 0,
        behavior: 'smooth',
    })
})
project.addEventListener('click', function () {
    window.scroll({
        top: 1300,
        left: 0,
        behavior: 'smooth',
    })
})
contact_us.addEventListener('click', function () {
    window.scroll({
        top: 2000,
        left: 0,
        behavior: 'smooth',
    })
})
menu.addEventListener('click', function () {
    first.classList.toggle("first")
    center.classList.toggle("center")
    last.classList.toggle("last")
    links.classList.toggle("i")
})