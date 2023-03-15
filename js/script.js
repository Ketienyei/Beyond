const button = document.getElementById('btn');
  button.addEventListener('click', function() {
    // Add your functionality here
    console.log('Button clicked!');
  });



var dd_main = document.querySelector(".dd_main");
    
dd_main.addEventListener("click", function(){
    this.classList.toggle("active");
})