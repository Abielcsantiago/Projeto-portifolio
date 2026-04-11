const mobileBttn = document.querySelector("#mobile-bttn");
const nav = document.querySelector("header nav");
const navLinks = document.querySelectorAll(".nav-links")
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