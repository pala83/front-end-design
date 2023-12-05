const canvas = document.querySelector("#juego-canvas");
const ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
const gameForm = document.querySelector("#game-form");
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
        opcion == 1 ? ficha.style.background = `url(static/assets/juego/fichas/android${contador}.png) center center / cover no-repeat` : ficha.style.background = `url(static/assets/juego/fichas/ios${contador}.png) center center / cover no-repeat`;
        contador++;
    })
}

gameForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = new FormData(gameForm);
    fichaJugador1Seleccionada = parseInt(data.get('jugador-1'));
    fichaJugador2Seleccionada = parseInt(data.get('jugador-2'));
    XEnLineaSeleccionado = parseInt(data.get('numero-en-linea'));

    console.log(fichaJugador1Seleccionada + " - " + fichaJugador2Seleccionada + " - " + XEnLineaSeleccionado)
    document.querySelector("#videoJuego").classList.add("oculto");
    document.querySelector("#overlayJuego").classList.add("oculto");
    document.querySelector("#canvas").classList.remove("oculto");
    empezarAJugar();
})
function empezarAJugar(){
    isMouseDown = false;
    ultimaFichaClickeada = null;
    matriz = new Matriz(0, 0, ctx, "red", 0, 0, 0, 0);
    timer = new Timer();
    fichas = [];
    turno = 1;
    Ganador = 0;
    tiempoRestante = 300
    fichaTerminoDeCaer = false

    timerInterval = setInterval(actualizarTiempo, 1000);
    setTimeout(function () { drawAll(); }, 500);
    setTimeout(function () { drawAll(); }, 1000);
    setTimeout(function () { drawAll(); }, 1500);
    setTimeout(function () { drawAll(); }, 3000);
    crearJuego(); 
}

const imageData = ctx.createImageData(canvasWidth, canvasHeight);
const startGameButton = document.getElementById("start-game");

const backgroundImage = new Image();
backgroundImage.src = 'static/assets/juego/imagenes-juego/background-game.jpg';

let hayEmpate = false;
let isMouseDown;
let ultimaFichaClickeada;
let matriz;
let timer;
let fichas;
let turno;
let PosYFinDeLaMatriz;
let Ganador;

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

let tiempoRestante;
let fichaTerminoDeCaer;

let botonReiniciar;
let fichaSeleccionadaJugador1 = 1;
let fichaSeleccionadaJugador2 = 1;

let fichaJugador1Seleccionada;
let fichaJugador2Seleccionada;
let XEnLineaSeleccionado;

let anchoCasilla = 40;
let altoCasilla = anchoCasilla;

function crearJuego() {
    let cantidadDeFichas = ((XEnLineaSeleccionado * 10) + 2) / 2
    crearFichasJugador(1, cantidadDeFichas);
    crearFichasJugador(2, cantidadDeFichas);
    crearMatriz();
    crearBotones();
}

function drawAll() {
    clearCanvas();
    matriz.draw();
    timer.drawTimer(tiempoRestante, canvasWidth);
    drawBotones();
    mostrarTurnoDelJugador();

    let ficha;
    if (Ganador != 0) {
        mostrarGanador(Ganador)
    }

    if(hayEmpate){
        mostrarEmpate()
    }

    for (let i = 0; i < fichas.length; i++) {
        ficha = fichas[i];
        if (Ganador != 0 || hayEmpate) {
            ficha.setBrilloExterior(false);
            for (let i = 0; i < fichas.length; i++) {
                const element = fichas[i];
                element.setEstaFija(true);
            }
        }
        else if (ficha.getJugador() == turno && ficha.estaEnLaPosicionIncial()) {
            ficha.setBrilloExterior(true);
        }
        else {
            ficha.setBrilloExterior(false);
        }
        ficha.draw();
    }
}

function crearBotones() {
    botonReiniciar = new Boton(canvasWidth - 140, 70, 'red', ctx, 50, 50, "static/assets/juego/imagenes-juego/IconoReiniciar.png");
}

function drawBotones() {
    if (botonReiniciar != null) {
        botonReiniciar.draw();
    }
}

