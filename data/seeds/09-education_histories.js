exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('education_histories')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('education_histories').insert([
        {
          client_id: 1,
          school_name: 'punahou school',
          level: 'high school',
          start_date: '2022-02-25T02:54:26Z',
          end_date: '2025-02-25T02:54:26Z',
        },
        {
          client_id: 2,
          school_name: 'hawaii university',
          level: 'university',
          start_date: '2022-02-25T02:54:26Z',
          end_date: '2026-02-25T02:54:26Z',
        },
        {
          client_id: 3,
          school_name: 'Kona college',
          level: 'college',
          start_date: '2022-02-25T02:54:26Z',
          end_date: '2024-02-25T02:54:26Z',
        },
      ]);
    });
};
