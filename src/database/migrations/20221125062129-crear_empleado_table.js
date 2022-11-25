'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Empleado', {
      id_empleado: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
      },
      nombre: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false,
      },
      puesto: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Empleado');
  }
};
