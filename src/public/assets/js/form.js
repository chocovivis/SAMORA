const form = (() => {
    const $formnum = document.getElementById("numHabitacion");
    const $inputprecio = document.getElementById("precio");
    const $inputcapacidad = document.getElementById("capacidad");
    const $inputdescripcion = document.getElementById("descripcion");
    const $inputestado = document.getElementById("estado");
    

    const request = {
      "POST":()=>{
        http.post({url:"http://localhost:4000/agrega/habitacion",body:{
            
          }});
      },
      "PUT":() =>{
        http.put({url:"http://localhost:4000/agrega/habitacion",body:{
            
        }});
      }
    };
  
    
    const _sendActionForm = (event = {}) => {
      event.preventDefault();
      const method = $formStatus.getAttribute("method");
      request[method]();
  
      if ($inputStatus.value === "" || $inputDescription.value === "") {
        alert("Todos los campos son requeridos");
      }
    };
  
    const _addActionForm = () => {
      $formStatus.addEventListener("submit", _sendActionForm);
    };
  
    return {
      init: () => {
        _addActionForm();
      },
    };
  })();
  
  form.init();