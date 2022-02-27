exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('finances')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('finances').insert([
        {
          history_of_evictions: true,
          history_of_landlord_debt: false,
          history_of_criminal_activity: false,
          history_of_poor_credit: false,
          rental_history: false,
          amount_of_student_debt: 0,
          amount_of_medical_debt: 3000,
          amount_of_credit_card_debt: 0,
          amount_of_auto_debt: 0,
        },
        {
          history_of_evictions: false,
          history_of_landlord_debt: false,
          history_of_criminal_activity: true,
          history_of_poor_credit: false,
          rental_history: false,
          amount_of_student_debt: 2000,
          amount_of_medical_debt: 5000,
          amount_of_credit_card_debt: 0,
          amount_of_auto_debt: 0,
        },
        {
          history_of_evictions: false,
          history_of_landlord_debt: false,
          history_of_criminal_activity: false,
          history_of_poor_credit: false,
          rental_history: false,
          amount_of_student_debt: 4000,
          amount_of_medical_debt: 6000,
          amount_of_credit_card_debt: 0,
          amount_of_auto_debt: 0,
        },
      ]);
    });
};