$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [

    
     
     'Online world','proffessional level','next level'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });


  // // for form
  // var form = document.getElementById("my-form");

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   var status = document.getElementById("status");
  //   var data = new FormData(event.target);
  //   fetch(event.target.action, {
  //     method: form.method,
  //     body: data,
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       status.innerHTML = "Thanks for your submission!";
  //       form.reset();
  //     })
  //     .catch((error) => {
  //       status.innerHTML = "Oops! There was a problem submitting your form";
  //     });
  // }
  // form.addEventListener("submit", handleSubmit);

  //slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });


  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });



})

