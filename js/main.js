// main.js

// 1. AOS Initialization
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true      // whether animation should happen only once
  });
});

// 2. Smooth Scrolling (for browsers that don't support scroll-behavior CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 3. Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
