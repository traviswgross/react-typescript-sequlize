'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      locationId: {
        type: Sequelize.INTEGER
      },
      number: { type: Sequelize.STRING },
      service: { type: Sequelize.STRING },
    }, {
      timestamps: false
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Accounts');
  }
};
