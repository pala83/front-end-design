"use strict"
class Tablero extends Figura{
    constructor(x, y, color, ctx, filas, columnas, tamCelda){
        super(x, y, color, ctx);
        this.filas = filas;
        this.columnas = columnas;
        this.tamCelda = tamCelda;
        this.celdas = [];

        for(let i= 0; i<this.filas;i++){
            this.celdas[i] = [];
            for(let j=0; j<this.columnas; j++){
                this.celdas[i][j] = {
                    x: this.x+this.tamCelda*j,
                    y: this.y+this.tamCelda*i,
                    ficha: null,
                };
            }
        }
    }
    draw(){
        for(let i=0; i<this.filas; i++){
            for(let j=0; j<this.columnas; j++){
                let x = this.celdas[i][j].x;
                let y = this.celdas[i][j].y;
                //let celda = this.celdas[i][j].x;

                this.ctx.fillStyle="blue";
                this.ctx.fillRect(x,y,this.tamCelda,this.tamCelda);
                this.ctx.strokeStyle = "black";
                this.ctx.strokeRect(x, y, this.tamCelda, this.tamCelda);

                this.ctx.save();
                this.ctx.globalCompositeOperation = "destination-out";
                this.ctx.beginPath();
                this.ctx.arc(x+this.tamCelda/2, y+this.tamCelda/2, this.tamCelda/2.5, 0, Math.PI*2);
                this.ctx.fill();
                this.ctx.closePath();
                this.ctx.restore();
            }
        }
    }
}