'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('cliente', {
      
      idCliente: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
      },
      nombre: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false,
      },
      apellido: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      email:{
          type:Sequelize.DataTypes.STRING(30),
          allowNull:false,
      },
      direccion:{
          type:Sequelize.DataTypes.STRING(60),
          allowNull:false,
      },
      telefono:{
          type:Sequelize.DataTypes.STRING(12),
          allowNull:false,
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
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('cliente');
  }
};
