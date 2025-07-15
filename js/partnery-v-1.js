const partneryV1Els = document.querySelectorAll('.partnery-v-1');

partneryV1Els.forEach((partneryV1El) => {
  const swiperEl = partneryV1El.querySelector('.partnery-v-1__slider .swiper');

  const swiper = new Swiper(swiperEl, {
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
