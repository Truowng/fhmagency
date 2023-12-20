const sayingMarketing = new Swiper(".saying-marketing-slider", {
  speed: 2000,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    480: {
      spaceBetween: 23,
      slidesPerView: "auto",
    },
  },
});

const photoSlider = new Swiper(".photo-up-slider", {
  speed: 2000,
  slidesPerView: "auto",
  spaceBetween: 17,
});

const photoContainer = document.getElementById("photo-wrapper");
if (photoContainer) {
  const photoG = lightGallery(photoContainer, {
    selector: ".swiper-slide",
    animateThumb: true,
    allowMediaOverlap: true,
    toggleThumb: true,
    download: false,
    speed: 500,
    slideShowAutoplay: true,
    plugins: [lgThumbnail, lgFullscreen, lgZoom],
    fullScreen: true,
    showZoomInOutIcons: true,
    actualSize: true,
  });
}
