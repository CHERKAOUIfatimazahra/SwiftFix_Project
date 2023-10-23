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


