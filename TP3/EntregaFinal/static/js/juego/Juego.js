"use strict"
class Juego{
    constructor(tipoJuego, jugador1, jugador2, canvas){
        this.tipoJuego = tipoJuego;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        let filas = this.tipoJuego+2;
        let columnas = this.tipoJuego+3;
        this.cantFichas = (filas*columnas)/2;
        this.tamFicha = 60-(5*(this.tipoJuego-4));
        this.tablero = new Tablero((this.canvas.width-((columnas)*this.tamFicha))/2, this.canvas.height-(filas)*this.tamFicha,"blue", this.ctx,filas, columnas, this.tamFicha);
        this.iniciar();
    }
    iniciar(){
        this.fichasIniciales();
        console.log(backgroundImage)
        this.tablero.draw();
        /*
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.arc(140, 140, this.tamFicha/2-5, 0, Math.PI*2);
        this.ctx.fill();
        this.ctx.closePath();
        */
        //this.ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    }
    fichasIniciales(){
        let xPosicionJ1 = this.tamFicha/2-5;
        let xPosicionJ2 = this.canvas.width - this.tamFicha/2;
        this.drawFichaJugador(xPosicionJ1, 1, this.jugador1);
        this.drawFichaJugador(xPosicionJ2, 2, this.jugador2);
    }
    drawFichaJugador(xPosicion, jugador, tipo){
        let posY = this.canvas.height-(this.tipoJuego+2)*this.tamFicha+(this.tipoJuego*(this.tipoJuego/3));
        for(let fila = 0;fila<this.tipoJuego+3;fila++){
            let posX = xPosicion;
            for(let col = 0;col<this.tipoJuego-1;col++){
                let ficha = new Ficha(posX, posY, this.tamFicha/2-5, "red", this.ctx, jugador, tipo, false);
                ficha.draw();
                jugador===1 ? posX+=this.tamFicha-(5+(this.tipoJuego/4)): posX-=this.tamFicha-(5+(this.tipoJuego-4));
            }
            posY+=this.tamFicha-5;
        }
    }
    getImageJ1(){
        const image = new Image();
        image.src = `fichas/android${this.jugador1}.png`
        return image;
    }
    getImageJ2(){
        const image = new Image();
        image.src = `fichas/ios${this.jugador2}.png`
        return image;
    }
}


//const backgroundImage = new Image();
//backgroundImage.src = "background-game.jpg"

console.log(canvas.width)
console.log(ctx)
