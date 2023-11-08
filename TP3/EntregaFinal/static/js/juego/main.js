const canvas = document.querySelector("#juego-canvas");
const ctx = canvas.getContext("2d");
const gameForm = document.querySelector("#game-form");
gameForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = new FormData(gameForm);
    const tipoJuego = data.get('numero-en-linea');
    const jugador1 = data.get('jugador-1');
    const jugador2 = data.get('jugador-2');
    document.querySelector("#videoJuego").classList.add("oculto");
    document.querySelector("#overlayJuego").classList.add("oculto");
    document.querySelector("#canvas").classList.remove("oculto");
    const juego = new Juego(parseInt(tipoJuego), parseInt(jugador1), parseInt(jugador2), canvas);
})

const backgroundImage = new Image();
backgroundImage.src = "background-game.jpg"