const menuBtns = document.querySelectorAll("#menu__btn");
const header = document.querySelector(".header");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    header.classList.toggle("show");
  });
});

const swiper = new Swiper(".swiper", {
  spaceBetween: 400,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
