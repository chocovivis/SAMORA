'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservacion',
      [{
        fechaInicio: "2022-12-09",
        fechaFin: "2022-12-16",
        estado: "PENDIENTE",
        idCliente: 4,
        numHabitacion: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        fechaInicio: "2022-11-03",
        fechaFin: "2022-11-08",
        estado: "PENDIENTE",
        idCliente: 2,
        numHabitacion: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        fechaInicio: "2022-12-12",
        fechaFin: "2022-12-20",
        estado: "PENDIENTE",
        idCliente: 3,
        numHabitacion: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        fechaInicio: "2022-11-19",
        fechaFin: "2022-11-27",
        estado: "PENDIENTE",
        idCliente: 1,
        numHabitacion: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('reservacion', null, {
    });
  }
};
