exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('households')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('households').insert([
        { id: 1, name: 'Johnson', created_at: '' }, //discuss with Jake about create_at
        { id: 2, name: 'Goldberg', created_at: '' },
        { id: 3, name: 'Smith', created_at: '' },
      ]);
    });
};
