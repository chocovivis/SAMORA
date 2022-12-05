'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('detalle_cuenta_servicio', {
      idDetalleCuentaServicio: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      idDetalleCuenta: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:'detalle_cuenta',
          key: 'idDetalleCuenta',
        }
      },
      idServicio: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:'servicio',
          key: 'idServicio',
        }
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
    return queryInterface.dropTable('detalle_cuenta_servicio');
  }
};
