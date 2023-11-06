document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const toggleButton = document.querySelector("#menuicon");
    const closeButton = document.querySelector(".close-btn");
  
    toggleButton.addEventListener("click", function () {
      burgerMenu.style.width = "280px";
    });
  
    closeButton.addEventListener("click", function () {
      burgerMenu.style.width = "0";
    });
  });