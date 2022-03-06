exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('email_addresses')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('email_addresses').insert([
        {
          client_id: 1,
          email: 'john090@gmail.com',
          email_type: 'home',
          allow_sms: true,
        },
        {
          client_id: 1,
          email: 'smith303@gmail.com',
          email_type: 'home',
          allow_sms: false,
        },
        {
          client_id: 2,
          email: 'goldberg@gmail.com',
          email_type: 'home',
          allow_sms: true,
        },
      ]);
    });
};
