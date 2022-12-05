"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
    await queryInterface.bulkInsert(
      "servicio",
      [
        {
          nombre: "taxi",
          precio: 150,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nombre: "tour",
          precio: 350,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nombre: "massage",
          precio: 550,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('servicio', null, {
    });
  }
};
