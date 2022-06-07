let searchForm = document.querySelector('.header__search-form');
let shoppingCart = document.querySelector('.header__shopping-cart');
let loginForm = document.querySelector('.header__login-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');

}