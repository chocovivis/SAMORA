'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('detalle_cuenta', [
      {
        idDetalleCuenta: 1,
        idReservacion: 1,
        totalFinal: 150,
        estado: true,
      },
      {
        idDetalleCuenta: 2,
        idReservacion: 2,
        totalFinal: 200,
        estado: true,
      },
      {
        idDetalleCuenta: 3,
        idReservacion: 3,
        totalFinal: 180,
        estado: true,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('detalle_cuenta', null, {});
  }
};
