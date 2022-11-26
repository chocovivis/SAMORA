"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Habitacion", [
      {
        num_habitacion: 1,
        precio: 456.00,
        capacidad: 5,
        descripcion:"frente al mar",
        estado:true,
        id_empleado:2,
      },
      {
        num_habitacion: 2,
        precio: 763.00,
        capacidad: 2,
        descripcion:"principal",
        estado:true,
        id_empleado:3,
      },
      {
        num_habitacion: 3,
        precio: 392.00,
        capacidad: 1,
        descripcion:"clásica",
        estado:true,
        id_empleado:3,
      },
      {
        num_habitacion: 4,
        precio: 500.00,
        capacidad: 2,
        descripcion:"estudio",
        estado:true,
        id_empleado:1,
      },
      {
        num_habitacion: 5,
        precio: 980.00,
        capacidad: 2,
        descripcion:"master",
        estado:true,
        id_empleado:2,
      },
      {
        num_habitacion: 6,
        precio: 1320.00,
        capacidad: 4,
        descripcion:"doble",
        estado:true,
        id_empleado:3,
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Habitacion',null,{});
  },
};
