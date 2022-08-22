'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Images', [
      {
        url: "https://static.studyusa.com/article/aws_BepGulJ9q0x83E5g45MeStlB7xio4gpq_sm_2x.jpg?format=webp",
        previewImage: true,
        spotId: 1,
        reviewId: 1,
        userId: 1
      },
      {
        url: "https://assets.website-files.com/6203f1403d8a6b593d5af548/6203fd301f03ff53d26c5543_hollywood-sign-3.jpg",
        previewImage: true,
        spotId: 2,
        reviewId: 2,
        userId: 2
      },
      {
        url: "https://www.thegate.ca/wp-content/uploads/2022/04/WDW-50-Character-Fashions-1-scaled.jpg",
        previewImage: true,
        spotId: 3,
        reviewId: 3,
        userId:3
      },
      {
        url: "https://www.austrianblog.com/media/images/header_NY_BLOG_.original.jpg",
        previewImage: true,
        spotId: 4,
        reviewId: 4,
        userId:3
      },
      {
        url: "https://www.voglioviverecosi.com/wp-content/uploads/2020/01/VIVERE-IN-ALASKA-1900x1080.jpg",
        previewImage: true,
        spotId: 5,
        reviewId: 5,
        userId:3
      },
      //     {
      //     spotId: 2,
      //     reviewId: 2,
      //     url: "https://images.app.goo.gl/eiR4ZwXGKZ21DfkS9"
      //   },
      //     {
      //     spotId: 5,
      //     reviewId: 4,
      //     url: "https://images.app.goo.gl/K3YrBdzFCkN3vTkBA"
      //   },
      //     {
      //     spotId: 2,
      //     reviewId:5 ,
      //     url: "https://images.app.goo.gl/9HAjMpf5FBEozvwy5"
      //   },
      //     {
      //     spotId: 3,
      //     reviewId:6 ,
      //     url: "https://images.app.goo.gl/oLmp6E6t722Fb5PUA"
      //   },
      //     {
      //     spotId: 1,
      //     url: "https://images.app.goo.gl/iJnnVeTXiTXu9FGb6"
      //   },
      //     {
      //     spotId: 2,
      //     url: "https://images.app.goo.gl/LTFk2JmJ1LHuGvgo9"
      //   },
      //     {
      //     spotId: 3,
      //     url: 'https://images.app.goo.gl/6UvjgwTV2cySoer88'
      //   },
      //     {
      //     spotId: 4,
      //     url: "https://images.app.goo.gl/LgkqSUhfahfi3sB29"
      //   },
      //     {
      //     spotId: 5,
      //     url: "https://images.app.goo.gl/JaumvRr9qfhpo8v97"
      //   },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Images', null, {});
  }
};
