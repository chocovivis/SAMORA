const formDetalleCuenta = (() => {
    const $containerForm = document.getElementById("containerForm");
    const $form = document.getElementById("formDetalleCuenta");
    
    const BASE_URL = "/catalogo/detalleCuenta";
    //
    const _setData = (item = {}, typeRender = "POST") => {
      const $inputCantidad = document.getElementById("cantidad");
      const $inputServicio = document.getElementById("servicio");
      const $inputPrecio = document.getElementById("precio");
      const $inputTotal = document.getElementById("total");
      //const $inputImagen = document.getElementById("imagen");
      const { idDetalleCuenta,cantidad,servicio,precio,total } = item;
      $inputCantidad.value = cantidad;
      $inputServicio.value=servicio;
      $inputPrecio.value = precio;
      $inputTotal.value = total;
      //$inputImagen.value = imagen;
      $form.setAttribute("method", typeRender);
      $form.setAttribute("item-id", idDetalleCuenta);
      M.updateTextFields();
    };
    const _configureBtnCancelar = () => {
      const $btnCancelar = document.getElementById("btnCancelar");
      $btnCancelar.addEventListener("click", () => {
        formDetalleCuenta.setVisible(false);
        detalleCuenta.setVisible(true);
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
      formDetalleCuenta.setVisible(false);
      detalleCuenta.setVisible(true);
      detalleCuenta.getData();
    };
  
    const _update = async (formData) => {
      const itemId = $form.getAttribute("item-id");
      await http.post({url:`${BASE_URL}/update/${itemId}`,body: formData});
      formDetalleCuenta.setVisible(false);
      detalleCuenta.setVisible(true);
      detalleCuenta.getData();
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
  
  formDetalleCuenta.init();
  