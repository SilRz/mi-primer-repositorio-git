const nav= document.querySelector("#nav");
const abrir=document.querySelector("#abrir");
const cerrar=document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
      nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})
// -------validación de formulario---------
var nombre= document.getElementById("nombre").value;
var apellido= document.getElementById("apellido").value;
var correo= document.getElementById("email").value;
var cantidad= document.getElementById("cantidad").value;
var categoria= document.getElementById("categoria").value;
var pagoTotal= document.getElementById("pagoTotal").value;
/*var enviar= documen-getElementById("enviar").value;
var resumen= documen.getElementById("resumen").value;
var form= document.getElementById("form");
var parrafo= document.getElementById(warnings);*/
var valido= true;

/*form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar= fale;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2.3})+$/;
    parrafo.innerHTML="";*/

    if(nombre.value.length<6){
        warnings += 'El nombre no es valido <br>';
        entrar= true;
    }
    if(apellido.value.length <6){
        warnings +='El apellido no es valido <br>';
        entrar = true;
    }
    if(regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>';
        entrar= true;
    }

    if(cantidad >= 1){
        entrar= true;

    }
    else{
        warnings += 'La cantidad ingresada no es valida <br>';
        
    }
    if(categoria==estudiante||trainee||junior){
        entrar=true;

    }else{
        warnings += 'La categoria no es valida <br>';
        

    }
    if(pagoTotal > 40){
        entrar= true;

    }else{
        warnings +='El monto ingresado no es valido <br>';
    }
    if(entrar){
        parrafo.innerHTML= warnings;
    }else{
        parrafo.innerHTML="Enviado";
    }

  }  )
  
 

        



