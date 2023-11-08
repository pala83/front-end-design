const btnJugar = document.querySelector("#jugar");
const fichasJugador = gameForm.querySelectorAll(".fichas");
let opcion = 1;
fichasJugador.forEach((fichas)=>{
    aplicarSeleccion(fichas);
    agregarImagenes(fichas, opcion);
    opcion++;
})
const opcionJuego = gameForm.querySelector(".opciones-juego");
aplicarSeleccion(opcionJuego);

function aplicarSeleccion(conjunto){
    const fichaDeSeleccion = conjunto.querySelectorAll("label");
    fichaDeSeleccion.forEach((ficha)=>{
        ficha.addEventListener("click",(e)=>{
            borrarSeleccion(conjunto);
            ficha.classList.add("seleccionado");
        })
    })
}

function borrarSeleccion(conjunto){
    const fichaDeSeleccion = conjunto.querySelectorAll("label");
    fichaDeSeleccion.forEach((ficha)=>{
        ficha.classList.remove("seleccionado");
    })
}

function agregarImagenes(conjunto,opcion){
    const fichaDeSeleccion = conjunto.querySelectorAll("label");
    let contador=1;
    fichaDeSeleccion.forEach((ficha)=>{
        opcion == 1 ? ficha.style.background = `url(static/js/juego/fichas/android${contador}.png) center center / cover no-repeat` : ficha.style.background = `url(static/js/juego/fichas/ios${contador}.png) center center / cover no-repeat`;
        contador++;
    })
}
