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
    {
     userId: 1,
     spotId: 7,
     review: "this home is absolutely stunning!! the sand dunes are a short bike ride away!! would definitely recommend and hope to come back!" ,
     stars: 4,
   },
    {
     userId: 2,
     spotId: 8,
     review: "The best type of place to stay and the best type of home owner to work with. Andy was great with communication and was always fast to respond. Above and beyond type of home" ,
     stars: 5,
   },
    {
     userId: 3,
     spotId: 9,
     review: "My boyfriend and I loved loved loved staying at The Sap House. Being within the woods surrounded by nature was the perfect get away from the city." ,
     stars: 3,
   },
    {
     userId: 1,
     spotId: 10,
     review: "My boyfriend and I loved loved loved staying at The Sap House. Being within the woods surrounded by nature was the perfect get away from the city." ,
     stars: 4,
   },
    {
     userId: 2,
     spotId: 11,
     review: "Amazing stay! So peaceful and beautiful, I would 10/10 go back! Highly recommend RC’s tacos too— great authentic Mexican food." ,
     stars: 5,
   },
    {
     userId: 3,
     spotId: 12,
     review: "Absolutely enjoyed my stay! The entire place was very clean and check in was easy. Everything was as described. I would definitely stay again!" ,
     stars: 5,
   },
    {
     userId: 1,
     spotId: 13,
     review: "If you are looking for an unforgettable getaway for a large group, don’t look any further. The pictures (albeit beautiful) just don’t do this beauty justice! You have to see this Airbnb" ,
     stars: 4,
   },
    {
     userId: 2,
     spotId: 14,
     review: "This apartment was well worth the price. My family and I had an excellent stay. We had plenty of room for the five of us. Everything you could need is walkable, including the Mag " ,
     stars: 5,
   },
    {
     userId: 3,
     spotId: 15,
     review: "Stephanie’s place is located in a fabulous location. Right in the centre of the action. Walking distance to the nearest centres. A clean, secure and tidy apartment. Highly recommended" ,
     stars: 3,
   },
    {
     userId: 1,
     spotId: 16,
     review: "Amy was a fantastic host. A group of friends and I were meeting for a reunion in Chicago and we felt at home with this stay. It was close to everything we wanted! When we weren’t" ,
     stars: 5,
   },
    {
     userId: 2,
     spotId: 17,
     review: "Beautiful apartment & great location. Sally was very responsive & accommodating to all requests. Would highly recommend!" ,
     stars: 5,
   },
    {
     userId: 3,
     spotId: 18,
     review: "Great view, nice furniture, and a safe location. The best place ever!" ,
     stars: 4,
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
