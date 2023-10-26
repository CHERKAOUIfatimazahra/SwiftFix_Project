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
    setInterval(movementNumber,2500)
})




