const collabPartner = new Swiper(".collab-slider", {
  speed: 2000,
  autoplay: {
    delay: 20,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 4,
  grid: {
    rows: 7,
    fill: "row",
  },
  spaceBetween: 18,
});
