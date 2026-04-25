document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        once: true,
        duration: 700,
        easing: "ease-out"
});
new Swiper("#demo-swiper", {
    loop: true,
    autoplay: { delay: 2200 },
    pagination: { el: "#demo-swiper .swiper-pagination", clickable: true }
});
});