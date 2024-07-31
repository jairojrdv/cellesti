const swiper = new Swiper(".swiper", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >=
    320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 40
      }
  },
  //  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 3000, // Velocidade da transição
  // effect: "fade",
  // spaceBetween: 100,
});
