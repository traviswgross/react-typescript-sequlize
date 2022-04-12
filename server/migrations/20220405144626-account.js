'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      locationId: {
        type: Sequelize.STRING
      },
      number: { type: Sequelize.INTEGER },
      service: { type: Sequelize.STRING },
    }, {
      timestamps: false
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Accounts');
  }
};
