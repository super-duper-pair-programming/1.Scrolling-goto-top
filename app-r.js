const SCROLL_BREAK_POINT = 300;
const $scrollIcon = document.querySelector('.scroll-icon');

const toggleGoToTopBtn = () => {
  $scrollIcon.style.display = window.scrollY > SCROLL_BREAK_POINT ? 'block' : 'none';
};

window.addEventListener('scroll', _.throttle(toggleGoToTopBtn, 100));

$scrollIcon.addEventListener('click', () => window.scroll(0, 0));

// [변경사항]
// - SCROLL_BREAK_POINT를 변수로 분리하여 상수값이 변하더라도 코드의 유지보수가 간편하도록 하였다.
// - if ... else문을 삼항연산자로 표현하여 가독성을 높였다.
// - toggleGoToTopBtn 함수는 여러 번 사용되지는 않지만 eventListener가 어떤 일을 하는지 한 눈에 알 수 있도록 하기 위해 함수로 분리하였다.
