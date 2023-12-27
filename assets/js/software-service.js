const collabPartner = new Swiper(".collab-slider", {
  speed: 2000,
  autoplay: {
    delay: 20,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 4,
  grid: {
    rows: 7,
    fill: "row",
  },
  spaceBetween: 8,
  breakpoints: {
    991: {
      spaceBetween: 18,
    },
  },
});

const reviewList = document.querySelectorAll(".review .review-item");
if (reviewList) {
  const total = reviewList.length;
  const countReverse = Math.round(total / 2);
  console.log(countReverse);
  for (let index = total - 1; index >= countReverse; index--) {
    reviewList[index].classList.add("review-item-reverse");
  }
}

const reviewSlider = new Swiper(".review-slider", {
  speed: 2000,
  slidesPerView: "auto",
  spaceBetween: 20,
  grid: {
    rows: 1,
    fill: "row",
  },
  breakpoints: {
    991: {
      grid: {
        rows: 2,
      },
    },
  },
});

const pictureContainer = document.getElementById("picture-wrapper");
if (pictureContainer) {
  const pictureG = lightGallery(pictureContainer, {
    selector: ".picture-item",
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

const slider = document.querySelector(".picture-list");
let isDown = false;
let startX;
let scrollLeft;
if (slider) {

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
}
