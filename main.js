window.onload = (event) => {
  // QUERY SELECTOR
  const burgerMenu = document.querySelector(".nav__burger");
  const burgerBtn = document.querySelector(".nav__button");
  const burgerLinks = document.querySelectorAll(".burger__link");
  const answerItems = document.querySelectorAll(".answer__item");
  const answerList = document.querySelector(".answer__list");
  const body = document.querySelector("body");
  
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
  
  const openAccordion = (item, allItems) => {
    const activeItem = item.classList.contains("accordion--active");
    const atrAccordion = item.getAttribute('data-active-accordion');
    item.addEventListener("click", () => {
      allItems.forEach((otherItems) => {
        otherItems.classList.remove("accordion--active");
        otherItems.setAttribute("data-active-accordion", 0);
      });
      
      item.setAttribute("data-active-accordion", 1);
      
      window.localStorage.setItem("valueAccordion", atrAccordion);
      console.log(window.localStorage.getItem("value", atrAccordion));
      // console.log(item.localStorage.getItem("value", "data-active-accordion"));
  
      if (activeItem) {
        item.classList.remove("accordion--active");
      } else if (!activeItem) {
        item.classList.add("accordion--active");
      }
    });
  };
  
  // lock scroll bar when open window
  const lockScroll = () => {
    if (body.classList.contains("body--scroll-lock")) {
      body.classList.remove("body--scroll-lock");
    } else {
      body.classList.add("body--scroll-lock");
    }
  };
  
  // ACTION
  
  // open and close burgerMenu
  burgerBtn.addEventListener("click", () => {
    if (burgerMenu.classList.contains("burger__menu--active")) {
      closeBurger();
      lockScroll();
      burgerDisabled();
    } else {
      openBurger();
      lockScroll();
      burgerActive();
    }
  });
  
  // close burgerMenu clicked on each nav-link
  burgerLinks.forEach((item) => {
    item.addEventListener("click", () => {
      closeBurger();
      lockScroll();
      burgerDisabled();
    });
  });
  
  // open accordion
  
  answerItems.forEach((item) => {
    openAccordion(item, answerItems);
  });
  
  // TEST
};
