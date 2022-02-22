exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('genders')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('genders').insert([
        { id: 1, name: 'Female' },
        { id: 2, name: 'Male' },
        { id: 3, name: 'Transgender Male' },
      ]);
    });
};
