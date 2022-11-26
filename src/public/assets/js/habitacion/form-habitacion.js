const formHab = (() => {
    const $containerForm = document.getElementById("containerForm");
    const $form = document.getElementById("formHab");
    
    const BASE_URL = "catalogo/habitacion";
    //
    const _setData = (item = {}, typeRender = "POST") => {
      const $inputPrecio = document.getElementById("precio");
      const $inputCapacidad = document.getElementById("capacidad");
      const $inputDescripcion = document.getElementById("descripcion");
      const $inputEstado = document.getElementById("estado");
      const { numHabitacion,precio,capacidad,descripcion,estado } = item;
      $inputPrecio.value = precio;
      $inputCapacidad.value=capacidad;
      $inputDescripcion.value = descripcion;
      $inputEstado.value = estado;
      $form.setAttribute("method", typeRender);
      $form.setAttribute("item-id", numHabitacion);
      M.updateTextFields();
    };
    const _configureBtnCancelar = () => {
      const $btnCancelar = document.getElementById("btnCancelar");
      $btnCancelar.addEventListener("click", () => {
        formHab.setVisible(false);
        habitacion.setVisible(true);
      });
    };
    
    const _configureBtnGuardar = () => {
      const $btnGuardar = document.getElementById("btnGuardar");
      $btnGuardar.addEventListener("click", () => {
        debugger
        const method = $form.getAttribute("method");
        const formData = new FormData($form);
        if (method.toUpperCase() === "POST") {
          _create(formData);
        }
  
        if (method === "PUT") {
          _update(formData);
        }
      
      });
    };
  
    const _create = async (formData) => {
      await http.post({url:BASE_URL,body: formData});
      formHab.setVisible(false);
      habitacion.setVisible(true);
      habitacion.getData();
    };
  
    const _update = async (formData) => {
      const itemId = $form.getAttribute("item-id");
      await http.post({url:`${BASE_URL}/update/${itemId}`,body: formData});
      formHab.setVisible(false);
      habitacion.setVisible(true);
      habitacion.getData();
    };
  
    const _setVisibleForm = (visible = true) => {
      if (visible) {
        $containerForm.classList.remove("hide");
      } else {
        $containerForm.classList.add("hide");
      }
    };
  
    const _init = () => {
      _configureBtnCancelar();
      _configureBtnGuardar();
    };
  
    return {
      setData: _setData,
      setVisible: _setVisibleForm,
      init: _init,
    };
  })();
  
  formHab.init();
  