"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("habitacion", [
      {
        numHabitacion: 1,
        precio: 456.00,
        capacidad: 5,
        descripcion: "frente al mar",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numHabitacion: 2,
        precio: 763.00,
        capacidad: 2,
        descripcion: "principal",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
        // idEmpleado: 3,
      },
      {
        numHabitacion: 3,
        precio: 392.00,
        capacidad: 1,
        descripcion: "clásica",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
        //  idEmpleado: 3,
      },
      {
        numHabitacion: 4,
        precio: 500.00,
        capacidad: 2,
        descripcion: "estudio",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
        // idEmpleado: 1,
      },
      {
        numHabitacion: 5,
        precio: 980.00,
        capacidad: 2,
        descripcion: "master",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
        // idEmpleado: 2,
      },
      {
        numHabitacion: 6,
        precio: 1320.00,
        capacidad: 4,
        descripcion: "doble",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
        // idEmpleado: 3,
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('habitacion', null, {});
  },
};
