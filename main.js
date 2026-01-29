// QUERY SELECTOR
const burgerMenu = document.querySelector(".nav__burger");
const burgerBtn = document.querySelector(".nav__button");
const burgerLinks = document.querySelectorAll(".burger__link");
const answerItems = document.querySelectorAll(".answer__item");
const answerList = document.querySelector(".answer__list");
const cardButtons = document.querySelectorAll('.card__button');
const overlay = document.querySelector('.window__overlay');
const windowCross = document.querySelector('.window__cross');
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
  
  item.addEventListener("click", () => {
    //close all accordionItems
    closeAllAccordionItems(allItems);

    //open one
    openOneAccordionItem(item);

    //save unique value in localStorage
    saveUniqueLocal(item);
  });
};

const closeAllAccordionItems = (allItems) => {
  allItems.forEach((otherItems) => {
    otherItems.classList.remove("accordion--active");
    otherItems.dataset.activeAccordion = 0;
  });
};

const openOneAccordionItem = (item) => {
  const activeItem = item.classList.contains("accordion--active");
  
  item.dataset.activeAccordion = "1";

  // console.log(window.localStorage.getItem("valueAccordion", item.dataset.activeAccordion));
  // console.log(item.localStorage.getItem("value", "data-active-accordion"));

  if (activeItem) {
    item.classList.remove("accordion--active");
  } else if (!activeItem) {
    item.classList.add("accordion--active");
  }
};

//save in localStorage
const saveUniqueLocal = (item) => {
  window.localStorage.setItem("uniqueID", item.dataset.unique);
}

// lock scroll bar when open window
const lockScroll = () => {
  if (body.classList.contains("body--scroll-lock")) {
    body.classList.remove("body--scroll-lock");
  } else {
    body.classList.add("body--scroll-lock");
  }
};

// toggle modal window
const toggleModalWindow = () => {
  if (body.classList.contains("modal--active")) {
    body.classList.remove("modal--active");
  } else {
    body.classList.add("modal--active");
  }
}

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

// on window load
window.addEventListener("load", (event) => {
  answerItems.forEach((item, index) => {
    if (+index + 1  === +window.localStorage.getItem("uniqueID")) {
      closeAllAccordionItems(answerItems);
      openOneAccordionItem(item);
    } else {
    }
  });
});

// toggle Modal Window

cardButtons.forEach((item) => {
  item.addEventListener('click', () => {
    toggleModalWindow();
  });
});

overlay.addEventListener ('click', () => {
  toggleModalWindow();
})

windowCross.addEventListener('click', () => {
  toggleModalWindow();
})

// TEST
