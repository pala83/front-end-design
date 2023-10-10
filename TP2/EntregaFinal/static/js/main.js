const toggle = document.querySelector("#toggle"),
main = document.querySelector(".main"),
cart = document.querySelector("#cart"),
togglecart = document.querySelector("#toggle-cart"),
search = document.querySelector(".inp-busqueda .boton-toggle"),
nav = document.querySelector(".nav");

window.addEventListener("resize", ()=>{claseMediaQUery(search,'boton-toggle')})
window.addEventListener("load", claseMediaQUery(search, 'boton-toggle'))

function claseMediaQUery(elemento, clase){
    window.innerWidth >= 768 ? elemento.classList.remove(clase) : elemento.classList.add(clase)
}

toggle.addEventListener("click",()=>{
    nav.classList.toggle("nav-oculto");
    main.classList.toggle("nav-abierto");
});

cart.addEventListener("click",()=>{
    togglecart.classList.toggle("cart-closed");
});