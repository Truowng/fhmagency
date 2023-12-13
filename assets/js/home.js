import { hackerEffect } from "./hackerEffect.js";

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
  slidesPerView: 1,
  spaceBetween: 25,
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

// COUNTER
const counterItems = document.querySelectorAll(".counter-item .num");

counterItems.forEach((counterItem) => {
  hackerEffect(counterItem);
});
