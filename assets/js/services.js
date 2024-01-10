var serviceSliderImg = new Swiper(".services-slider-img", {
  loop: true,
  direction: "vertical",
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 0,
  speed: 900,
  watchSlidesProgress: true,
});

var serviceSlider = new Swiper(".services-slider", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 95,
  centeredSlides: true,
  preventInteractionOnTransition: true,
  simulateTouch: false,
  mousewheel: {
    eventsTarget: ".services-list",
  },
  speed: 1000,
  pagination: {
    el: ".services-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: serviceSliderImg,
  },
});

const listServicePage = new Swiper(".list-service-slider > .swiper", {
  direction: "vertical",
  speed: 1000,
  preventInteractionOnTransition: true,
  simulateTouch: false,
  mousewheel: {
    eventsTarget: ".list-service-slider",
  },
});

listServicePage.on("slideChange", () => {
  if (listServicePage.realIndex == 1) {
    listServicePage.mousewheel.disable();
    setTimeout(() => {
      serviceSlider.mousewheel.enable();
    }, 500);
    serviceSlider.on("toEdge", () => {
      setTimeout(() => {
        serviceSlider.mousewheel.disable();
      }, 900);
      setTimeout(() => {
        listServicePage.mousewheel.enable();
      }, 1500);
    });
  }
});
