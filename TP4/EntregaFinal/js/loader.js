window.addEventListener('load', () => {
    const cont = document.querySelector('.contenedorLoader');
    const loaderText = document.querySelector('.loader-text');

    let porcentaje = 0;
    const intervalo = 100;
    const duracion = 5000;
    const pasos = duracion / intervalo;

    const actualizarPorcentaje = () => {
        porcentaje += 100 / pasos;
        if (porcentaje <= 100) {
            loaderText.textContent = Math.round(porcentaje) + '%';
        } else {
            clearInterval(animacion);
            cont.style.opacity = 0;
            cont.style.visibility = 'hidden';
        }
    };

    const animacion = setInterval(actualizarPorcentaje, intervalo);
});