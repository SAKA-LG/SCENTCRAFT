  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("mobile-menu");

    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("menu-visible");
      navMenu.classList.toggle("menu-hidden");
    });
  });