"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("empleado", [
      {
        idUsuario: 1,
        nombre: "Admin Admin Admin",
        puesto: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idUsuario: 2,
        nombre: "Owner Owner Owner",
        puesto: "Gerente",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('empleado',null,{});
  },
};
