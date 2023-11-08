"use strict"
class Figura{
    constructor(x, y, color, ctx){
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = ctx;
    }

    setColor(color){
        this.color = color;
    }
    getPosicion(){
        return {
            x: this.x,
            y: this.y,
        };
    }
    getColor(){
        return this.color;
    }
    draw(){
        this.ctx.fillStyle = this.color;
    }
}