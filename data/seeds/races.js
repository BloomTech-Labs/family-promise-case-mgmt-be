exports.seed = function (knex) {
  return knex('races').insert([
    { name: 'White' },
    { name: 'Black or African American' },
    { name: 'American Indian or Alaska Native' },
    { name: 'Asian' },
    { name: 'Native Hawaiian or Other Pacific Islander' },
  ]);
};
