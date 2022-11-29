"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn("reservacion", "idCliente", {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "cliente",
         key: "idCliente",
        },
        onDelete:'SET NULL'
     }),
      queryInterface.addColumn("reservacion", "numHabitacion", {
           type: Sequelize.DataTypes.INTEGER,
          references: {
             model: "habitacion",
             key: "numHabitacion",
           },
           onDelete:'SET NULL'
         }),
       queryInterface.addColumn("habitacion", "idEmpleado", {
         type: Sequelize.DataTypes.INTEGER,
         references: {
           model: "empleado",
           key: "idEmpleado",
         },
         onDelete:'SET NULL'
       }),
      
    ];
  },

  async down(queryInterface, Sequelize) {
    return[
      queryInterface.removeColumn('reservacion', 'idCliente'),
      queryInterface.removeColumn('reservacion', 'numHabitacion'),
      queryInterface.removeColumn('habitacion', 'idEmpleado'),
    ]
  },
};
