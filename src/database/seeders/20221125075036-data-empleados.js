"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("empleado", [
      {
        idEmpleado: 1,
        nombre: "Admin Admin Admin",
        puesto: "Admin",
      },
      {
        idEmpleado: 2,
        nombre: "Doe",
        puesto: "Gerente",
      },
      {
        idEmpleado: 3,
        nombre: "Luis",
        puesto: "Barman",
      },
      {
        idEmpleado: 4,
        nombre: "Yajil",
        puesto: "Recepcion",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('empleado',null,{});
  },
};
