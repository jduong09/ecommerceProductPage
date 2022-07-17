document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.getElementById('nav-mobile-hamburger');
  const closeIcon = document.getElementById('nav-mobile-close');
  const headerNav = document.getElementById('header-nav');
  const headerMenuBackground = document.getElementById('header-menu-background');

  hamburgerIcon.addEventListener('click', (e) => {
    e.preventDefault();
    hamburgerIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
    headerNav.classList.remove('hide');
    headerMenuBackground.classList.remove('hide');
  });

  closeIcon.addEventListener('click', (e) => {
    e.preventDefault();

    hamburgerIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
    headerNav.classList.add('hide');
    headerMenuBackground.classList.add('hide');
  });
});