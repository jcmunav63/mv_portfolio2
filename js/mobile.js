// JavaScript file for Mobile Menu code

const menuBtn = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.toolbar-2');

menuBtn.addEventListener('click', () => {
  overlay.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
});

overlay.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
});
