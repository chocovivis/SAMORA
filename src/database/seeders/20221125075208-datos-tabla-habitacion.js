"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("habitacion", [
      {
        precio: 456.00,
        capacidad: 5,
        descripcion: "frente al mar",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        precio: 763.00,
        capacidad: 2,
        descripcion: "principal",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        precio: 392.00,
        capacidad: 1,
        descripcion: "clásica",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        precio: 500.00,
        capacidad: 2,
        descripcion: "estudio",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        precio: 980.00,
        capacidad: 2,
        descripcion: "master",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        precio: 1320.00,
        capacidad: 4,
        descripcion: "doble",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('habitacion', null, {});
  },
};
