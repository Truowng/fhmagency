const testimonialsThumb = new Swiper('.blog-orther .blog-orther-list .swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 73,
    slidesPerGroup: 1,
    loop: true,
    slideToClickedSlide: true,
    speed: 1000,
    breakpoints: {
        200: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        392: {
            slidesPerView: 1.75,
            spaceBetween: 20,
          },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 73,
          }
    },
    navigation: {
        nextEl: '.blog-orther .swiper-button-next',
        prevEl: '.blog-orther .swiper-button-prev',
    }
}) || false;