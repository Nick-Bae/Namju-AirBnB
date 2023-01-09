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


      {
        url: "https://a0.muscache.com/im/pictures/6ba23e66-e847-46d3-b372-c861fc31b90d.jpg?im_w=960",
        previewImage: true,
        spotId: 7,
        reviewId: 7,
        userId:2
      },
      {
        url: "https://a0.muscache.com/im/pictures/51ba83ef-d9f5-4862-9628-8dcd8b2146c6.jpg?im_w=720",
        previewImage: false,
        spotId: 7,
        reviewId: 7,
        userId:2
      },
      {
        url: "https://a0.muscache.com/im/pictures/906dc848-7b82-49e9-8665-0c3fd27778e6.jpg?im_w=720",
        previewImage: false,
        spotId: 7,
        reviewId: 7,
        userId:2
      },
      {
        url: "https://a0.muscache.com/im/pictures/155eced6-62dc-4192-8f17-9f4c57db3ab2.jpg?im_w=720",
        previewImage: false,
        spotId: 7,
        reviewId: 7,
        userId:2
      },
      {
        url: "https://a0.muscache.com/im/pictures/9f3efb2b-ab70-42ee-b2c6-09255cf0003f.jpg?im_w=720",
        previewImage: false,
        spotId: 7,
        reviewId: 7,
        userId:2
      },


      {
        url: "https://a0.muscache.com/im/pictures/50aaa8d3-899a-4586-9597-b2141563504e.jpg?im_w=960",
        previewImage: true,
        spotId: 8,
        reviewId: 8,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/d5de8275-5abb-43a5-8997-0d8dceadfc1c.jpg?im_w=720",
        previewImage: false,
        spotId: 8,
        reviewId: 8,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/420e2e17-9a96-4083-96a2-f3c190a450a5.jpg?im_w=720",
        previewImage: false,
        spotId: 8,
        reviewId: 8,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/da3f77aa-aae6-45e7-8493-befa63c129aa.jpg?im_w=720",
        previewImage: false,
        spotId: 8,
        reviewId: 8,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/cf44aeac-4c94-447d-82f1-47b3962bab57.jpg?im_w=720",
        previewImage: false,
        spotId: 8,
        reviewId: 8,
        userId:3
      },


      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-600149711203105670/original/be2efa0d-37e5-40f9-af92-864ddd2f79ef.jpeg?im_w=960",
        previewImage: true,
        spotId: 9,
        reviewId: 9,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-600149711203105670/original/7ea8706f-191d-44e0-b26d-0d7f13918b2d.jpeg?im_w=720",
        previewImage: false,
        spotId: 9,
        reviewId: 9,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-600149711203105670/original/62f62532-b9e0-468d-be6a-1c8032f09d34.jpeg?im_w=720",
        previewImage: false,
        spotId: 9,
        reviewId: 9,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/3c9d338c-aeca-4a46-ac41-a64a9f84c32e.jpg?im_w=720",
        previewImage: false,
        spotId: 9,
        reviewId: 9,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-600149711203105670/original/24baeb4a-8db9-4605-b991-2262ffb741a8.jpeg?im_w=720",
        previewImage: false,
        spotId: 9,
        reviewId: 9,
        userId:1
      },


      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-795795914729528839/original/1d73e6b0-e8ee-4462-a305-a76bfab3d133.jpeg?im_w=960",
        previewImage: true,
        spotId: 10,
        reviewId: 10,
        userId:2
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-795795914729528839/original/39109ba9-ea30-46d9-abad-752b6ad90bed.jpeg?im_w=720",
        previewImage: false,
        spotId: 10,
        reviewId: 10,
        userId:2
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-795795914729528839/original/a4500716-a84e-4ad4-b894-b3dbc9853713.jpeg?im_w=720",
        previewImage: false,
        spotId: 10,
        reviewId: 10,
        userId:2
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-795795914729528839/original/d9fb35ca-b017-4c21-bd43-ed67f64c5547.jpeg?im_w=720",
        previewImage: false,
        spotId: 10,
        reviewId: 10,
        userId:2
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-795795914729528839/original/9e8a1f31-6d9e-4044-a083-24c1f2569c22.jpeg?im_w=720",
        previewImage: false,
        spotId: 10,
        reviewId: 10,
        userId:2
      },
          

      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50568903/original/6ff64c0e-cb05-47be-a0f8-21d1b66fb074.jpeg?im_w=960",
        previewImage: true,
        spotId: 11,
        reviewId: 11,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50568903/original/981811cf-6a52-4b7b-a643-f559e5358982.jpeg?im_w=720",
        previewImage: false,
        spotId: 11,
        reviewId: 11,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50568903/original/12fb990a-b6c6-48e9-865f-7c9479a30fc3.jpeg?im_w=720",
        previewImage: false,
        spotId: 11,
        reviewId: 11,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50568903/original/334fc15f-8843-4011-a2a3-c0ff1456a731.jpeg?im_w=720",
        previewImage: false,
        spotId: 11,
        reviewId: 11,
        userId:3
      },
      {
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50568903/original/5588ded9-4975-48d2-ae7a-41dec70e5ff1.jpeg?im_w=720",
        previewImage: false,
        spotId: 11,
        reviewId: 11,
        userId:3
      },


      {
        url: "https://a0.muscache.com/im/pictures/ed3a0ef9-7e8d-4b87-bf10-f44a58f34669.jpg?im_w=960",
        previewImage: true,
        spotId: 12,
        reviewId: 12,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/206f4d53-bf1b-4ae1-9c9b-6b029e1a97b9.jpg?im_w=720",
        previewImage: false,
        spotId: 12,
        reviewId: 12,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/0a18f028-4c77-44ae-9fe8-5f3a74ab36ce.jpg?im_w=720",
        previewImage: false,
        spotId: 12,
        reviewId: 12,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/3fa61594-e2b2-44aa-97f2-4e2be43389e2.jpg?im_w=720",
        previewImage: false,
        spotId: 12,
        reviewId: 12,
        userId:1
      },
      {
        url: "https://a0.muscache.com/im/pictures/22a8f536-306e-4982-a2fe-b7e6a7de6442.jpg?im_w=720",
        previewImage: false,
        spotId: 12,
        reviewId: 12,
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
