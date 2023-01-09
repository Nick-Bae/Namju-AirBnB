'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
   await queryInterface.bulkInsert('Reviews', [
    {
      userId: 1,
      spotId: 1,
      review: "This was an awesome spot!",
      stars: 5
    },
    {
     userId: 2,
     spotId: 1,
     review: "This place is nice and clean",
     stars: 4,
   },
    {
     userId: 2 ,
     spotId: 2,
     review:"The host is very kind" ,
     stars: 5,
   },
    {
     userId: 3,
     spotId: 3,
     review: "Bedrooms are very tiny" ,
     stars: 3,
   },
    {
     userId: 3,
     spotId: 4,
     review: "The view is great" ,
     stars: 3,
   },
    {
     userId: 2,
     spotId: 6,
     review: "This is a great house for a Fall/Winter girls getaway weekend! Great location close to Baraboo, Wisconsin Dells and several hiking trails at Devils' Lake and Parfrey's Glen. The house is" ,
     stars: 5,
   },
  //  
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('Reviews', null, {});
  }
};
