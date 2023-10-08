const nombre = document.querySelector("#in-nombre");
const apellido = document.querySelector("#in-apellido");
const fecha = document.querySelector("#in-fecha");
const mail = document.querySelector("#in-mail");
const ppas = document.querySelector("#in-ppas");
const rpas = document.querySelector("#in-rpas");
const warnings = document.querySelector("#warnings");
const fregistro = document.querySelector("#form-registro");

fregistro.addEventListener("submit", (e)=>{
    e.preventDefault();
    let msjwarning = "";
    let invalido = false;
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value == ""){
        msjwarning += 'X Nombre requerido.<br>';
        invalido = true;
    }
    if(apellido.value == ""){
        msjwarning += 'X Apellido requerido.<br>';
        invalido = true;
    }
    if(fecha.value == ""){
        msjwarning += 'X Fecha de nacimiento requerida.<br>';
        invalido = true;
    }
    if(!regexMail.test(mail.value)){
        msjwarning += 'X Email invalido.<br>';
        invalido = true;
    }
    if(ppas.value == ""){
        msjwarning += 'X Contraseña requerida.<br>';
        invalido = true;
    }
    if(ppas.value != rpas.value){
        msjwarning += 'X Ambas contraseñas no son iguales.<br>';
        invalido = true;
    }
    if(invalido){
        warnings.innerHTML = msjwarning;
    }
    else{
        warnings.innerHTML = '&#10003; Registro exitoso.'
        warnings.style.color = "green"
        setTimeout(()=>{
            window.location.href = "home.html"
        },2000)
    }
})
