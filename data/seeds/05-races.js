exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('races')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('races').insert([
        { id: 1, name: 'white' },
        { id: 2, colName: 'black or african american' },
        { id: 3, colName: 'asian' },
      ]);
    });
};
