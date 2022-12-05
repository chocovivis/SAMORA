'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('habitacion', {
      numHabitacion: {
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
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('habitacion');
  }
};
