const projectHighlight = new Swiper(".project-highlight .swiper", {
    direction: "horizontal",
    loop: true,
    speed: 300,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 0,
    watchSlidesProgress: true,
}) || false;


if(window.innerWidth > 576) {
    const projectDetailRelated = new Swiper(".project-detail-related .swiper", {
        direction: "horizontal",
        speed: 1000,
        spaceBetween: 25,
        watchOverflow: true,
        breakpoints: {
            576 : {
                slidesPerView: 2, 
                spaceBetween: 25, 
            },
            991: { 
                slidesPerView: 3, 
                spaceBetween: 25,
            },
          },
        navigation: {
          nextEl: ".project-detail-related .swiper-button-next",
          prevEl: ".project-detail-related .swiper-button-prev",
        },
    }) || false;
}