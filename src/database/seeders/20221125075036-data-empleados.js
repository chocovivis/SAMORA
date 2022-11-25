"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Empleado", [
      {
        id_empleado: 1,
        nombre: "Doe",
        puesto: "Gerente",
      },
      {
        id_empleado: 2,
        nombre: "Luis",
        puesto: "Barman",
      },
      {
        id_empleado: 3,
        nombre: "Yajil",
        puesto: "Recepcion",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Empleado',null,{});
  },
};
