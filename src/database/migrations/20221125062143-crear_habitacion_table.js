'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Habitacion', {
      num_habitacion: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
      },
      precio: {
        type: Sequelize.DataTypes.DOUBLE,
        allowNull: false,
      },
      capacidad: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      descripcion: {
          type: Sequelize.DataTypes.STRING(60),
          allowNull: false,
      },
      estado: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Habitacion');
  }
};
