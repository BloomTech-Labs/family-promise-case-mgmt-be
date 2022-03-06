exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('phone_numbers')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('phone_numbers').insert([
        {
          number: '808-353-9044',
          phone_type: 'work',
        },
        {
          number: '808-677-9821',
          phone_type: 'home',
        },
        {
          number: '808-999-9909',
          phone_type: 'home',
        },
      ]);
    });
};
