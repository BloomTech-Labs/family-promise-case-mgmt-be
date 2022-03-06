exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('phone_numbers')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('phone_numbers').insert([
        {
          client_id: 1,
          number: '8083539044',
          phone_type: 'work',
        },
        {
          client_id: 2,
          number: '8086779821',
          phone_type: 'home',
        },
        {
          client_id: 3,
          number: '8089999909',
          phone_type: 'home',
        },
      ]);
    });
};
