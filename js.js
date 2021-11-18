let video = document.querySelectorAll(".about .vedio .bullets .btn");

let menu = document.querySelector(".fa-bars");
let items = document.querySelector(".header .items");




video.forEach(btn => {

    btn.onclick = () => {

        let src = btn.getAttribute("data-src");
        document.querySelector(".about .vedio video").src = src;

    }

});




const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    // //  reset: true


})

sr.reveal(".home .contant", { origin: "top", delay: 600 })
sr.reveal("form", { origin: "top", delay: 600 })
sr.reveal(".about", { origin: "top", delay: 600 })
sr.reveal(".landeing", { origin: "top", delay: 600 })
sr.reveal(".home .contant", { origin: "top", delay: 600 })
sr.reveal(".home .contant", { origin: "top", delay: 600 })
sr.reveal(".min-head", { delay: 700 })
sr.reveal(".landing .image", { delay: 1000 })
sr.reveal(".spacs .contant", { origin: "left", interval: 100 })
sr.reveal(".spacs .image", { delay: 1000, origin: "top" })
sr.reveal(".landing .image", { delay: 1000, origin: "top" });

menu.onclick = () => {

    items.classList.toggle("activ")
}