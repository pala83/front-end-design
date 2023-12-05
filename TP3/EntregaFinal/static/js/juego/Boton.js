class Boton extends Figura {

    constructor(posX, posY, fill, context, width, height,imagesrc) {
        super(posX , posY, fill, context)
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = imagesrc;
    }
    draw() {
        super.draw();
        this.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        this.context.lineWidth =  1;
    }

    isPointInside(x,y){
        return !(x<this.posX || x > this.posX + this.width || y < this.posY || y > this.posY + this.height) 
    }
}
