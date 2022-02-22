exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('email_addresses')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('email_addresses').insert([
        {
          id: 1,
          email: 'john090@gmail.com',
          email_type: 'home',
          allow_sms: true,
          deleted_at: '',
          created_at: '',
        },
        {
          id: 2,
          email: 'smith303@gmail.com',
          email_type: 'home',
          allow_sms: false,
          deleted_at: '',
          created_at: '',
        },
        {
          id: 3,
          email: 'Goldberg@gmail.com',
          email_type: 'home',
          allow_sms: true,
          deleted_at: '',
          created_at: '',
        },
      ]);
    });
};