function crearFichasJugador(numeroDelJugador, cantidad) {
    let contador = 0;
    let limite = 12;
    let anchoFicha = anchoCasilla;
    let posX;

    if (numeroDelJugador === 1)
        posX = 100;
    else
        posX = canvasWidth - 100;

    let aux = 0;
    for (let i = 0; i < cantidad; i++) {

        if (contador <= limite) {
            addFicha(posX, (20 * aux + 250-(10*(XEnLineaSeleccionado-4))), numeroDelJugador);
            contador++;
            aux++;
        }
        else {
            if (numeroDelJugador === 1)
                posX += anchoFicha;
            else
                posX -= anchoFicha;
            aux = 0;
            limite += 12;
            addFicha(posX, (20 * aux + 250), numeroDelJugador);
            contador++;
        }
    }
}

function addFicha(posX, posY, numeroDelJugador) {
    let ficha;
    if (numeroDelJugador === 1) {
        ficha = new Ficha(posX, posY, "", ctx, altoCasilla / 2, numeroDelJugador, fichaJugador1Seleccionada);
    }
    else {
        ficha = new Ficha(posX, posY, "", ctx, altoCasilla / 2, numeroDelJugador, fichaJugador2Seleccionada);
    }
    fichas.push(ficha);
}

function clearCanvas() {
    ctx.drawImage(backgroundImage, 0, 0, canvasWidth, canvasHeight);
}

function crearMatriz() {
    let cantC = XEnLineaSeleccionado + 3;
    let cantF = XEnLineaSeleccionado + 2;
    let posX = (canvasWidth - (cantC * anchoCasilla)) / 2;
    let posY = 180-(10*(XEnLineaSeleccionado-4));

    PosYFinDeLaMatriz = posY + (altoCasilla * cantF);

    matriz = new Matriz(posX, posY, ctx, "", anchoCasilla, altoCasilla, XEnLineaSeleccionado);
}

function onMouseDown(e) {
    isMouseDown = true;
    verificarSiSeClickeoAlgunBoton(e.offsetX, e.offsetY);

    if (ultimaFichaClickeada != null && Ganador==0) {
        ultimaFichaClickeada.setResaltado(false);
        ultimaFichaClickeada = null;
    }

    let figuraClickeada = encontrarFiguraClickeada(e.offsetX, e.offsetY);

    if (figuraClickeada != null
        && figuraClickeada.getJugador() === turno
        && !figuraClickeada.getEstaFija()) {
        ultimaFichaClickeada = figuraClickeada;
    }

    drawAll();
}

function encontrarFiguraClickeada(x, y) {
    for (let i = 0; i < fichas.length; i++) {
        const element = fichas[i];
        if (element.isPointInside(x, y)) {
            return element;
        }
    }
}

function verificarSiSeClickeoAlgunBoton(x, y) {
    if (botonReiniciar.isPointInside(x, y)) {
        clearCanvas();
        clearInterval(timerInterval);
        empezarAJugar();
    }
}

function onMouseMove(e) {
    if (isMouseDown &&
        ultimaFichaClickeada != null
        && !ultimaFichaClickeada.getEstaFija()) {
        ultimaFichaClickeada.setPosition(e.offsetX, e.offsetY);
        drawAll();
    }
}

function onMouseUp(e) {
    isMouseDown = false;
    const fichaSoltada = encontrarFiguraClickeada(e.offsetX, e.offsetY);

    if (fichaSoltada && !fichaSoltada.getEstaFija()) {
        fichaSoltada.setResaltado(false);

        drawAll();

        let fichaEntroEnLaMatriz = matriz.verificarSiFichaEntroALamatriz(fichaSoltada);
        if (fichaEntroEnLaMatriz != null) {
            cambiarTurno();
            let filaDondeSePusoLaFicha = fichaEntroEnLaMatriz.fila;
            let columnaDondeSePusoLaFicha = fichaEntroEnLaMatriz.columna;

            if (matriz.verificarSiHayGanador(fichaSoltada, filaDondeSePusoLaFicha, columnaDondeSePusoLaFicha)) {
                mostrarGanador(fichaSoltada.getJugador());
            }
            else if (matriz.verificarEmpate()) {
                hayEmpate = true;
                mostrarEmpate();
            }

            fichaSoltada.setEstaFija(true);
            animateFichaToInitialPosition(fichaSoltada, calcularX(columnaDondeSePusoLaFicha), calcularY(filaDondeSePusoLaFicha), true);

        } else {
            animateFichaToInitialPosition(fichaSoltada,
                fichaSoltada.getPosInicialX(), fichaSoltada.getPosInicialY(), false);
        }
    }
}

