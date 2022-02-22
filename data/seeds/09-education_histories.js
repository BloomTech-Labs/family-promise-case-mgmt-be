exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('education_histories')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('education_histories').insert([
        {
          id: 1,
          school_name: 'punahou school',
          level: 'high school',
          start_date: '09/11/2012',
          end_date: '09/11/2016',
        },
        {
          id: 2,
          school_name: 'hawaii university',
          level: 'university',
          start_date: '09/11/2011',
          end_date: '09/11/2015',
        },
        {
          id: 3,
          school_name: 'Kona collage',
          level: 'collage',
          start_date: '09/11/18',
          end_date: '09/11/2020',
        },
      ]);
    });
};
