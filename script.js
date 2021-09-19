const closeBtn = document.getElementById('close__btn');
const itemBurger = document.querySelectorAll('.navigation__menu-burger');
itemBurger.forEach(element => element.addEventListener('click', (e) => {
    closeBtn.click();
}));