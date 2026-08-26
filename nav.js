document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('nav.sidebar');
  const overlay = document.querySelector('.overlay');

  function closeMenu() {
    toggle.classList.remove('open');
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  function toggleMenu() {
    toggle.classList.toggle('open');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  }

  toggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // Close menu when a nav link is clicked (nice on mobile)
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
