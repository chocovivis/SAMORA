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
      {
        correo: "admin@samora.com",
        contrasenia: "$2b$10$f4b362aWyD1ZQe2MEfukge1nh/n3TVDpTQd/8k8q8sEOMLLkhEJji",
        estatus: 'A',
        rol: '1111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correo: "owner@samora.com",
        contrasenia: "adminSamora@01",
        estatus: 'A',
        rol: '2222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correo: "cliente3@samora.com",
        contrasenia: "adminSamora@01",
        estatus: 'A',
        rol: '2222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correo: "cliente4@samora.com",
        contrasenia: "adminSamora@01",
        estatus: 'A',
        rol: '2222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correo: "cliente5@samora.com",
        contrasenia: "adminSamora@01",
        estatus: 'A',
        rol: '2222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        correo: "cliente6@samora.com",
        contrasenia: "adminSamora@01",
        estatus: 'A',
        rol: '2222',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
