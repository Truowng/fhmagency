// INIT
AOS.init();

//HACKER
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~|,.?/{}[]-123456789";

export const hackerEffect = (el) => {
  let iterations = 0;
  const interval = setInterval(() => {
    el.innerText = el.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return el.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * letters.split("").length)];
      })
      .join("");
    if (iterations >= el.dataset.value.length) {
      clearInterval(interval);
    }
    iterations += 1 / 5;
  }, 30);
};

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
    initialSlide: 1,
    loop: true,
    breakpoints: {
      767: {
        spaceBetween: 40,
        slidesPerView: 2,
      },
      1199: {
        spaceBetween: 75,
        slidesPerView: 3,
        initialSlide: 3,
      },
    },
  }
);

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

// COUNTER
const counterItems = document.querySelectorAll(".counter-item .num");

if (counterItems) {
  counterItems.forEach((counterItem) => {
    hackerEffect(counterItem);
  });
}
