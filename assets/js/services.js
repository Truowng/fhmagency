var serviceSlider = new Swiper(".services-slider", {
  loop: true,
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 90,
  watchSlidesProgress: true,
  allowSlideNext: false,
  createElements: true,
  clickable: true,
  pagination: {
    el: ".services-pagination",
    clickable: true,
  },
});

// const serviceSlideList = document.querySelectorAll(".services-slider-item");
// if (serviceSlideList) {
//   for (let index = 0; index < serviceSlideList.length; index++) {
//     const slide = serviceSlideList[index];
//     slide.addEventListener("click", () => {
//       console.log(index);
//       serviceSlider.slideTo(index);
//     });
//   }
// }

const hoverEffectImagesGallery = [
  "assets/images/services/services-1-2.png",
  "assets/images/services/services-2-1.png",
  "assets/images/services/services-3-1.png",
  "assets/images/services/services-4-2.png",
];

const hoverEffectDisplacementImages = [
  "https://images.unsplash.com/photo-1608930361232-67c6350dab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1603665301175-57ba46f392bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1535376472810-5d229c65da09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  "https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1515155075601-23009d0cb6d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
];

const hoverEffectImagesGallery2 = [
  "assets/images/services/services-1.png",
  "assets/images/services/services-2.png",
  "assets/images/services/services-3.png",
  "assets/images/services/services-4.png",
];

let hoverEffectImages = [...document.querySelectorAll(".services-slider-img")];
// let hoverEffectCurrent = 0;
// let hoverEffectTarget = 0;
// let hoverEffectEase = 0.08;

hoverEffectImages.forEach((hoverEffectImage, index) => {
  new hoverEffect({
    parent: hoverEffectImage,
    intensity: 0.5,
    image1: hoverEffectImagesGallery2[index],
    image2: hoverEffectImagesGallery[index],
    displacementImage: hoverEffectDisplacementImages[index],
    easing: Expo.easeOut,
    speedIn: 1.2,
    speedOut: 2.4,
  });
  hoverEffectImage.style.backgroundImage = `url(${hoverEffectImagesGallery[index]})`;
});
