exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ethnicities')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ethnicities').insert([
        { id: 1, colName: 'American Indian or Alaska Native' },
        { id: 2, colName: 'Black or African American' },
        { id: 3, colName: 'Asian' },
      ]);
    });
};
