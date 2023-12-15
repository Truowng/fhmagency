// SLIDE
const homeService = new Swiper("#home-services .services-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 25,
  navigation: {
    nextEl: "#home-services .services-slider .slider-button-next",
    prevEl: "#home-services .services-slider .slider-button-prev",
  },
  breakpoints: {
    767: { slidesPerView: 2, spaceBetween: 25 },
    991: { slidesPerView: 3, spaceBetween: 25 },
  },
});
