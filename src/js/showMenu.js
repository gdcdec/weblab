const MenuB = document.querySelector('#nav button');

MenuB.addEventListener('click', () => {
    const sidemenu = document.getElementById('sidemenu');

    sidemenu.classList.toggle('visible');
    MenuB.classList.toggle('rotated');
});
