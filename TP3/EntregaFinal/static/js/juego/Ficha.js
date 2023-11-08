"use strict"
class Ficha extends Figura{
    constructor(x, y, radio, color, ctx, jugador, tipo, draweable=true){
        super(x,y,color,ctx)
        this.radio = radio;
        this.jugador = jugador;
        this.tipo = tipo;
        this.draweable=draweable;
        this.img = new Image();
        this.getImagen(jugador)
    }
    draw() {

        this.ctx.beginPath();
        //super.draw();
        this.ctx.arc(this.x, this.y, this.radio, 0, Math.PI*2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.drawImage(this.img, this.x-this.radio-6, this.y-this.radio-6);
        this.ctx.closePath();
        this.img.onload = ()=>{};
        console.log("imagen: ", this.img);

    }
    getImagen(jugador){
        if(jugador===1)
            this.img.src = `fichas/android${this.tipo}.png`;
    }
}