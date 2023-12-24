const sayingMarketing = new Swiper(".saying-marketing-slider", {
  speed: 2000,
  slidesPerView: 2,
  spaceBetween: 12,
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
  spaceBetween: 20,
  breakpoints: {
    991: {
      spaceBetween: 17,
    },
  },
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

  const provideBtn = document.getElementById("provide-popup-btn");
  const provideImg = document.querySelector(".provide-popup-img img");
  const provideTitle = document.querySelector(".provide-popup h3");
  const provideDesc = document.querySelector(".provide-popup p");
  const provideItems = document.querySelectorAll(".provide-item");
  Array.from(provideItems).forEach((item) => {
    item.addEventListener("click", () => {
      provideImg.src = item.querySelector("img").src;
      provideTitle.textContent = item.querySelector("h3").textContent;
      provideDesc.textContent = item.querySelector("p").textContent;
      provideBtn.click();
    });
  });
}
