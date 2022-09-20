const 이보다_많이_스크롤하면_버튼이_나타남 = 300;

const $스크롤_아이콘 = document.querySelector('.scroll-icon');

const 페이지_최상단으로_이동하는_버튼_표시여부_결정해 = () => {
  $스크롤_아이콘.style.display = window.scrollY > 이보다_많이_스크롤하면_버튼이_나타남 ? 'block' : 'none';
};

window.addEventListener('scroll', _.throttle(페이지_최상단으로_이동하는_버튼_표시여부_결정해, 100));

$스크롤_아이콘.addEventListener('click', () => window.scroll(0, 0));
