let body = document.querySelector('body');
let homeSection = document.querySelector('.home');
let searchForm = document.querySelector('.header__search-form');
let shoppingCart = document.querySelector('.header__shopping-cart');
let loginForm = document.querySelector('.header__login-form');
let navbar = document.querySelector('.header__navbar');
let buttons = document.querySelectorAll('.header__icons--item');
let currentTheme = localStorage.getItem('currentTheme');

function funcionalityBtns() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }

  document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('u-active');
    shoppingCart.classList.remove('u-active');
    loginForm.classList.remove('u-active');
    navbar.classList.remove('u-active');
  }

  document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('u-active');
    searchForm.classList.remove('u-active');
    loginForm.classList.remove('u-active');
    navbar.classList.remove('u-active');
  }

  document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('u-active');
    shoppingCart.classList.remove('u-active');
    searchForm.classList.remove('u-active');
    navbar.classList.remove('u-active');
  }

  document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('u-active');
    shoppingCart.classList.remove('u-active');
    searchForm.classList.remove('u-active');
    loginForm.classList.remove('u-active');
  }

  currentTheme && body.classList.add('dark-theme');

  document.querySelector('#theme-btn').onclick = () => {
    body.classList.toggle('dark-theme');
    homeSection.classList.toggle('filter');
    navbar.classList.remove('u-active');
    shoppingCart.classList.remove('u-active');
    searchForm.classList.remove('u-active');
    loginForm.classList.remove('u-active');

    body.classList.contains('dark-theme')
      ? localStorage.setItem('currentTheme', 'dark-theme')
      : localStorage.removeItem('currentTheme')
  }

  window.onscroll = () => {
    navbar.classList.remove('u-active');
    shoppingCart.classList.remove('u-active');
    searchForm.classList.remove('u-active');
    loginForm.classList.remove('u-active');
  }
}

funcionalityBtns();

var swiper = new Swiper(".products__product", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  effect: "cards",
  grabCursor: true,
});

var swiper = new Swiper(".review-slider--mobile", {
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  slidesPerView: 1,
});