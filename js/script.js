let navigation_bar = document.querySelector('navbar');
let button = document.querySelector('btn-btn');


button.addEventListener('click', function(){
    navigation_bar.classList.add('active?')
})



var dd_main = document.querySelector(".dd_main");
    
dd_main.addEventListener("click", function(){
    this.classList.toggle("active");
})