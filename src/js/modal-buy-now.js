  import Swiper from './swiper';
  // import Swiper styles
  // import 'swiper/css';


var swiper2 = new Swiper('.buy-now-slider-container', {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup:1,
      spaceBetween: 16,
    },
  },

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.buy-now-swiper-pagination',
    clickable: true,  
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});