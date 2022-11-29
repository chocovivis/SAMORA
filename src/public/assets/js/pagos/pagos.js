var $botones = document.getElementsByTagName('button');


for(const boton of $botones){
  if(boton.innerText=="true"){
    boton.innerText="Disponible"
  }else{
    boton.innerText="Ocupado"
  }
    boton.addEventListener("click", () => {
          if(boton.outerText=="Disponible"){
            location.href = "/pago";
          }else{
            alert("Esta habitación no se puede reservar");
          }
     });
}






  


 
