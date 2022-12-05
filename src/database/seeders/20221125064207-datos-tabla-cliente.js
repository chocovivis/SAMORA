"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('cliente',
      [{
        idUsuario: 3,
        nombre: "Rodrigo",
        direccion: "Primera avenida central S/N",
        telefono: "8811135807",
        apellido: "Valentin Castellano",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idUsuario: 4,
        nombre: "Yessica",
        direccion: "Av. Paseo de la Reforma #230",
        telefono: "6967631301",
        apellido: "Nicolea Clowsley",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idUsuario: 5,
        nombre: "Alexis",
        direccion: "Eje central Lázaro Cárdenas #70",
        telefono: "3623330896",
        apellido: "Tabatha Rostron",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idUsuario: 6,
        nombre: "José",
        direccion: "Avenida 16 de Septiembre #237",
        telefono: "6276967137",
        apellido: "Roberto Jillis",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cliente', null, {
    });
  }
};
