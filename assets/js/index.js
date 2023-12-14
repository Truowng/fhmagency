const testimonialsSlider = new Swiper(
  ".testimonials .testimonials-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    spaceBetween: 75,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
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
