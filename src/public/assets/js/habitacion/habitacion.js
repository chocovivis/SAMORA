const habitacion = (() => {
  const $bodyTable = document.getElementById("data");
  const BASE_URL = "/catalogo/habitacion";
  const $containerTable = document.getElementById("containerTable");

  const _getData = async () => {
    const response = await http.get(BASE_URL);
    $bodyTable.innerHTML = "";
    for (let index = 0; index < response.length; index++) {
      const $row = _createRow(response[index], "numHabitacion");
      $bodyTable.appendChild($row);
    }
  };

  const _actionButtonEditar = async (event) => {
    const $btn = event.target;
    const numHabitacion = $btn.getAttribute("item-id");
    const response = await http.get(`${BASE_URL}?numHabitacion=${numHabitacion}`);
    formHab.setData(response[0], 'PUT');
    formHab.setVisible(true);
    habitacion.setVisible(false);
  };

  const _actionButtonEliminar = async (event) => {
    const $btn = event.target;
    const numHabitacion = $btn.getAttribute("item-id");
    const response = await http.delete({ url: `${BASE_URL}/${numHabitacion}` });
    habitacion.getData();
  };

  const _createRow = (item = {}, itemId = "") => {
    const $row = document.createElement("tr");
    for (const key in item) {
      const value = item[key];
      const $td = document.createElement("td");
      $td.innerText = value;
      $row.appendChild($td);

    }

    $row.appendChild(_createBtnAction(item[itemId], "Editar", _actionButtonEditar));
    if (item['estado'])
      $row.appendChild(_createBtnAction(item[itemId], "Eliminar", _actionButtonEliminar));
    return $row;
  };

  const _createBtnAction = (itemId = 0, labelBtn = "", _actionFuntion = () => { }) => {
    const $btn = document.createElement("button");
    $btn.innerText = labelBtn;
    $btn.className += "waves-effect waves-light btn my-basic mx-basic fondo-edit little-font-style";
    $btn.setAttribute("item-id", itemId);
    $btn.addEventListener("click", _actionFuntion);
    return $btn;
  };

  const _setVisible = (visible = true) => {
    if (visible) {
      $containerTable.classList.remove("hide");
    } else {
      $containerTable.classList.add("hide");
    }
  };


  const _initElements = () => {
    _getData();
    _configureBtnNuevo();
  };

  const _configureBtnNuevo = () => {
    const $btnNuevo = document.getElementById("btnNuevo");
    $btnNuevo.addEventListener("click", () => {
      habitacion.setVisible(false);
      formHab.setVisible(true);
      habitacion.setData({}, 'POST')
    });
  };

  return {
    init: () => {
      _initElements();
    },
    setVisible: _setVisible,
    getData: _getData
  };
})();

habitacion.init();
