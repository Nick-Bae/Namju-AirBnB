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
        city: "Alaska",
        state: "Alaska",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Alaska",
        description: "Place where web developers are created",
        price: 700,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      // {
      //   ownerId: 3,
      //   name: 'Windy City',
      //   address: '123 Cambel ave Chicago IL 60067',
      //   totalOccupancy: 5,
      //   totalRooms: 3,
      //   totalBathrooms: 2,
      //   hasKitchen: true,
      //   hasAC: true,
      //   hasHeating: true,
      //   hasWifi: true,
      //   isPetAllowed: false,
      //   price: 300,
      //   // image: 'https://images.app.goo.gl/iJnnVeTXiTXu9FGb6',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   ownerId: 1,
      //   name: 'Hollywood',
      //   address: '5263 Victory ave Los Angeles CA 90202',
      //   totalOccupancy: 3,
      //   totalRooms: 2,
      //   totalBathrooms: 2,
      //   hasKitchen: true,
      //   hasAC: true,
      //   hasHeating: false,
      //   hasWifi: true,
      //   isPetAllowed: true,
      //   price: 600,
      //   // image: 'https://images.app.goo.gl/LTFk2JmJ1LHuGvgo9',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   ownerId: 2,
      //   name: 'Disney World',
      //   address: '100 Disney Rd Orlando FL 32789',
      //   totalOccupancy: 8,
      //   totalRooms: 4,
      //   totalBathrooms: 4,
      //   hasKitchen: true,
      //   hasAC: true,
      //   hasHeating: true,
      //   hasWifi: true,
      //   isPetAllowed: false,
      //   price: 500,
      //   // image:'https://images.app.goo.gl/6UvjgwTV2cySoer88',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   ownerId: 3,
      //   name: 'New York City',
      //   address: '20 W 34th St. New York NY 10001',
      //   totalOccupancy: 2,
      //   totalRooms: 1,
      //   totalBathrooms: 1,
      //   hasKitchen: true,
      //   hasAC: true,
      //   hasHeating: true,
      //   hasWifi: true,
      //   isPetAllowed: false,
      //   price: 900,
      //   // image: 'https://images.app.goo.gl/LgkqSUhfahfi3sB29',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   ownerId: 2,
      //   name: 'Alaska',
      //   address: '4731 Malley Rd Anchorage AK 99507',
      //   totalOccupancy: 4,
      //   totalRooms: 2,
      //   totalBathrooms: 2,
      //   hasKitchen: true,
      //   hasAC: false,
      //   hasHeating: true,
      //   hasWifi: false,
      //   isPetAllowed: false,
      //   price: 800,
      //   // image:'https://images.app.goo.gl/JaumvRr9qfhpo8v97',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }
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
