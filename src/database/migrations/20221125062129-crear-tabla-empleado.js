'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('empleado', {
      idEmpleado: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true,
        unique: true,
      },
      idUsuario: {
        type:  Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:'usuario',
          key: 'idUsuario',
        }
      },
      nombre: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false,
      },
      puesto: {
        type: Sequelize.DataTypes.STRING(10),
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
    return queryInterface.dropTable('empleado');
  }
};
