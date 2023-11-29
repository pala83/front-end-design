let nav = document.querySelector('.imgNavFijo');
let logoChico = document.querySelector('.logoChico');
let logoGrande = document.querySelector('.logo');
let posicionInicial = 185;
let posicionLogo = 0;

window.addEventListener('scroll', ()=> {
    let scrollPosicion = window.scrollY;

    if (scrollPosicion > posicionLogo) {
        let nuevoTamaño = 100 - scrollPosicion * 0.4;
        logoGrande.style.transform = 'scale(' + nuevoTamaño / 100 + ')';
        if (scrollPosicion > posicionInicial) {
            nav.style.display = "flex";
            logoChico.style.display = "flex";
            logoGrande.style.display = "none";
        }
    }
    else {
        nav.style.display = "none";
        logoChico.style.display = "none";
        logoGrande.style.display = "flex";
    }
});