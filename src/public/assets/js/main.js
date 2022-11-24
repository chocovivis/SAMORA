const main = (() => {
    const $bodyTable = document.getElementById("data");
    const BASE_URL = "http://localhost:4000/regresa/habitacion";
  
    const _getData = async () => {
      debugger;
      const response = await http.get(BASE_URL);
      for (let index = 0; index < response.length; index++) {
        const $row = _createRow(response[index],"numHabitacion");
        $bodyTable.appendChild($row);
      }
    };
  
    const _actionButtonEditar = async (event) => {
        const $formHab = document.getElementById("formHab");

        
        $formHab.setAttribute("method","PUT");
        const $btn = event.target;
        const numHabitacion = $btn.getAttribute("item-id");
        const response = await http.get(`${BASE_URL}/${numHabitacion}`);
        _setData(response[0]);
      };
  
    const _createRow = (item = {}, itemId) => {
      debugger;
      const $row = document.createElement("tr");
      for (const key in item) {
        const value = item[key];
        const $td = document.createElement("td");
        $td.innerText = value;
        $row.appendChild($td);
     }
    $row.appendChild(_createBtnAction(item[itemId], "Editar", _actionButtonEditar));
    
    return $row;
    };
  
    const _createBtnAction = (itemId = 0, labelBtn = "", _actionFuntion = () => {}) => {
      debugger;
      const $btn = document.createElement("button");
      $btn.innerText = labelBtn;
      $btn.className += "";
      $btn.setAttribute("item-id", itemId);
      $btn.addEventListener("click", _actionFuntion);
      return $btn;
    };
  
    const _setData = (item = {}) => {
        const $precio = document.getElementById("precio");
        const $descripcion = document.getElementById("descripcion");
        const $estado = document.getElementById("estado");
        const {precio,descripcion,estado } = item;
        $precio.value= precio;
        $descripcion.value = descripcion;
        $estado.value = estado;
    };
  
    const _initElements = () => {
      _getData();
    };
  
    return {
      init: () => {
        _initElements();
      },
    };
  })();
  
  main.init();
  