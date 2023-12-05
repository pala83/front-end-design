
class Timer extends Figura {

    constructor(posX, posY, imagen, context) {
        super(posX, posY, imagen, context)
        this.image = new Image();
        this.setImage();
        this.resaltadoEstilo = "#FF0000";
    }
    setImage() {
        this.image.src = "static/assets/juego/imagenes-juego/Timer.png";
    }

    drawTimer(tiempoRestante , canvasWidth) {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;
        const tiempoFormateado = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

        let imageWidth = this.image.width;

        ctx.font = "bold 30px Nunito";
        ctx.textAlign = "left";

        ctx.fillStyle = "yellow";
        ctx.fillStyle = "black";
        ctx.drawImage(this.image, (canvasWidth / 2 - imageWidth /2), 40); 
        
        ctx.fillText(`${tiempoFormateado}`, (canvasWidth / 2 - imageWidth /2) + 80, 70);
    }

}