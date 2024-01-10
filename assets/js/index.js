// INIT
AOS.init();

const testimonialsSlider = new Swiper(
  ".testimonials .testimonials-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 22,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    initialSlide: 3,
    loop: true,
    breakpoints: {
      767: {
        spaceBetween: 75,
        slidesPerView: 2,
      },
      991: {
        spaceBetween: 75,
        slidesPerView: 3,
      },
    },
  }
);

const blogSlider = new Swiper(".blog .blog-slider .swiper", {
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
  navigation: {
    nextEl: ".blog .blog-slider .slider-button-next",
    prevEl: ".blog .blog-slider .slider-button-prev",
  },
});

// VIDEO CONTROL
const playButton = document.querySelector(".video .button-play");
const pauseButton = document.querySelector(".video .button-pause");
const video = document.querySelector(".video .video-wrapper video");
const videoWrapper = document.querySelector(".video .video-wrapper");

if (playButton) {
  playButton.addEventListener("click", () => {
    if (videoWrapper.classList.contains("pause")) {
      videoWrapper.classList.remove("pause");
      videoWrapper.classList.add("play");
    }

    video.play();
  });
}

if (pauseButton) {
  pauseButton.addEventListener("click", () => {
    if (videoWrapper.classList.contains("play")) {
      videoWrapper.classList.remove("play");
      videoWrapper.classList.add("pause");
    }

    video.pause();
  });
}

// HANDLE MENU
const openButton = document.querySelector("#fhm-header .nav .button-open");
const closeButton = document.querySelector(
  "#fhm-header .nav-mobile .button-close"
);
const navMobile = document.querySelector("#fhm-header .nav-mobile");
const navsLv0 = document.querySelectorAll("#fhm-header .nav-mobile .nav-lv0");

if (navMobile) {
  openButton.addEventListener("click", () => {
    navMobile.classList.remove("close");
    navMobile.classList.add("open");
  });
  closeButton.addEventListener("click", () => {
    navMobile.classList.remove("open");
    navMobile.classList.add("close");
  });
}

if (navsLv0) {
  navsLv0.forEach((navLv0) => {
    closeButton.addEventListener("click", () => {
      document.querySelector(".nav.active").classList.remove("active");
      navLv0.classList.add("active");
    });

    const itemsNavLv0 = navLv0.querySelectorAll(".item-lv0");
    itemsNavLv0.forEach((itemNavLv0) => {
      const navLv1 = itemNavLv0.querySelector(".nav-lv1");
      if (navLv1) {
        const backBtn = navLv1.querySelector(".back-title");
        backBtn.addEventListener("click", (e) => {
          if (document.querySelector(".nav.active")) {
            document.querySelector(".nav.active").classList.remove("active");
          }
          setTimeout(() => {
            navLv0.classList.add("active");
          }, 1);
          e.stopPropagation();
        });
      }

      itemNavLv0.addEventListener("click", () => {
        if (navLv1) {
          document.querySelector(".nav.active").classList.remove("active");
          setTimeout(() => {
            navLv1.classList.add("active");
          }, 1);
        }
      });
    });
  });
}

// COUNT STATISTIC
const valueDisplays = document.querySelectorAll(
  ".display-statistic-el h4 span"
);

const counterDisplays = document.querySelectorAll(".counter-item .num span");
const interval = 2500;
let isRuned = false;

function checkScroll() {
  if (!isRuned && valueDisplays) {
    const triggerBottom = (window.innerHeight / 5) * 4;
    valueDisplays.forEach((valueDisplay) => {
      const boxTop = valueDisplay.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        isRuned = true;
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      }
    });
  }
}
let isRunedCounter = false;
const counterWrapper = document.querySelector(".counter-wrapper");
function checkScrollCounter() {
  if (!isRunedCounter && counterDisplays) {
    const triggerBottom = (window.innerHeight / 5) * 4;
    counterDisplays.forEach((countDisplay) => {
      const boxTop = counterWrapper.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        isRunedCounter = true;
        let startValue = 0;
        let endValue = parseInt(countDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          countDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      }
    });
  }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("scroll", checkScrollCounter);

// ANIMATE LINES
const lines = document.querySelectorAll("#multiLines path");
if (lines) {
  lines.forEach((line, index) => {
    line.style.animation = `moveVertical ease 1.5s infinite alternate-reverse`;
    line.style.animationDelay = `${index / 10}s`;
  });
}
