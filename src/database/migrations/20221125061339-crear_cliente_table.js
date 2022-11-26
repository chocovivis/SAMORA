'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Cliente', {
      
      id_cliente: {
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
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      email:{
          type:Sequelize.DataTypes.STRING(12),
          allowNull:false,
      },
      direccion:{
          type:Sequelize.DataTypes.STRING(60),
          allowNull:false,
      },
      telefono:{
          type:Sequelize.DataTypes.STRING(12),
          allowNull:false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Cliente');
  }
};
