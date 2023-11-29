document.addEventListener("scroll", () => {
    function borrar() {
        document.querySelectorAll(".imgSeccion6").forEach((s) => {
            s.classList.remove("show-img");
        });
        document.querySelectorAll(".seccion6Texto").forEach((s) => {
            s.classList.remove("show-txt");
        });
    }

    const scrollSeccion6 = window.scrollY;
    if (scrollSeccion6 < 4030) {
        borrar();
        document.querySelector("#imgSeccion6-1").classList.add("show-img");
        document.querySelector("#txt-1").classList.add("show-txt");
    } else if (scrollSeccion6 >= 4030 && scrollSeccion6 < 4500) {
        borrar();
        document.querySelector("#imgSeccion6-2").classList.add("show-img");
        document.querySelector("#txt-2").classList.add("show-txt");
    } else if (scrollSeccion6 >= 4400 && scrollSeccion6 < 5000) {
        borrar();
        document.querySelector("#imgSeccion6-3").classList.add("show-img");
        document.querySelector("#txt-3").classList.add("show-txt");
    } else if (scrollSeccion6 >= 5000) {
        borrar();
        document.querySelector("#imgSeccion6-4").classList.add("show-img");
        document.querySelector("#txt-4").classList.add("show-txt");
    }
});