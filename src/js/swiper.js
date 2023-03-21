

document.querySelectorAll('.swiper').forEach(el => {
  const swiper = new Swiper(el, {
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },

  },
    direction: 'horizontal',
    loop: true,
    
    pagination: {
    el: el.querySelector('.swiper-pagination'),
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
})
  
});