"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
      "SampleModel",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          description: "UUID",
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(255),
          description: "Name",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          description:
            "Contains the date and time when the record was created.",
        },
      },
      {
        tableName: "SampleTable",
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("SampleTable");
  },
};
