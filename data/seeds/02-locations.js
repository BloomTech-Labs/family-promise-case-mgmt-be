// exports.seed = function (knex) {
//   // eslint-disable-line
//   // Deletes ALL existing entries
//   return knex('locations')
//     .truncate() // eslint-disable-line
//     .then(function () {
//       // Inserts seed entries
//       return knex('locations').insert([
//         {
//           household_id: 1,
//           type: 'Family',
//           name: 'Goldberg Family',
//           latlong: '34.0522° N, 118.2437° W',
//           address1: '6301 Orion Ave',
//           address2: 'NA',
//           city: 'Van Nuy',
//           state: 'California',
//           zip: '91411',
//         }, // eslint-disable-line
//         {
//           household_id: 2,
//           type: 'Family',
//           name: 'Simpson Family',
//           latlong: '44.0462° N, 123.0220° W',
//           address1: '742 Evergreen Terrace',
//           address2: 'NA',
//           city: 'Springfield',
//           state: 'Oregon',
//           zip: '97403',
//         }, // eslint-disable-line
//         {
//           household_id: 3,
//           type: 'Family',
//           name: 'Smith Family',
//           latlong: '38.9465° N, 77.1589° W',
//           address1: '1024 Cherry Street',
//           address2: 'NA',
//           city: 'Langley Falls',
//           state: 'Virginia',
//           zip: '23655',
//         }, // eslint-disable-line
//         {
//           household_id: 4,
//           type: 'Family',
//           name: 'Griffin Family',
//           latlong: '41.8240° N, 71.4128° W',
//           address1: '31 Spooner Street',
//           address2: 'NA',
//           city: 'Quahog',
//           state: 'Rhode Island',
//           zip: '00093',
//         }, // eslint-disable-line
//         {
//           household_id: 5,
//           type: 'Family',
//           name: 'Belcher Family',
//           latlong: "39° 50' 1.8636 N, 74° 52' 18.5736 W",
//           address1: 'Ocean Ave',
//           address2: 'NA',
//           city: 'Beachwood',
//           state: 'New Jersey',
//           zip: '08722',
//         }, // eslint-disable-line
//       ]);
//     });
// };

exports.seed = function (knex) {
  // eslint-disable-line
  // Deletes ALL existing entries
  return knex('locations')
    .truncate() // eslint-disable-line
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          household_id: 1,
          type: 'Family',
          name: 'Goldberg Family',
          latlong: '34.0522° N, 118.2437° W',
          address1: '6301 Orion Ave',
          address2: 'NA',
          city: 'Van Nuy',
          state: 'California',
          zip: '91411',
        }, // eslint-disable-line
        {
          household_id: 2,
          type: 'Family',
          name: 'Simpson Family',
          latlong: '44.0462° N, 123.0220° W',
          address1: '742 Evergreen Terrace',
          address2: 'NA',
          city: 'Springfield',
          state: 'Oregon',
          zip: '97403',
        }, // eslint-disable-line
        {
          household_id: 3,
          type: 'Family',
          name: 'Smith Family',
          latlong: '38.9465° N, 77.1589° W',
          address1: '1024 Cherry Street',
          address2: 'NA',
          city: 'Langley Falls',
          state: 'Virginia',
          zip: '23655',
        }, // eslint-disable-line
        {
          household_id: 4,
          type: 'Family',
          name: 'Griffin Family',
          latlong: '41.8240° N, 71.4128° W',
          address1: '31 Spooner Street',
          address2: 'NA',
          city: 'Quahog',
          state: 'Rhode Island',
          zip: '00093',
        }, // eslint-disable-line
        {
          household_id: 5,
          type: 'Family',
          name: 'Belcher Family',
          latlong: "39° 50' 1.8636 N, 74° 52' 18.5736 W",
          address1: 'Ocean Ave',
          address2: 'NA',
          city: 'Beachwood',
          state: 'New Jersey',
          zip: '08722',
        }, // eslint-disable-line
      ]);
    });
};
