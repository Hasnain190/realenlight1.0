// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("button");


let button1 = document.getElementById('myBtn1')
let button2 = document.getElementById('myBtn2')
let button3 = document.getElementById('myBtn3')

// Get the <span> element that closes the modal
let closeBtn = document.getElementById("closeBtn");
// When the user clicks the button, open the modal 

[btn, button1, button2, button3].forEach(b => {
  b.addEventListener("click", function () {
    modal.style.display = "block";
  })
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  console.log("clicked")

})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

