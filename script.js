document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    // Toggle mobile menu open/close on hamburger click
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Hide the menu after clicking a nav link (for better UX on mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  });
  