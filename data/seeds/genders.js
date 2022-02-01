exports.seed = function (knex) {
  return knex('genders').insert([
    { name: 'Male' },
    { name: 'Female' },
    { name: 'Transgender' },
    { name: 'Gender Neutral' },
    { name: 'Non-Binary' },
  ]);
};
