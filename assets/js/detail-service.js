const displaySlider = new Swiper(".display-slider", {
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 62,
});

const servicePartner = new Swiper(".services-partner-slider", {
  speed: 1500,
  autoplay: {
    delay: 20,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 7,
  grid: {
    rows: 6,
    fill: "row",
  },
  spaceBetween: 0,
});

const industryItems = [...document.querySelectorAll('.industry-item')]
industryItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.add('active')
  })
})