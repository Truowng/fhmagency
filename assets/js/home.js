// SLIDE
const homeService = new Swiper("#home-services .services-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: "auto",
  spaceBetween: 12,
  navigation: {
    nextEl: "#home-services .services-slider .slider-button-next",
    prevEl: "#home-services .services-slider .slider-button-prev",
  },
  breakpoints: {
    480: { slidesPerView: 2, spaceBetween: 25 },
    991: { slidesPerView: 3, spaceBetween: 25 },
  },
});

const homeBlog = new Swiper("#home-blog .blog-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: "auto",
  spaceBetween: 20,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
