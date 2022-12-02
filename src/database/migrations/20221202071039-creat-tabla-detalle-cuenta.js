'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('detalle_cuenta', {
      idDetalleCuenta: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      idReservacion: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:'reservacion',
          key: 'idReservacion',
        }
      },
      totalFinal: {
        type: Sequelize.DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      estado: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true,
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

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('detalle_cuenta');
  }
};
