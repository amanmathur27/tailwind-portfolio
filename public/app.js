const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLink = document.querySelectorAll("#hLink");
const body = document.querySelector("body");
const mode = document.querySelector("#mode");
const modebtn = document.querySelector("#modebtn");

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    // hamburger.classList.toggle("bg-white");
})

hLink.forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden");
    })
})

mode.addEventListener("click",()=>{
    body.classList.toggle("dark");
})
modebtn.addEventListener("click",()=>{
    body.classList.toggle("dark");
    menu.classList.toggle("hidden")
})