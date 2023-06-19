// JavaScript file for Mobile Menu code

const menuBtn = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".toolbar-2");

menuBtn.addEventListener("click", function () {
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  overlay.classList.remove("show");
});
