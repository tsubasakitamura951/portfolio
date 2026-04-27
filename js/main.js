document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: true,
    duration: 700,
    easing: "ease-out",
  });
  new Swiper("#demo-swiper", {
    loop: true,
    autoplay: { delay: 2200 },
    pagination: { el: "#demo-swiper .swiper-pagination", clickable: true },
  });
  const hamburgerButton = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });
  // モバイルナビ　の　リンク　を　クリック　したときに　ナビ　を　閉じる
  // const links = document.querySelectorAll(".mobile-nav a");
  const links = mobileNav.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      hamburgerButton.classList.remove("active");
    });
  });
});
