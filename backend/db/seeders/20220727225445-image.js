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
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49732987/original/ebafc4a6-981b-4b84-83c4-1d8d9c4e67eb.jpeg?im_w=1200",
        previewImage: false,
        spotId: 1,
        reviewId: 1,
        userId: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49732987/original/ada7893f-4a99-4cf9-a4b3-4ac16f55b923.jpeg?im_w=720",
        previewImage: false,
        spotId: 1,
        reviewId: 1,
        userId: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49732987/original/da3656f2-6221-49e0-ab19-c6c0769a5035.jpeg?im_w=720",
        previewImage: false,
        spotId: 1,
        reviewId: 1,
        userId: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49732987/original/31151875-d73f-4718-b409-d489738fd9fd.jpeg?im_w=720",
        previewImage: false,
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
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51146523/original/fa94371d-864f-4920-a8ec-7c39416f8753.jpeg?im_w=720",
        previewImage: false,
        spotId: 2,
        reviewId: 2,
        userId: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51146523/original/4f439012-d395-4b8b-b8f8-f772986a64a4.jpeg?im_w=720",
        previewImage: false,
        spotId: 2,
        reviewId: 2,
        userId: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51146523/original/22de459c-8bc6-4a74-bc80-f075b7b15768.jpeg?im_w=720",
        previewImage: false,
        spotId: 2,
        reviewId: 2,
        userId: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51146523/original/2aaf8965-4a61-427a-ac9f-06cb2fd9b5c0.jpeg?im_w=720",
        previewImage: false,
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
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-647682961330831557/original/f4e906f7-18c0-4df8-8cf4-f6e0bc081f79.png?im_w=720",
        previewImage: false,
        spotId: 3,
        reviewId: 3,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-647682961330831557/original/ff3f0ca3-d5cc-495f-9b68-655f72c2c008.png?im_w=1200",
        previewImage: false,
        spotId: 3,
        reviewId: 3,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-647682961330831557/original/ac77e441-c97e-4f50-93af-9d73a9919c2a.jpeg?im_w=720",
        previewImage: false,
        spotId: 3,
        reviewId: 3,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-647682961330831557/original/98d1bc96-1b5d-4ced-8070-7926791adf59.jpeg?im_w=720",
        previewImage: false,
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
        url: "https://a0.muscache.com/im/pictures/85237768/072399b9_original.jpg?im_w=1200",
        previewImage: false,
        spotId: 4,
        reviewId: 4,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/bb9a016b-7c39-420d-ae94-87daca67d3cf.jpg?im_w=720",
        previewImage: false,
        spotId: 4,
        reviewId: 4,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/5c575f9a-f8be-4404-b3a3-138006cf52f2.jpg?im_w=720",
        previewImage: false,
        spotId: 4,
        reviewId: 4,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/8ae87352-77da-4f66-bd04-01544a5b6dce.jpg?im_w=720",
        previewImage: false,
        spotId: 4,
        reviewId: 4,
        userId:3
      },



      {
        url: "https://a0.muscache.com/im/pictures/8de6b5a5-e46c-4cb8-b717-a78f687dcdfa.jpg?im_w=1200",
        previewImage: true,
        spotId: 5,
        reviewId: 5,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/16e3eebd-3a2d-4901-8622-7315cae8253d.jpg?im_w=720",
        previewImage: false,
        spotId: 5,
        reviewId: 5,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/d8b41e5e-39b2-4c29-90ee-1f16ac7d734f.jpg?im_w=720",
        previewImage: false,
        spotId: 5,
        reviewId: 5,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/b4610adf-1c8e-4bb5-b3cd-9b442939e14a.jpg?im_w=720",
        previewImage: false,
        spotId: 5,
        reviewId: 5,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/2d40cc9c-2930-4010-9e4e-49ce6b546e8a.jpg?im_w=720",
        previewImage: false,
        spotId: 5,
        reviewId: 5,
        userId:3
      },


      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-9497176/original/45fd2d8d-6963-4cb8-831f-9c37fe5e45d0.jpeg?im_w=1200",
        previewImage: true,
        spotId: 6,
        reviewId: 6,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-9497176/original/5e34ab2f-727e-4a81-a20a-da841314d241.jpeg?im_w=720",
        previewImage: false,
        spotId: 6,
        reviewId: 6,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-9497176/original/604d7c02-09bf-4dec-a483-340301497a37.jpeg?im_w=720",
        previewImage: false,
        spotId: 6,
        reviewId: 6,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-9497176/original/ea495396-8806-4398-bd45-b9bd05e95450.jpeg?im_w=720",
        previewImage: false,
        spotId: 6,
        reviewId: 6,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-9497176/original/0de0c664-0def-4cb7-8c9f-51a05141f7b7.jpeg?im_w=720",
        previewImage: false,
        spotId: 6,
        reviewId: 6,
        userId:1
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
