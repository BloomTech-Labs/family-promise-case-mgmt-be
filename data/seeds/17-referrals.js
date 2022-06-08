exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('referrals')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('referrals').insert([
        {
          client_id: 1,
          name: 'Joe',
          street_address: '123 anywhere st',
          apt: '34',
          city: 'Rainbow City',
          state: 'Gumdrop Land',
          zip: '12345',
          cell: '555-555-5555',
          home: '555-555-5555',
          work: '555-555-5555',
          email: 'email@email.com',
          first_meeting_date: '2000-05-06',
        },
        {
          client_id: 2,
          name: 'Joe',
          street_address: '123 anywhere st',
          apt: '34',
          city: 'Rainbow City',
          state: 'Gumdrop Land',
          zip: '12345',
          cell: '555-555-5555',
          home: '555-555-5555',
          work: '555-555-5555',
          email: 'email@email.com',
          first_meeting_date: '2000-05-06',
        },
      ]);
    });
};
