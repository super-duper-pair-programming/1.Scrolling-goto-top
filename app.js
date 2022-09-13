const $scrollIcon = document.querySelector('.scroll-icon');

function toggleGoToTopBtn() {
  if (window.scrollY > 300) $scrollIcon.style.display = 'block';
  else $scrollIcon.style.display = 'none';
}

window.addEventListener('scroll', _.throttle(toggleGoToTopBtn, 100));

$scrollIcon.addEventListener('click', () => window.scroll(0, 0));
