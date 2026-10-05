
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('nav.sidebar');
  const overlay = document.querySelector('.overlay');
  if (!toggle || !sidebar || !overlay) return;

  function closeMenu() {
    toggle.classList.remove('open');
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', closeMenu);
  sidebar.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
});
