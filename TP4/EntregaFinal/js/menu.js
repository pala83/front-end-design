let itemsMenu = document.querySelector('.itemsMenu');
let menu = document.getElementById('menu');
menu.addEventListener('click', ()=> {
    if (menu.classList.contains('open')) {
        menu.classList.remove("open");
        menu.classList.add('menu');
        itemsMenu.classList.remove('show');
    }
    else {
        menu.classList.remove('menu');
        menu.classList.add("open");
        itemsMenu.classList.add('show');
    }
});