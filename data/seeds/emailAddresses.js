exports.seed = function (knex) {
  return knex('email_addresses').insert(
      [
        {  client_id: 1, email: "tom34235@gmail.com",  email_type: "GMAIL",  allow_sms: true}, 
        {  client_id: 2, email: "kate34235@gmail.com",  email_type: "GMAIL",  allow_sms: false}, 
        {  client_id: 3, email: "tracy34235@gmail.com",  email_type: "GMAIL",  allow_sms: true}
      ]
     );
};
