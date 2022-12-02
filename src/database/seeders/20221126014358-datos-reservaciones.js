'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservacion',
      [{
        "idReservacion": 1,
        "fechaInicio": "2022-12-09",
        "fechaFin": "2022-12-16",
        "estado": "PENDIENTE",
        "idCliente": 4,
        "numHabitacion": 6
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        "idReservacion": 2,
        "fechaInicio": "2022-11-03",
        "fechaFin": "2022-11-08",
        "estado": "PENDIENTE",
        "idCliente": 9,
        "numHabitacion": 3
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        "idReservacion": 3,
        "fechaInicio": "2022-12-12",
        "fechaFin": "2022-12-20",
        "estado": "PENDIENTE",
        "idCliente": 2,
        "numHabitacion": 5
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        "idReservacion": 4,
        "fechaInicio": "2022-11-19",
        "fechaFin": "2022-11-27",
        "estado": "PENDIENTE",
        "idCliente": 10,
        "numHabitacion": 3
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        "idReservacion": 5,
        "fechaInicio": "2022-12-21",
        "fechaFin": "2022-12-26",
        "estado": "PENDIENTE",
        "idCliente": 4,
        "numHabitacion": 5
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "idReservacion": 6,
        "fechaInicio": "2022-12-01",
        "fechaFin": "2022-12-06",
        "estado": "PENDIENTE",
        "idCliente": 7,
        "numHabitacion": 1
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "idReservacion": 7,
        "fechaInicio": "2022-12-22",
        "fechaFin": "2022-12-28",
        "estado": "PENDIENTE",
        "idCliente": 12,
        "numHabitacion": 1
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "idReservacion": 8,
        "fechaInicio": "2022-10-12",
        "fechaFin": "2022-10-08",
        "idCliente": 4,
        "estado": "FINALIZADO",
        "numHabitacion": 2
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "idReservacion": 9,
        "fechaInicio": "2022-09-27",
        "fechaFin": "2022-09-22",
        "idCliente": 7,
        "estado": "FINALIZADO",
        "numHabitacion": 1
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "idReservacion": 10,
        "fechaInicio": "2022-09-14",
        "fechaFin": "2022-09-12",
        "idCliente": 3,
        "estado": "FINALIZADO",
        "numHabitacion": 4
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "idReservacion": 11,
        "fechaInicio": "2022-12-02",
        "fechaFin": "2022-12-06",
        "idCliente": 8,
        "estado": "CANCELADO",
        "numHabitacion": 4
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "idReservacion": 12,
        "fechaInicio": "2022-12-15",
        "fechaFin": "2022-12-13",
        "idCliente": 5,
        "estado": "CANCELADO",
        "numHabitacion": 2
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('reservacion', null, {
    });
  }
};
