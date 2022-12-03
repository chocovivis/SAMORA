'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('sesion', {
      idSesion: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      idUsuario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      fecha_cierre: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('NOW()')
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
    return queryInterface.dropTable('sesion');
  }
};
