$(".owl-carousel").owlCarousel({
  loop: true,
  // margin: 10,
  // nav: true,
  center: true,
  freeDrag: true,
  merge: true,
  autoplay: true,
  autoplayTimeout: 5000,
  animateOut: "slideOutDown",
  lazyload: true,
  autoplayHoverPause: true,
  // rewind: true,
  // animateIn: "flipInX",
  //   autoWidth: true,
  items: 1,
  stagePadding: 0,
  smartSpeed: 1000,
  responsive: {
    1000: {
      item: 1,
    },
  },
});

// animation

// initializing venobox

$(document).ready(function () {
  $(".venobox").venobox();
});

// initializing aos

$(document).ready(function () {
  AOS.init({
    duration: 700,
    offset: 100,
    once: true,
    easing: "ease-in-out",
  });
});
