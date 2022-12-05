'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('usuario', 
    {
      idUsuario: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      correo: {
        type:  Sequelize.DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      contrasenia: {
        type:  Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      estatus: {
        type:  Sequelize.DataTypes.STRING(1),
        allowNull: false,
        defaultValue: "A",
      },
      rol: {
        type: Sequelize.DataTypes.STRING(4),
        allowNull: false,
        defaultValue: "2222",
      },
      token_restauracion: {
        type:  Sequelize.DataTypes.STRING(100),
        allowNull: true,
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
    return queryInterface.dropTable('usuario');
  }
};
