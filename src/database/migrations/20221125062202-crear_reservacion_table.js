'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Reservacion', {
      id_reservacion: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
      },
      fechainicio: {
          type: Sequelize.DataTypes.DATE,
          allowNull:false
      },
      fechafin:{
          type: Sequelize.DataTypes.DATE,
          allowNull:false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Reservacion');
  }
};
