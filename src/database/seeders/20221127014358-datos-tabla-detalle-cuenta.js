'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('detalle_cuenta',
      [{
        totalFinal:0,
        estado: true,
        idReservacion: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        totalFinal:0,
        estado: true,
        idReservacion: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        totalFinal:0,
        estado: true,
        idReservacion: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
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
