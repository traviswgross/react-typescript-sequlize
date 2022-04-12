'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Accounts', [{
      id: 1,
      locationId: 1,
      number: "0001E",
      service: "electric",
    },
    {
      id: 2,
      locationId: 1,
      number: "0001NG",
      service: "natural_gas",
    },
    {
      id: 3,
      locationId: 1,
      number: "0001W",
      service: "water",
    },
    {
      id: 4,
      locationId: 4,
      number: "0004E",
      service: "electric",
    },
    {
      id: 5,
      locationId: 4,
      number: "0004NG",
      service: "natural_gas",
    },
    {
      id: 6,
      locationId: 4,
      number: "0004W",
      service: "water",
    },
    {
      id: 7,
      locationId: 3,
      number: "0003E",
      service: "electric",
    },
    {
      id: 8,
      locationId: 3,
      number: "0003NG",
      service: "natural_gas",
    },
    {
      id: 9,
      locationId: 3,
      number: "0003W",
      service: "water",
    },
    {
      id: 10,
      locationId: 2,
      number: "0002E",
      service: "electric",
    },
    {
      id: 11,
      locationId: 2,
      number: "0002NG",
      service: "natural_gas",
    },
    {
      id: 12,
      locationId: 2,
      number: "0002W",
      service: "water",
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Acounts', null, {});
  }
};
