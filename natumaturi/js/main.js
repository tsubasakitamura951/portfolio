document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const hamburgerOverlay = document.querySelector(".hamburger-overlay");

  hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    mobileNav.classList.toggle("active");
    hamburgerOverlay.classList.toggle("active");
  });

  hamburgerOverlay.addEventListener("click", () => {
    closeHamburgerMenu();
  });

  const links = mobileNav.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeHamburgerMenu();
    });
  });

  function closeHamburgerMenu() {
    mobileNav.classList.remove("active");
    hamburgerButton.classList.remove("active");
    hamburgerOverlay.classList.remove("active");
  }
});
