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
          idServicio: 1,
          nombre: "taxi",
          precio: 150,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idServicio: 2,
          nombre: "tour",
          precio: 350,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idServicio: 3,
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
