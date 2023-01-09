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
        name: "Brownstone",
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
      {
        ownerId: 2,
        address: "99 N Ridge rd",
        city: "Mears",
        state: "Michigan",
        country: "United States of America",
        lat: 32,
        lng: 11,
        name: "Lake Michigan",
        description: "Place where web developers are created",
        price: 150,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 3,
        address: "29 N Grand Ave",
        city: "Fox Lake",
        state: "Illinois",
        country: "United States of America",
        lat: 22,
        lng: 56,
        name: "Hideaway",
        description: "Place where web developers are created",
        price: 154,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 1,
        address: "110th Ave",
        city: "Mondovi",
        state: "Wisconsin",
        country: "United States of America",
        lat: 52,
        lng: 26,
        name: "Tiny house",
        description: "Place where web developers are created",
        price: 161,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 2,
        address: "Otter Lake Ave",
        city: "Eagle River",
        state: "Wisconsin",
        country: "United States of America",
        lat: 42,
        lng: 16,
        name: "Lake Cabin",
        description: "Place where web developers are created",
        price: 152,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 3,
        address: "Country Rd",
        city: "Richland center",
        state: "Wisconsin",
        country: "United States of America",
        lat: 52,
        lng: 26,
        name: "Water Villa",
        description: "Place where web developers are created",
        price: 183,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 1,
        address: "W Devon Ave",
        city: "Chicago",
        state: "Illinois",
        country: "United States of America",
        lat: 47,
        lng: 25,
        name: "Elegant 1bed",
        description: "Place where web developers are created",
        price: 66,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 2,
        address: "Mason Lake",
        city: "Briggsville",
        state: "Illinois",
        country: "United States of America",
        lat: 57,
        lng: 20,
        name: "Dairy Barn",
        description: "Place where web developers are created",
        price: 700,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 3,
        address: "598 W Chicago Ave",
        city: "Chicago",
        state: "Illinois",
        country: "United States of America",
        lat: 41,
        lng: 19,
        name: "Magnificent 2BD",
        description: "Place where web developers are created",
        price: 208,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 1,
        address: "123 Monroe St",
        city: "Chicago",
        state: "Illinois",
        country: "United States of America",
        lat: 54,
        lng: 22,
        name: "Theater District",
        description: "Place where web developers are created",
        price: 137,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 2,
        address: "52 W Division St",
        city: "Chicago",
        state: "Illinois",
        country: "United States of America",
        lat: 59,
        lng: 21,
        name: "Cozy Luxury",
        description: "Place where web developers are created",
        price: 250,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 3,
        address: "987 W Howard St",
        city: "Chicago",
        state: "Illinois",
        country: "United States of America",
        lat: 23,
        lng: 58,
        name: "Lakefront",
        description: "Place where web developers are created",
        price: 108,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
     
      {
        ownerId: 1,
        address: "111 N Clarks St",
        city: "Chicago",
        state: "Illinois",
        country: "United States of America",
        lat: 56,
        lng: 21,
        name: "Penthouse",
        description: "Place where web developers are created",
        price: 391,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      {
        ownerId: 2,
        address: "555 N Clarks St",
        city: "Chicago",
        state: "Illinois",
        country: "United States of America",
        lat: 51,
        lng: 56,
        name: "Wood Camper",
        description: "Place where web developers are created",
        price: 60,
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
