// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("button");


let button1 = document.getElementById('myBtn1')
let button2 = document.getElementById('myBtn2')
let button3 = document.getElementById('myBtn3')
let button4 = document.getElementById('myBtn4')
let button5 = document.getElementById('myBtn5')
// Get the <span> element that closes the modal
let closeBtn = document.getElementById("closeBtn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
button1.onclick = function(){
  modal.style.display = "block";
}
button2.onclick = function(){
  modal.style.display = "block";
}
button3.onclick = function(){
  modal.style.display = "block";
  
}
button5.onclick = function(){
  modal.style.display = "block";
  
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}