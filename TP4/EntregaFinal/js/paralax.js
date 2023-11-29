const personaje1 = document.querySelector("#personaje1");
const hombreAraña = document.querySelector("#personaje2");
const hombreArañaNegro = document.querySelector("#personaje3");
const hombreArañaNegroChico = document.querySelector("#personaje3Chico");
const edificio1 = document.querySelector("#edificio1");
const edificio2 = document.querySelector("#edificio2");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    let nuevaPosicion = scroll * 0.4;
    let nuevaPosicionMayor = scroll * 0.5;
    let nuevaPosicionMenor = scroll * 0.3;
    let nuevaPos = scroll * 0.2;
    let nuevoTamaño = 1 + scroll * 0.001;
    let nuevoTamañoChico = 1 - scroll * 0.001;
    if (scroll < 500) {
        personaje1.style.transform = 'scale(' + nuevoTamañoChico + ')';
        hombreAraña.style.left = -638 - nuevaPosicion + "px";
        hombreAraña.style.transform = 'scale(' + nuevoTamaño + ')';
        hombreArañaNegro.style.top = 335 + nuevaPosicionMenor + "px";
        hombreArañaNegro.style.left = 650 + nuevaPos + "px";
        hombreArañaNegroChico.style.top = 335 + nuevaPos + "px";
        edificio1.style.left = 0 - nuevaPosicion + "px";
        edificio1.style.transform = 'scale(' + nuevoTamañoChico + ')';
        edificio1.style.top = 144 + nuevaPosicionMayor + "px";
        edificio2.style.left = 385 - nuevaPosicionMayor + "px";
        edificio2.style.transform = 'scale(' + nuevoTamañoChico + ')';
        edificio2.style.top = 570 + nuevaPosicion + "px";
    }
});