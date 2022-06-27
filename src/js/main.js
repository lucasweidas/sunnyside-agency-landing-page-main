const header = document.querySelector('[data-header]');

header.addEventListener('click', evt => {
  if (evt.target.matches('[data-menu-btn]')) {
    toggleNavigationMenu(evt.target);
    return;
  }
});

function toggleNavigationMenu(target) {
  header.classList.toggle('active');

  if (header.classList.contains('active')) {
    target.setAttribute('aria-expanded', 'true');
    target.setAttribute('aria-label', 'Close menu');
    return;
  }
  target.setAttribute('aria-expandend', 'false');
  target.setAttribute('aria-label', 'Open menu');
}
