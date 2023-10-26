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