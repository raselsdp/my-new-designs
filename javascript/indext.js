
// header-javascript

const header = document.querySelector("header");


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};



// swiper-slide-javascript

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 80,
    centeredSlides: true,
    speed: 300,
    autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // Full-Web-Page-Animation

  const sr = ScrollReveal ({
    distance: '45px',
    duration: 2900,
    reset: true
  })
  
  sr.reveal('.home-text',{delay:350, origin:'left'})
  sr.reveal('.home-img',{delay:350, origin:'right'})
  
  sr.reveal('#about,.product-card,#sirvice,.swiper-container,.contact-list',{delay:500, origin:'bottom'})
  