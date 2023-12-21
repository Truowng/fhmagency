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

if (window.innerWidth < 481) {
  const advBtn = document.getElementById("adv-popup-btn");
  const advIcon = document.querySelector(".adv-popup-icon img");
  const advTitle = document.querySelector(".adv-popup h3");
  const advDesc = document.querySelector(".adv-popup p");
  const advItems = document.querySelectorAll(".adv-item");
  Array.from(advItems).forEach((item) => {
    item.addEventListener("click", () => {
      advIcon.src = item.querySelector(".adv-item-icon img").src;
      advTitle.textContent = item.querySelector("h3").textContent;
      advDesc.textContent = item.querySelector("p").textContent;
      advBtn.click();
    });
  });
}
