exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('genders')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('genders').insert([
        { name: 'Male' },
        { name: 'Female' },
        { name: 'Transgender Male' },
        { name: 'Transgender Female' },
        { name: 'Non-Binary' },
        { name: 'Prefer to Self-Describe' },
      ]);
    });
};
