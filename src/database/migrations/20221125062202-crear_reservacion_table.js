'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('reservacion', {
      idReservacion: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      fechaInicio: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
      },
      fechaFin: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
      },
      estado: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        defaultValue: "PENDIENTE",
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull:true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('reservacion');
  }
};
