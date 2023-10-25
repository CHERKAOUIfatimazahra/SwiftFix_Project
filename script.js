//FAQ
const button = document.querySelector(".faq_head");
const body = document.querySelector(".faq_body");

button.addEventListener("click", () => {
    body.classList.toggle("collapse")
})

//read move
const modal = document.querySelector('.modal')
const open = document.querySelector('.read')
const close = document.querySelector('.close')
open.addEventListener('click',() =>{
    modal.showModal();
})
close.addEventListener('click',()=>{
    modal.close();
})
// dropdown
const menu = document.querySelector('.header-menu-items');
const burger = document.querySelector('.menu_hamburger');
    burger.addEventListener('click',()=>{
        burger.classList.toggle("active")
        menu.classList.toggle("active")
        menu.style.transition= "1s ease";
        console.log("done");
    })
const down = document.querySelector('.dropdown-menu');
const service = document.querySelector('.fa-caret-down');
    service.addEventListener('click',()=>{
        down.classList.toggle("active")
        down.style.transition= "1s ease";
        console.log("done");
    }) 
// interactive search bar icon
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('show');
});

searchInput.addEventListener('input', (event) => {
    if (event.target.value.trim() === '') {
        searchIcon.style.display = 'block';
    } else {
        searchIcon.style.display = 'none';
    }
});




