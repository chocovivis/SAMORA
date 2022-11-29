const BASE_URL = "/catalogo/habitacion";
var $botones = document.getElementsByTagName('button');

for(const boton of $botones){
    boton.addEventListener("click", () => {
          if(boton.outerText=="true"){
            location.href = "/pago";
          }else{
            alert("Esta habitación no se puede reservar");
          }
        
     });
}


  


 
