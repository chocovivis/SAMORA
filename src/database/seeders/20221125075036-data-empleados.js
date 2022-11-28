"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("empleado", [
      {
        idEmpleado: 1,
        nombre: "Doe",
        puesto: "Gerente",
      },
      {
        idEmpleado: 2,
        nombre: "Luis",
        puesto: "Barman",
      },
      {
        idEmpleado: 3,
        nombre: "Yajil",
        puesto: "Recepcion",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('empleado',null,{});
  },
};
