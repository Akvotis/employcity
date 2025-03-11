"use strict";

import { selectInit } from "./modules/select.js";
import { fileUpload } from "./modules/fileUpload.js";

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".js-burger-menu");
  const mobileMenu = document.querySelector(".js-mobile-menu");
  const header = document.querySelector(".header");
  
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
  
  // Закрытие меню при клике вне его области
  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !burgerMenu.contains(event.target) &&
      !header.contains(event.target)
    ) {
      burgerMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
  });

  const range = document.querySelector(".js-range");
  const rangeViewValue = document.querySelector(".js-range-value");

  // обход бага, когда в фф ползунок остается на месте после перезагрузки страницы
  range.value = 0;

  range.addEventListener("input", (event) => {
    rangeViewValue.textContent = `${event.target.value} %`;
  });

  selectInit();
  fileUpload();
});