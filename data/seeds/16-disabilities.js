exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('disabilities')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('disabilities').insert([
        { client_id: 1, disability: 'PTSD' },
        { client_id: 2, disability: 'ADHD' },
        { client_id: 3 },
      ]);
    });
};
