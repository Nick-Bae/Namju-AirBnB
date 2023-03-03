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
        description: "Conveniently situated across the street from Loyola University’s Rogers Park Campus and close to cafes, restaurants and shops, this brand new modern and stylish three bedroom residence presents a new standard in luxurious modern living.",
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
        description: "Come and enjoy a peacfull and traniquil beach getaway at this intimaite beach holiday apartment. Large studio apartment with a queen size bed  pull out sofa bed. Confortable dining are and a kitchen to prepare, service and cook every meal. Grab your beach chairs and beach towels and walk less than one minute to hot sand and warm Atlantic Ocean of Hollywood Beach. Located at the entrance of the famous Hollywood Broardwalk.",
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
        description: "Your family will be close to everything when you stay at this centrally-located place. This is a timeshare I own. I've stayed here several times and it's great since it's less than 10 min to all Disney parks and great value since it's a 1 bed 1 bath with a Partial or Full Kitchen depending on availability, better value than any hotel in the area. Large space close to twice the size of a standard hotel room.",
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
        description: "Millennium Times Square New York is located in the heart of Times Square, surrounded by Broadway theaters and steps from Fifth Avenue shopping. Our oversized rooms provide modern amenities and many offer skyline  Times Square views.",
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
        description: "Kick back & relax in this calm, stylish space just a brief ~30 min commute away from the city and a 2 min drive from LGA and 20 min from JFK. Centrally located in East Elmhurst, we are located next to the best restaurants Queens has to offer. We are just minutes ride to Citi Field, home of the New York Mets & Flushing Meadows park, home of the U.S.",
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
        description: "Modern A-Frame Cabin - Luxury in a small and efficient package.  You will love this tiny living experience.  Set in a quiet residential neighborhood with all the conveniences of Seward close by - but far enough out of town to enjoy some nature.  There are other rental properties but we have taken great efforts to make each unit feel private.  Creek bed access is minutes from your door.",
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
        description: "The Pond House, a vintage glass cabin filled with art, water views & eclectic vibes privately perched on the sacred grounds of Hackmatack Retreat Center. Native prairie, a winding slow river, two ponds, 200+ year old oaks & big sky- Countless places to curl up, gathering, focus-- nooks and crannies indoors and out, we offer “time out for time in” amidst this noisy world. Minutes from 2 small towns, all amenities, we're all about peace & ease-- let us custom curate your experience !",
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
        description: "Spring is here, the treehouse is warm and cozy, the tub hot, and shower working!  Relax in our luxurious, very private, new 4' deep cedar hot tub, while the stars and moon swirl overhead, the waterfall tumbles into the koi pond, and the fire table and torches blaze.  The running stream makes this a spring wildlife refuge, with tons of birds, squirrels, rabbits and even foxes and hawks. We are 420 friendly, so cannabis can now be smoked in the enclosed outdoor areas. Come experience the magic!",
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
        description: "Relax with family & friends at our large heated indoor pool with a tiki bar, game room & stylish, cozy living space & kitchen. With tons of gathering space, you can enjoy our home in all seasons.",
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
        description: "Welcome to Pere Ridge ! Enjoy the lovely setting of this romantic spot in nature. Pere Ridge is a custom Scandinavian inspired nature escape for two . Our elevated cabin is perched on a ridge with a deck and hot tub that is surrounded by trees. Our hope is that you disconnect from life's stresses while at Pere Ridge. Our cabin is located in the ridge area of Grafton and is a short drive to Grafton. It is a light filled studio cabin with modern touches ",
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
        description: `Perfect for a romantic getaway or family fun, you are bound to enjoy your time on our private 30 acre retreat.

        Relax and watch fireflies, listen to birds, crickets, and fish jumping in the private 7 acre lake while sipping your coffee on the patio. Try out some stargazing year-round with our new telescope.
        
        During the cooler months, relax and stay cozy while enjoying colors of the leaves or watching the snow fall.`,
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
        description: "This cozy 2-bedroom country house sits on 8 acres, sleeps 6 and overlooks Clinton Lake with amazing views.  It is renovated, and tastefully decorated. Offers a hot tub,  heated pool (shared with owners who live in a separate house on property), kayaks, canoe, and 10 miles of hiking, hunting, and horse trails. The boat ramp is located at the end of the driveway.  We are located 30 minutes between Bloomington & Champaign. Children 13 and over are welcome. Pool open May-Sept weather permitting.",
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
        description: `Reconnect with nature at this unforgettable escape. Located at 2nd Hand Ranch & Rescue, this tiny house in the timber was built to share the beauty of nature with folks that want to camp.... but not really camp. 
        This 12x12 house is off grid with a cute outhouse nestled in the timber behind the wildlife rescue.   Relax and unplug for the weekend and know 100% of the fee goes to the animal rescue. We bring your supplies up via Gator as you hike the trail up.`,
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
        description: "A charming getaway near the lake and woods of Lake Bloomington in Central, IL. Originally built as a schoolhouse one hundred years ago, this cabin has character and unique features for days! The comfortable and eye catching furnishings and decor, along with great amenities, big and small, you’ll find the Schoolhouse cabin to be just what you need for a relaxing getaway.  Enjoy the hot tub, heated game room outdoor bed or the multiple reading books",
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
        description: `Whether you want to step away from the city life, have a quiet weekend, a girl’s trip, or a blast with your family at the beach, this is the place for you! You will be greeted with modern amenities and a fantastic lake view! 

        Stay at our newly renovated 3 level lake cabin. Master suites occupy both the entire top and bottom levels of the home allowing privacy for multiple couples or families. `,
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
        description: `Take it easy at this Rustic, Unique and Tranquil country getaway. Whether you are here to harvest the bounty of nature or just to get away from the city you are sure to enjoy your stay.

        I would like to extend a warm welcome to guests of all backgrounds looking to stay at the cabin who agree to treat the cabin with respect and abide by the house rules!`,
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
        description: "Ever wondered what it’s like to stay in a TINY HOME?! Traveling with a boat, rv, or trailer? Need a pit stop with all the stops? Located just outside the of Mulberry Grove off I-70 on private wooded lot. Tiny Home is fully updated has all the comforts of home! Living room/kitchen, full bathroom, WASHER & DRYER, and 1 bedroom! Queen Air mattress for extra guests. Smart TVs, electric fireplace, AC & Heat! Enjoy the fire pit! Room to park your boat/RV on lot! 15 mins to Carlye Lake & Vandalia Lake!",
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
        description: "Welcome to Paradise Cottage nestled on Lake Paradise!  Cozy and warm with wood finishes throughout.  Includes three-tired deck/patio, with the lowest level sitting over the water.  Perfect for fishing (this lake hosts an annual fishing tournament), canoeing/kayaking, or just relaxing. Great for bird watching, with great blue herons, egrets, ducks, bald eagles, plovers, cormorants, woodpeckers and other species seen daily.",
        price: 391,
        createdAt:"2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36"
      },
      // {
      //   ownerId: 2,
      //   address: "555 N Clarks St",
      //   city: "Chicago",
      //   state: "Illinois",
      //   country: "United States of America",
      //   lat: 51,
      //   lng: 56,
      //   name: "Wood Camper",
      //   description: "Place where web developers are created",
      //   price: 60,
      //   createdAt:"2021-11-19 20:39:36",
      //   updatedAt: "2021-11-19 20:39:36"
      // },
     
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
