class Ficha extends Figura {

    constructor(posX, posY, imagen, context, radius, jugador, personajeSeleccionado) {
        super(posX, posY, imagen, context)
        this.radius = radius-2;
        this.jugador = jugador;
        this.posicionInicialX = posX;
        this.posicionInicialY = posY;
        this.estaFija = false;
        this.image = null;
        this.personajeSeleccionado = personajeSeleccionado;
        this.seleccionarImagenDeFicha(personajeSeleccionado);
        this.resaltadoEstilo = "#FF0000";
        this.ImageIsLoaded = false;
        this.brilloExterior = false;
    }

    draw() {
        super.draw();
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.strokeStyle = "white";
        this.context.lineWidth = 1;

        if (this.resaltado === true) {
            this.context.save();
            this.context.strokeStyle = this.resaltadoEstilo;
            this.context.shadowColor = "rgb(255, 255, 0)";
            this.context.shadowBlur = 20;
            this.context.strokeStyle = "#ffaa00";
            this.context.lineWidth = 15;
            this.context.beginPath();
            this.context.arc(this.posX, this.posY, this.radius - (this.radius * 0.15), 0, 2 * Math.PI);
            this.context.stroke();
            this.context.closePath();
            this.context.restore();
        }

        this.context.stroke();
        this.context.closePath();

        if (this.image) {
            if (this.image.complete) {
                this.context.drawImage(
                    this.image,
                    this.posX - this.radius,
                    this.posY - this.radius,
                    this.radius * 2,
                    this.radius * 2
                );
            }
        }
        if (this.brilloExterior) {
            this.context.save();
            this.context.shadowColor = "rgb(255, 255, 0)";
            this.context.shadowBlur = 10;
            this.context.strokeStyle = "#ffaa00";
            this.context.lineWidth = 2;
            this.context.beginPath();
            this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
            this.context.stroke();
            this.context.closePath();
            this.context.restore();
        }
    }

    setBrilloExterior(brillar) {
        this.brilloExterior = brillar;
    }
    getRadius() {
        return this.radius;
    }

    getJugador() {
        return this.jugador;
    }

    getEstaFija() {
        return this.estaFija;
    }

    setEstaFija(estaFija) {
        return this.estaFija = estaFija;
    }

    isPointInside(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }

    getPosInicialX() {
        return this.posicionInicialX;
    }

    getPosInicialY() {
        return this.posicionInicialY;
    }

    estaEnLaPosicionIncial() {
        return this.posicionInicialX == this.posX && this.posicionInicialY == this.posY;
    }

    setImage(image) {
        this.image = image;
    }

    getImageIsLoaded() {
        return this.ImageIsLoaded;
    }

    seleccionarImagenDeFicha(personajeSeleccionado) {
        let image = new Image();
        if (this.jugador === 1)
            image.src = `static/assets/juego/fichas/android${personajeSeleccionado}.png`;
        if (this.jugador === 2)
            image.src = `static/assets/juego/fichas/ios${personajeSeleccionado}.png`;
        image.onload = () => {
            this.setImage(image);
            this.ImageIsLoaded = true;
        };
    }

    equals(otroObjeto) {
        if (otroObjeto instanceof Ficha) {
            return this.getJugador() === otroObjeto.getJugador();
        }
        return false;
    }
}