exports.seed = function (knex) {
  return knex('genders').insert([
    { name: 'male' },
    { name: 'male' },
    { name: 'male' },
    { name: 'male' },
    { name: 'male' },
    { name: 'female' },
  ]);
};
