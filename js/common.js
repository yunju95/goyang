$(function(){

  // main visual slider
  const autoplay = 5000;
  const swiperMv = new Swiper('.slide_mv', {
      effect: 'fade',
      navigation: {
        nextEl: ".slide_mv .swiper-button-next",
        prevEl: ".slide_mv .swiper-button-prev"
      },
      autoplay: {
        delay: 5000,
      },
        pagination: {
          el: ".page_active",
          clickable: false,
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
          },
      },
      onProgress: move(),
      on: {
        slideChange : function(){
          move();
        }
      }
  });
  function move() {
      let elem = document.getElementById("progress"); 
      let width = 1;
      let autoplayTime = autoplay / 100;
      let id = setInterval(frame, autoplayTime);
      function frame() {
          if (width >= 100) {
              clearInterval(id);
          } else {
              width++; 
              elem.style.width = width + '%'; 
          }
      }
  };
  
  // main tab
  $('.wrap_tabenrolment .link_tab').click(function(e){
    e.preventDefault();
    if($(this).attr('aria-selected', false)){
      $('.wrap_tabenrolment .link_tab').attr('aria-selected', false);
      $(this).attr('aria-selected', true);
    }
  });
  
  // main entrolment slider
  const swiperEntrol = new Swiper('.slide_entrolment', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".slide_entrolment .swiper-button-next",
      prevEl: ".slide_entrolment .swiper-button-prev"
    },
  });
  
  // main popup slider
  const swiperpopup = new Swiper('.slide_popup', {
    spaceBetween: 10,
    pagination: {
      el: '.slide_popup .swiper-pagination',
      type: 'bullets',
    },
  });
});