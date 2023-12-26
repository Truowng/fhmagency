if (window.innerWidth < 991) {
  const reasonBtn = document.getElementById("reason-popup-btn");
  const reasonIcon = document.querySelector(".reason-popup-icon img");
  const reasonTitle = document.querySelector(".reason-popup h3");
  const reasonDesc = document.querySelector(".reason-popup p");
  const reasonItems = document.querySelectorAll(".reason-item");
  Array.from(reasonItems).forEach((item) => {
    item.addEventListener("click", () => {
      reasonIcon.src = item.querySelector(".reason-item-icon img").src;
      reasonTitle.textContent = item.querySelector("h3").textContent;
      reasonDesc.textContent = item.querySelector("p").textContent;
      reasonBtn.click();
    });
  });

  const industry = document.querySelectorAll(".industry-item");
  Array.from(industry).forEach((item) => {
    item
      .querySelector(".industry-item-container h3")
      .addEventListener("click", (e) => {
        Array.from(industry).forEach((trigger) => {
          if (trigger !== e.target.parentElement.parentElement.parentElement) {
            trigger.classList.remove("active");
          }
        });
        item.classList.toggle("active");
      });
  });

  const sayingReverse = document.querySelector('.saying-slider[dir="rtl"]');
  if (sayingReverse) {
    sayingReverse.removeAttribute("dir");
  }
}
const displaySlider = new Swiper(".display-slider", {
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 1500,
  breakpoints: {
    767: {
      spaceBetween: 30,
    },
    991: {
      spaceBetween: 62,
    },
  },
});

// service-partner slider
const servicePartner = new Swiper(".services-partner-slider", {
  speed: 2000,
  autoplay: {
    delay: 20,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 5,
  grid: {
    rows: 8,
    fill: "row",
  },
  breakpoints: {
    991: {
      slidesPerView: 7,
      grid: {
        rows: 6,
      },
    },
  },
  spaceBetween: 0,
});

const sayingSlider = new Swiper(".saying-slider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 1500,
  breakpoints: {
    991: { spaceBetween: 20 },
  },
});

const sayingSliderRev = new Swiper(".saying-slider-rev", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 1500,
  breakpoints: {
    991: { loop: true, slidesPerView: "auto", spaceBetween: 20, speed: 1500 },
  },
});

const galleryContainer = document.getElementById("gallery-container");
if (galleryContainer) {
  const lg = lightGallery(galleryContainer, {
    selector: ".photo-slide-item",
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
