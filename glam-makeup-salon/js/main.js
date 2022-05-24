let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('change');
    navbar.classList.toggle('active');
};
var swiper = new Swiper(".mySwiper", {
  zoom: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.querySelector(".side-panel-toggle").addEventListener("click", () => {
  document.querySelector(".slide").classList.toggle("side-panel-open")
})