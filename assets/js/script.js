let searchForm = document.querySelector('.header__search-form');
let shoppingCart = document.querySelector('.header__shopping-cart');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
}