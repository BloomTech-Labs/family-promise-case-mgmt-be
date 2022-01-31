exports.seed = function (knex) {
  return knex('races').insert([
    { name: 'white' },
    { name: 'white' },
    { name: 'white' },
    { name: 'white' },
    { name: 'white' },
    { name: 'white' },
  ]);
};
