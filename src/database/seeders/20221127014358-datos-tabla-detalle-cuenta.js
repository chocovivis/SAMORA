'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('detalle_cuenta',
      [{
        idDetalleCuenta: 1,
        totalFinal:0,
        estado: true,
        idReservacion: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idDetalleCuenta: 2,
        totalFinal:0,
        estado: true,
        idReservacion: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idDetalleCuenta: 3,
        totalFinal:0,
        estado: true,
        idReservacion: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idDetalleCuenta: 4,
        totalFinal:0,
        estado: true,
        idReservacion: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('detalle_cuenta', null, {
    });
  }
};
