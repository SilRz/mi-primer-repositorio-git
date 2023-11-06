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


function validarFormulario(){
    
  
   var nombre= document.getElementById("nombre").value;
    var apellido= document.getElementById("apellido").value;
    var correo= document.getElementById("correo").value;
    var cantidad= parseInt(document.getElementById('cantidad').value);
    /*var pagoTotal= document.getElementById("totalPagar").value;*/
    var categoria= document.getElementById("categoria").value;
    

    if(!validarCampo(nombre,"Nombre")){
        return false;
    }
    if(!validarCampo(apellido, "Apellido")){
        return false;
    }
    if(!validarCampo(correo, "Correo")){
        return false;
    }
    if(!validarCampo(cantidad, "Cantidad")){
        return false;
    }
    if(!validarCampo(categoria, "Categoria")){
        return false;
    }

   return mostrarResumen();
 
}





function validarCampo(){

     let regex =/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

   if(nombre.trim().length <3){
        alert('El nombre debe contar con al menos 3 caracteres.');
        return false;
    }

    if(apellido.trim().length <3){
        alert('El apellido debe contar con al menos 3 caracteres.');
        return false;
       
    }
    if(!regex.test(correo)){
        alert('Por favor ingrese un correo electrónico válido')
        return false;
    }

    if(cantidad.trim()===""||isNaN(cantidad)||cantidad<=0){
        alert("Debe ingresar un número mayor a 0 ");
        return false;

    }
    if(!categoria){
        alert ("Seleccione una categoria")
        return false;
    }

    return true;
}
    
function calcularDescuento(cantidad,categoria){

    var baseTarifa= 200;
    var descuentoEstudiante= 0.8;
    var descuentoTrainee= 0.5; 
    var descuentoJunior= 0.15;
   
    var descuento = 0;

    switch(categoria){
        case "estudiante":
            
            descuento=descuentoEstudiante;
            
            break;
        case "trainee":
           descuento=descuentoTrainee;
           break;   
        case "junior":
         descuento=descuentoJunior;
           break;
        default:
            descuento =0;
            break;
    }
    
    var costoTotal= baseTarifa * cantidad * ( 1 - descuento);

     return costoTotal;
}

function mostrarResumen(){
    var nombre= document.getElementById("nombre").value;
    var apellido= document.getElementById("apellido").value;
    var correo= document.getElementById("correo").value;
    var cantidad= document.getElementById("cantidad").value;
    var categoria= document.getElementById("categoria").value;
   
    var costoTotal = calcularDescuento(cantidad, categoria);

    alert('Resumen de compra:\nNombre:' + nombre + '\nApellido: ' + apellido + '\nCorreo: ' + correo + '\nCantidad de tickets: ' + cantidad + '\nCategoria: ' + categoria + '\nTotal a pagar: $' + costoTotal.toFixed(2));
    
    document.getElementById("totalPagar").value= costoTotal.toFixed(2);

 }
function borrarCampos(){
     document.getElementById("nombre").value="";
     document.getElementById("apellido").value="";
     document.getElementById("correo").value="";
     document.getElementById("cantidad").value="";
     document.getElementById("categoria").value="";
     document.getElementById("totalPagar").value="";
   

}

     




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    

    

  
  
 

        



