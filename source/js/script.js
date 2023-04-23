let navMain = document.querySelector('.main-navigation');
let menuToggle = document.querySelector('.main-header__menu-toggle');

navMain.classList.remove('main-navigation--nojs');

menuToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

menuToggle.addEventListener('click', function () {
  if (menuToggle.classList.contains('main-header__menu-toggle--closed')) {
    menuToggle.classList.remove('main-header__menu-toggle--closed');
    menuToggle.classList.add('main-header__menu-toggle--opened');
  } else {
    menuToggle.classList.add('main-header__menu-toggle--closed');
    menuToggle.classList.remove('main-header__menu-toggle--opened');
  }
});
