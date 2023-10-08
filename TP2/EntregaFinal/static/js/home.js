const search = document.querySelector(".inp-busqueda .boton-toggle"),
wrappers = document.querySelectorAll(".wrapper");

window.addEventListener("resize", ()=>{claseMediaQUery(search,'boton-toggle')})
window.addEventListener("load", claseMediaQUery(search, 'boton-toggle'))

function claseMediaQUery(elemento, clase){
    window.innerWidth >= 768 ? elemento.classList.remove(clase) : elemento.classList.add(clase)
}

function showHideIcons(botones, carrusel){
    let scrollWidth = carrusel.scrollWidth - carrusel.clientWidth;
    botones[0].style.display = carrusel.scrollLeft == 0 ? "none" : "block";
    botones[1].style.display = carrusel.scrollLeft == scrollWidth ? "none" : "block";
}

wrappers.forEach(wrapper=>{
    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
    const botones = wrapper.querySelectorAll("button");
    const carrusel = wrapper.querySelector(".carousel");
    const firstImg = carrusel.querySelectorAll("img")[0];
    botones.forEach(btn=>{
        btn.addEventListener("click",()=>{
            let firstImgWidth = firstImg.clientWidth +14;
            carrusel.scrollLeft += btn.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(()=> showHideIcons(botones, carrusel), 60);
        });
    });

    const autoSlide = () => {
        if(carrusel.scrollLeft - (carrusel.scrollWidth - carrusel.clientWidth) > -1 || carrusel.scrollLeft <= 0) return;
        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth + 14;
        let valDifference = firstImgWidth - positionDiff;
        if(carrusel.scrollLeft > prevScrollLeft) {
            return carrusel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        carrusel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carrusel.scrollLeft;
    }
    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carrusel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carrusel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }
    const dragStop = () => {
        isDragStart = false;
        carrusel.classList.remove("dragging");
        if(!isDragging) return;
        isDragging = false;
        autoSlide();
    }


    carrusel.addEventListener("mousedown", dragStart);
    carrusel.addEventListener("touchstart", dragStart);
    carrusel.addEventListener("touchmove", dragging);
    carrusel.addEventListener("touchend", dragStop);

    document.addEventListener("mouseup", dragStop);
    document.addEventListener("mousemove", dragging);
})
