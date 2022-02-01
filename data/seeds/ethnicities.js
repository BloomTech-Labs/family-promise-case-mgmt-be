exports.seed = function (knex) {
  return knex('ethnicities').insert([
    { name: 'Hispanic or Latino' },
    { name: 'White Non Hispanic or latino' },
  ]);
};
