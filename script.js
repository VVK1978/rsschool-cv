const closeBtn = document.getElementById('close__btn');
const burger = document.querySelector('.burger');
closeBtn.addEventListener('click', () => {
  burger.classList.add('opened');
});
const itemBurger = document.querySelectorAll('.navigation__menu-burger');
itemBurger.forEach((element) =>
  element.addEventListener('click', (e) => {
    closeBtn.click();
  })
);
document.body.addEventListener('click', (e) => {
  if (closeBtn.classList.value[1] === 'active' || e.y > 468) {
    burger.classList.remove('opened');
    closeBtn.click();
  }
});
const projectImageSrc = ['./img/oz.png', './img/pf.png', './img/vp.png', './img/efk.png'];
const projectLinks = [
  'https://rolling-scopes-school.github.io/vvk1978-JSFE2021Q1/online-zoo/pages/main/',
  'https://rolling-scopes-school.github.io/vvk1978-JSFE2021Q1/photo-filter/',
  'https://rolling-scopes-school.github.io/vvk1978-JSFE2021Q1/virtual-piano/',
  'https://rolling-scopes-school.github.io/vvk1978-JSFE2021Q1/english-for-kids-base/build/',
];
const sliderDescriptions = [
  'Project - "Online ZOO". HTML,CSS,JS.',
  'Project - "Photo-philter". HTML,CSS,JS.',
  'Project - "Virtual Piano". HTML,CSS,JS.',
  'Project - "English For Kids". HTML,CSS,JS,SPA.',
];
const projectLink = document.querySelector('.project-link');
const projectImage = document.querySelector('.slide-image');
const slider = document.querySelector('.slider');
const slideDescription = document.querySelector('.slide-image-description');
const dots = document.querySelectorAll('.slider-dot');
let dotActive = 0;
dots.forEach((element) =>
  element.addEventListener('click', (event) => {
    dots[dotActive].classList.remove('active');
    dotActive = +event.target.dataset.dot;
    dots[dotActive].classList.add('active');
    projectImage.setAttribute('src', projectImageSrc[dotActive]);
    projectLink.setAttribute('href', projectLinks[dotActive]);
    slideDescription.textContent = sliderDescriptions[dotActive];
  })
);
