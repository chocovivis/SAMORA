'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('usuario', [
      // {
      //   idUsuario: 1,
      //   idEmpleado: 1,
      //   correo: "admin@samora.com",
      //   contrasenia: "adminSamora@1",
      //   estatus: 'A',
      //   rol: "2222",
      // }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
