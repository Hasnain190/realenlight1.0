



const navbar = document.querySelector('.navbar')

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
menuBtn.addEventListener('click', function () {

  if (menu.classList.contains("active")) {
    menu.classList.remove('active')
  } else menu.classList.add('active')
})


// menu.addEventListener("click", function (e) {

//   if (menu.classList.contains("active")) {

//     if (e.target == HTMLAnchorElement) {

//       console.log("clicked on list")

//     }
//     console.log(e.target, e.currentTarget)


//   }

// })

window.addEventListener("scroll", function () {
  // sticky navbar on scroll script
  if (this.scrollY > 10) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

});