function calcularY(filaDondeSePusoLaFicha) {

    let resultado = matriz.posY + filaDondeSePusoLaFicha * altoCasilla + altoCasilla / 2;
    return resultado;
}

function calcularX(columnaDondeSePusoLaFicha) {
    resultado = matriz.posX + columnaDondeSePusoLaFicha * anchoCasilla + anchoCasilla / 2;
    return resultado
}

function animateFichaToInitialPosition(ficha, finalX, finalY, rebotar) {

    const currentX = ficha.getPosX();
    const currentY = ficha.getPosY();

    const animationDuration = 400;
    const bounceDuration = 200;

    const framesPerSecond = 60;
    const totalFrames = (animationDuration / 1000) * framesPerSecond;
    const bounceFrames = (bounceDuration / 1000) * framesPerSecond;

    const xStep = (finalX - currentX) / totalFrames;
    const yStep = (finalY - currentY) / totalFrames;

    let currentFrame = 0;

    function animate() {
        currentFrame++;
        if (currentFrame <= totalFrames) {
            const newX = currentX + xStep * currentFrame;
            const newY = currentY + yStep * currentFrame;

            ficha.setPosition(newX, newY);
            drawAll();

            if (currentFrame === totalFrames && rebotar == true) {
                animateBounce(finalX, finalY);
            } else {
                requestAnimationFrame(animate);
            }
        }
    }

    function animateBounce(finalX, finalY) {
        let currentBounceFrame = 0;
        function bounce() {
            currentBounceFrame++;
            if (currentBounceFrame <= bounceFrames) {
                const bounceY = finalY - 40 * Math.sin((currentBounceFrame / bounceFrames) * Math.PI);
                ficha.setPosition(finalX, bounceY);
                drawAll();
                requestAnimationFrame(bounce);

            } else {
                drawAll();
            }
        }
        bounce();
    }
    animate();

}


function mostrarTurnoDelJugador() {
    let XdelTurno;
    let YdelTurno = 200 -(10*(XEnLineaSeleccionado-4));
    turno === 1 ? XdelTurno = 130 : XdelTurno = (canvasWidth - 140)
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.font = "bold 20px Nunito";
    ctx.textAlign = "center";

    ctx.shadowColor = "#C001A7";
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 4;

    ctx.fillText(`Jugador ${turno}, tu turno`, XdelTurno, YdelTurno);
    ctx.shadowColor = "none";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
}

function cambiarTurno() {
    turno = (turno === 1) ? 2 : 1;
}

function actualizarTiempo() {
    if (tiempoRestante > 0) {
        tiempoRestante--;
        timer.drawTimer(tiempoRestante, canvasWidth);

    } else {
        clearInterval(timerInterval); 
        hayEmpate = true;
        drawAll();
    }
}

function mostrarGanador(ganador) {
    Ganador = ganador;
    const texto = `Ganador: Jugador ${ganador}`;
    ctx.font = "40px Nunito";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";

    ctx.shadowColor = "#C001A7";
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 4;

    ctx.fillText(texto, canvasWidth / 2, canvasHeight -50);
    clearInterval(timerInterval);
}


function mostrarEmpate() {
    let texto = `Empate`;
    ctx.font = "40px Nunito";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";

    ctx.shadowColor = "#C001A7";
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 4;
    ctx.fillText(texto, canvasWidth / 2, canvasHeight -50);
    clearInterval(timerInterval);
}