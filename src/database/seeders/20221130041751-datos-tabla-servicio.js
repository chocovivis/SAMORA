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
        },
        {
          idServicio: 2,
          nombre: "tour",
          precio: 350,
        },
        {
          idServicio: 3,
          nombre: "massage",
          precio: 550,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
