const mobileBttn = document.querySelector("#mobile-bttn");
const nav = document.querySelector("header nav");
const navLinks = document.querySelectorAll(".nav-links")
const backToTop = document.querySelector("#bttn-back-top")
mobileBttn.addEventListener('click',(e) => {
    nav.classList.toggle("mobile")
    mobileBttn.classList.toggle("ativo")
});
navLinks.forEach((e) => {
    e.addEventListener('click', () =>{
        nav.classList.remove('mobile')
        mobileBttn.classList.remove("ativo")
    })
})
backToTop.addEventListener("click", e =>{
    e.preventDefault()
    scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})