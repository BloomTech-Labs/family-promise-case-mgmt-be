exports.seed = function (knex) {
  return knex('ethnicities').insert([
    { name: 'white' },
    { name: 'white' },
    { name: 'white' },
    { name: 'white' },
    { name: 'white' },
    { name: 'white' },
  ]);
};
