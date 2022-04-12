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
    await queryInterface.bulkInsert('Locations', [{
      id: 1,
      city: "Houston",
      state: "TX",
      address: "Lorem",
      zipcode: "77002",
      sqft: 25200,
    },
    {
      id: 2,
      city: "Houston",
      state: "TX",
      address: "Ipsum",
      zipcode: "77002",
      sqft: 5400,
    },
    {
      id: 3,
      city: "Houston",
      state: "TX",
      address: "Tempor",
      zipcode: "77002",
      sqft: 27333,
    },
    {
      id: 4,
      city: "Houston",
      state: "TX",
      address: "Sit Amet",
      zipcode: "77002",
      sqft: 12435,
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
