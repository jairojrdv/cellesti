const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: .01,
  },

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
  loop: true,
  speed: 3000, // Velocidade da transição
  allowTouchMove: false,
  // spaceBetween: 100,
});
