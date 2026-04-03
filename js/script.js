const mobileBttn = document.querySelector("#mobile-bttn");
const nav = document.querySelector("header nav");
mobileBttn.addEventListener('click',(e) => {
    nav.classList.toggle("mobile")
    mobileBttn.classList.toggle("ativo")
});