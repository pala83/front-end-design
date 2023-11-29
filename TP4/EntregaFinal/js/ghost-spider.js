let inicialPosicionAuto = 1100;
window.addEventListener('scroll', ()=> {
    var scrollPosicion = window.scrollY;
    if (scrollPosicion >= inicialPosicionAuto) {
        let imgPosicionAuto = inicialPosicionAuto - (scrollPosicion - inicialPosicionAuto) * 0.8;
        document.querySelector('.autosAndando').style.top = imgPosicionAuto + 'px';
    }
});