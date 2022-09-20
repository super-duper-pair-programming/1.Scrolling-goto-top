const SCROLL_BREAK_POINT = 300;
const $scrollIcon = document.querySelector('.scroll-icon');

const toggleGoToTopBtn = () => {
  $scrollIcon.style.display = window.scrollY > SCROLL_BREAK_POINT ? 'block' : 'none';
};

window.addEventListener('scroll', _.throttle(toggleGoToTopBtn, 100));

$scrollIcon.addEventListener('click', () => window.scroll(0, 0));
