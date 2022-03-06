exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('households')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('households').insert([
        { name: 'Johnson' }, //discuss with Jake about create_at
        { name: 'Goldberg' },
        { name: 'Smith' },
      ]);
    });
};