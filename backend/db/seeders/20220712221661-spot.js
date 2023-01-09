'use strict';

module.exports = {
  // async up (queryInterface, Sequelize) {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: "123 Cambel ave Chicago IL 60067",
        city: "Chicago",
        state: "Illinois",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Windy City",
        description: "Place where web developers are created",
        price: 300,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {ownerId: 1,
        address: "5263 Victory ave Los Angeles CA 90202",
        city: "Los Angeles",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Hollywood",
        description: "Place where web developers are created",
        price: 600,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 2,
        address: "100 Disney Rd Orlando FL 32789",
        city: "Orlando",
        state: "Florida",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Disney World",
        description: "Place where web developers are created",
        price: 480,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 3,
        address: "20 W 34th St. New York NY 10001",
        city: "New York",
        state: "New York",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "New York City",
        description: "Place where web developers are created",
        price: 650,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 3,
        address: "4731 Malley Rd Anchorage AK 99507",
        city: "New York",
        state: "New York",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Alaska",
        description: "Place where web developers are created",
        price: 700,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 1,
        address: "298 W Hickory Rd",
        city: "Battle Creek",
        state: "Michigan",
        country: "United States of America",
        lat: 12,
        lng: -1,
        name: "Alaska",
        description: "Place where web developers are created",
        price: 250,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
     
    ], { validate: true });
  },

  // async down (queryInterface, Sequelize) {
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Spots', null, {});
  }
};
