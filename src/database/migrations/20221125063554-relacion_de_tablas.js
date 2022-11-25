"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn("Reservacion", "id_cliente", {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Cliente",
          key: "id_cliente",
        },
        onDelete:'SET NULL'
      }),
      queryInterface.addColumn("Reservacion", "num_habitacion", {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Habitacion",
          key: "num_habitacion",
        },
        onDelete:'SET NULL'
      }),
      queryInterface.addColumn("Habitacion", "id_empleado", {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Empleado",
          key: "id_empleado",
        },
        onDelete:'SET NULL'
      }),
      
    ];
  },

  async down(queryInterface, Sequelize) {
    return[
      queryInterface.removeColumn('Reservacion', 'id_cliente'),
      queryInterface.removeColumn('Reservacion', 'num_habitacion'),
      queryInterface.removeColumn('Habitacion', 'id_empleado'),
    ]
  },
};
