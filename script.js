const toggleMenuBtn = document.querySelector('.toggle-menu-btn');
const menu = document.querySelector('.menu');

toggleMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('expanded');
});
