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
        url: [
          "https://static.studyusa.com/article/aws_BepGulJ9q0x83E5g45MeStlB7xio4gpq_sm_2x.jpg?format=webp",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49732987/original/ebafc4a6-981b-4b84-83c4-1d8d9c4e67eb.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49732987/original/ada7893f-4a99-4cf9-a4b3-4ac16f55b923.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49732987/original/da3656f2-6221-49e0-ab19-c6c0769a5035.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49732987/original/31151875-d73f-4718-b409-d489738fd9fd.jpeg?im_w=720"
        ],
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
