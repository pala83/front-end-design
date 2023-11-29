const ghost = document.querySelector(".ghost-Spider8");
const spiderMan8 = document.querySelector(".spiderMan8");
const spiderNegro8 = document.querySelector(".spiderNegro8");
const fondoRosa = document.querySelector(".fondoRosa");
const fondoCeleste = document.querySelector(".fondoCeleste");
const fondoAzulOscuro = document.querySelector(".fondoAzulOscuro");

ghost.addEventListener('mouseover', () => {
    ghost.style.transform = 'scale(' + 1.2 + ')';
    spiderMan8.style.transform = 'scale(' + 0.9 + ')';
    spiderNegro8.style.transform = 'scale(' + 0.9 + ')';
    spiderMan8.style.filter = 'blur(' + 5 + 'px)';
    spiderNegro8.style.filter = 'blur(' + 5 + 'px)';
    fondoRosa.style.display = 'block';
})

ghost.addEventListener('mouseout', () => {
    ghost.style.transform = 'scale(' + 1 + ')';
    spiderMan8.style.transform = 'scale(' + 1 + ')';
    spiderNegro8.style.transform = 'scale(' + 1 + ')';
    spiderMan8.style.filter = 'none';
    spiderNegro8.style.filter = 'none';
    fondoRosa.style.display = 'none';
})

spiderMan8.addEventListener('mouseover', function () {
    spiderMan8.style.transform = 'scale(' + 1.2 + ')';
    ghost.style.transform = 'scale(' + 0.9 + ')';
    spiderNegro8.style.transform = 'scale(' + 0.9 + ')';
    ghost.style.filter = 'blur(' + 5 + 'px)';
    spiderNegro8.style.filter = 'blur(' + 5 + 'px)';
    fondoCeleste.style.display = 'block';
})

spiderMan8.addEventListener('mouseout', function () {
    spiderMan8.style.transform = 'scale(' + 1 + ')';
    ghost.style.transform = 'scale(' + 1 + ')';
    spiderNegro8.style.transform = 'scale(' + 1 + ')';
    ghost.style.filter = 'none';
    spiderNegro8.style.filter = 'none';
    fondoCeleste.style.display = 'none';
})

spiderNegro8.addEventListener('mouseover', function () {
    spiderNegro8.style.transform = 'scale(' + 1.2 + ')';
    ghost.style.transform = 'scale(' + 0.9 + ')';
    spiderMan8.style.transform = 'scale(' + 0.9 + ')';
    ghost.style.filter = 'blur(' + 5 + 'px)';
    spiderMan8.style.filter = 'blur(' + 5 + 'px)';
    fondoAzulOscuro.style.display = 'block';
})

spiderNegro8.addEventListener('mouseout', function () {
    spiderNegro8.style.transform = 'scale(' + 1 + ')';
    ghost.style.transform = 'scale(' + 1 + ')';
    spiderMan8.style.transform = 'scale(' + 1 + ')';
    ghost.style.filter = 'none';
    spiderMan8.style.filter = 'none';
    fondoAzulOscuro.style.display = 'none';
})