let menubtn = document.getElementById("menu_btn");
let navlinks = document.getElementById("nav_links");
let menuBtnIcon = document.querySelector("i");
menubtn.addEventListener("click", ()=>{
    navlinks.classList.toggle("open");
    let isopen = navlinks.classList.contains("open");
 menuBtnIcon.setAttribute("class", isopen? "ri-close-line" : "ri-menu-line");
});
navlinks.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});
let scrollRevealOption = {
    distance:"50px",
    origin:"left",
    duration: 1000,
};
ScrollReveal().reveal(".jeep_section img",{
    ...scrollRevealOption,
origin:"rigth",
});
ScrollReveal().reveal(".writting_part h4",{
    ...scrollRevealOption,
delay : 500,
});
ScrollReveal().reveal(".writting_part p",{
    ...scrollRevealOption,
delay : 700,
});
ScrollReveal().reveal(".image_part img",{
    ...scrollRevealOption,
delay : 800,
});
ScrollReveal().reveal(".location",{
    ...scrollRevealOption,
origin:"top",
});
ScrollReveal().reveal(".location i",{
    ...scrollRevealOption,
delay : 600,
});
ScrollReveal().reveal(".section_service img",{
    ...scrollRevealOption,
origin:"left",
});
ScrollReveal().reveal(".section_contact",{
    ...scrollRevealOption,
origin:"bottom",
});
ScrollReveal().reveal(".rental_img img",{
    ...scrollRevealOption,
delay : 500,
});
let follow = document.getElementById("follow");
let container = document.querySelector(".container");
follow.addEventListener("click", ()=>{
    container.classList.toggle("active")
});
let facebook = document.querySelector(".facebook");
let instragram = document.querySelector(".instragram");
let twitter = document.querySelector(".twitter");
facebook.addEventListener("click", ()=>{
    container.classList.toggle("active")
})
instragram.addEventListener("click", ()=>{
    container.classList.toggle("active")
})
twitter.addEventListener("click", ()=>{
    container.classList.toggle("active")
})


