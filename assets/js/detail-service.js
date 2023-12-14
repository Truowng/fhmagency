const displaySlider = new Swiper(".display-slider", {
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 62,
});

const servicePartner = new Swiper(".services-partner-slider", {
  speed: 1500,
  autoplay: {
    delay: 20,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 7,
  grid: {
    rows: 6,
    fill: "row",
  },
  spaceBetween: 0,
});

const industryList = document.querySelectorAll(".industry-item");
const industryPopup = document.querySelector(".industry-popup");
const industryPopupImg = industryPopup.querySelector("img");
const industryPopupTitle = industryPopup.querySelector("h3");
const industryPopupDesc = industryPopup.querySelector("p");
industryPopupTitle.addEventListener("click", () => {
  industryPopup.classList.remove("show");
});
Array.from(industryList).forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    industryPopupImg.src = item.querySelector("img").src;
    industryPopupTitle.textContent = item.querySelector("h3").textContent;
    industryPopupDesc.textContent = item.querySelector("p").textContent;
    industryPopup.classList.add("show");
  });
});
