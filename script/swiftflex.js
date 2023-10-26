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
const searchButton = document.getElementById("search_button")
const searchInput = document.getElementById("search_input")


searchButton.addEventListener('click', function() {
    if (searchInput.style.display === "none") {
        searchInput.style.display = "block"
    }else{
        searchInput.style.display = "none"

    }
})

