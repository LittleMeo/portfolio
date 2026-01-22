// querySelector
const burgerMenu = document.querySelector('.nav__burger');
const burgerBtn = document.querySelector('.nav__button');

// functions
const openBurger = () => {
    burgerMenu.classList.add('burger__menu--active');
};

const closeBurger = () => {
    burgerMenu.classList.remove('burger__menu--active')
};