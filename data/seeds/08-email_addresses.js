exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('email_addresses')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('email_addresses').insert([
        {
          email: 'john090@gmail.com',
          email_type: 'home',
          allow_sms: true,
        },
        {
          email: 'smith303@gmail.com',
          email_type: 'home',
          allow_sms: false,
        },
        {
          email: 'goldberg@gmail.com',
          email_type: 'home',
          allow_sms: true,
        },
      ]);
    });
};
