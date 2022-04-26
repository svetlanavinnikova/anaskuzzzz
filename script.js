const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // spaceBetween: '10',
    slidesPerView: '3',
    centredSlides: true,
    allowTouchMove: true,
    watchOverflow: true,
    
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    autoplay: true,
    direction: 'horizontal',
    loop: false,
    // spaceBetween: '10',
    slidesPerView: '1',
    centredSlides: true,
    allowTouchMove: true,
    watchOverflow: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    
  });