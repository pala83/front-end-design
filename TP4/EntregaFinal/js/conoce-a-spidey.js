let inicialPosicion = 900;
window.addEventListener('scroll', ()=> {
    let scrollPosicion = window.scrollY;
    if (scrollPosicion >= inicialPosicion) {
        let imgPosicion = inicialPosicion - (scrollPosicion - inicialPosicion) * 0.5;
        document.querySelector('.duende').style.top = imgPosicion + 'px';
    }
});
