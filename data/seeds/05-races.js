exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('races')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('races').insert([
        { name: 'American Indian or Alaska Native' },
        { name: 'Asian' },
        { name: 'Black or African American' },
        { name: 'Native Hawaiian or Other pacific islander' },
        { name: 'White' },
      ]);
    });
};
