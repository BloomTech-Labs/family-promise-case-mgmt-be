exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('phone_numbers')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('phone_numbers').insert([
        {
          id: 1,
          number: '808-353-9044',
          phone_type: 'work',
          deleted_at: '',
          created_at: '',
        },
        {
          id: 2,
          number: '808-677-9821',
          phone_type: 'home',
          deleted_at: '',
          created_at: '',
        },
        {
          id: 3,
          number: '808-999-9909',
          phone_type: 'home',
          deleted_at: '',
          created_at: '',
        },
      ]);
    });
};
