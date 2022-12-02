'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('servicio', {
      idServicio: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
    nombre: {
      type: Sequelize.DataTypes.STRING(60),
      allowNull: false,
    },
    precio: {
      type: Sequelize.DataTypes.DOUBLE,
        allowNull: false,
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

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('servicio');
  }
};
