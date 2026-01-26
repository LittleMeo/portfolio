// QUERY SELECTOR
const burgerMenu = document.querySelector('.nav__burger');
const burgerBtn = document.querySelector('.nav__button');
const burgerLinks = document.querySelectorAll('.burger__link');
const body = document.querySelector('.body')


// FUNCTION
const openBurger = () => {
  burgerMenu.classList.add("burger__menu--active");
};

const closeBurger = () => {
  burgerMenu.classList.remove("burger__menu--active");
};

const burgerActive = () => {
  burgerBtn.classList.add("nav__burger--active");
};

const burgerDisabled = () => {
  burgerBtn.classList.remove("nav__burger--active");
};

// lock scroll bar when open window
const lockScroll = () => {
  if (body.classList.contains("body--scroll-lock")) {
    body.classList.remove("body--scroll-lock");
  } else {
    body.classList.add("body--scroll-lock");
  }
};


// close burgerMenu clicked on each nav-link
burgerLinks.forEach((item) => {
  item.addEventListener("click", () => {
    closeBurger();
    lockScroll();
  });
});


// ACTION

// open and close burgerMenu
burgerBtn.addEventListener("click", () => {
  if (
    burgerMenu.classList.contains("burger__menu--active")
  ) {
    closeBurger();
    lockScroll();
    burgerDisabled();
  } else {
    openBurger();
    lockScroll();
    burgerActive();
  }
});