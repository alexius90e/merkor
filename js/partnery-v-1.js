const partneryV1Els = document.querySelectorAll('.partnery-v-1');

partneryV1Els.forEach((partneryV1El) => {
  const swiperEl = partneryV1El.querySelector('.partnery-v-1__slider .swiper');

  const swiper = new Swiper(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1201: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
