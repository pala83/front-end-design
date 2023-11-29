const imagenes = document.querySelectorAll('.contenedor img');
document.addEventListener("mousemove", (e) => {
    let ancho = window.innerWidth / 2;
    let alto = window.innerHeight / 2;

    imagenes.forEach((img, index) => {
        let velocidad = (index + 1) * 0.1;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let movimientoEnX = (mouseX - ancho) * (velocidad / 2);
        let movimientoEnY = (mouseY - alto) * (velocidad / 2);

        img.style.transform = 'translate(' + movimientoEnX + 'px, ' + movimientoEnY + 'px)';
    });
});