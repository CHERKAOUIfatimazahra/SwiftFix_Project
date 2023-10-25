//testimenial
document.addEventListener("DOMContentLoaded",function(){
const carousel = document.querySelectorAll(".movement");
const testimenial = document.querySelector(".Testimonial_div");
let move = carousel[0].clientWidth;
let index = 0;
    function movementNumber(){
        index = (index + 1) % carousel.length;
        let translater = -index * move;
        testimenial.style.transform = `translateX(${translater}px)`;
    }
    setInterval(movementNumber,2000)
})
//FAQ
const button = document.querySelectorAll(".faq_header");
const body = document.querySelectorAll(".faq_body");
for (let i = 0; i < button.length; i++) {
   
    button[i].addEventListener("click", () => {
        body[i].classList.toggle("collapse")
    })
}
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




