const closeBtn = document.getElementById('close__btn');
const itemBurger = document.querySelectorAll('.navigation__menu-burger');
itemBurger.forEach((element) =>
  element.addEventListener('click', (e) => {
    closeBtn.click();
  })
);
const projectImageSrc = ['./img/oz.png', './img/pf.png', './img/vp.png', './img/efk.png'];
const projectLinks = [
  'https://rolling-scopes-school.github.io/vvk1978-JSFE2021Q1/online-zoo/pages/main/',
  'https://rolling-scopes-school.github.io/vvk1978-JSFE2021Q1/photo-filter/',
  'https://rolling-scopes-school.github.io/vvk1978-JSFE2021Q1/virtual-piano/',
  'https://rolling-scopes-school.github.io/vvk1978-JSFE2021Q1/english-for-kids-base/build/',
];
const projectLink = document.querySelector('.project-link');
const projectImage = document.querySelector('.slider-image');
const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.slider-dot');
let dotActive = 0;
dots.forEach((element) =>
  element.addEventListener('click', (event) => {
    dots[dotActive].classList.remove('active');
    dotActive = +event.target.dataset.dot;
    dots[dotActive].classList.add('active');
    projectImage.setAttribute('src', projectImageSrc[dotActive]);
    projectLink.setAttribute('href', projectLinks[dotActive]);
  })
);
