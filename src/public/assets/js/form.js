const form = (() => {
    const $formHab = document.getElementById("formHab");
    const $inputprecio = document.getElementById("precio");
    const $inputdescripcion = document.getElementById("descripcion");
    const $inputestado = document.getElementById("estado");
    
    const request = {
      "POST":()=>{
        http.post({url:"http://localhost:4000/regresa/habitacion",body:{
            
          }});
      },
      "PUT":() =>{
        http.put({url:"http://localhost:4000/regresa/habitacion",body:{
            
        }});
      }
    };
    const _sendActionForm = (event = {}) => {
      event.preventDefault();
      const method = $formHab.getAttribute("method");
      request[method]();
  
      if ($inputprecio.value==""||$inputdescripcion.value === "" || $inputestado.value === "") {
        alert("Todos los campos son requeridos");
      }
    };
  
    const _addActionForm = () => {
      $formHab.addEventListener("submit", _sendActionForm);
    };
    return {
      init: () => {
        _addActionForm();
      },
    };
  })();
  
  form.init();