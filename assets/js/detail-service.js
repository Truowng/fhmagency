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

// COUNT STATISTIC
let valueDisplays = document.querySelectorAll(".display-statistic-el h4 span");
let interval = 2500;
valueDisplays.forEach((valueDisplay) => {
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
});

const servicePartner = new Swiper(".services-partner-slider", {
  speed: 2000,
  autoplay: {
    delay: 20,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 5,
  grid: {
    rows: 6,
    fill: "row",
  },
  breakpoints: {
    991: {
      slidesPerView: 7,
    },
  },
  spaceBetween: 0,
});

// const industryList = document.querySelectorAll(".industry-item");
// const industryPopup = document.querySelector(".industry-popup");
// const industryPopupImg = industryPopup.querySelector("img");
// const industryPopupTitle = industryPopup.querySelector("h3");
// const industryPopupDesc = industryPopup.querySelector("p");
// industryPopupTitle.addEventListener("click", () => {
//   industryPopup.classList.remove("show");
// });
// Array.from(industryList).forEach((item) => {
//   item.addEventListener("click", () => {
//     const img = item.querySelector("img");
//     industryPopupImg.src = item.querySelector("img").src;
//     industryPopupTitle.textContent = item.querySelector("h3").textContent;
//     industryPopupDesc.textContent = item.querySelector("p").textContent;
//     industryPopup.classList.add("show");
//   });
// });

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
  reverseDirection: false,
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 1500,
});
