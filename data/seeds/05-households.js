exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('households')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('households').insert([
        {
          name: 'Simpson',
          times_homeless_three_years: 2,
          total_time_homeless_three_years_years: 2,
          total_time_homeless_three_years_months: 0,
          total_time_homeless_past_year_years: 1,
          total_time_homeless_past_year_months: 0,
          previous_living_situation_non_human_habitation: true,
          previous_living_situation_emergency_shelter: false,
          previous_living_situation_unsheltered: true,
          previous_stay_length_years: 1,
          previous_stay_length_months: 0,
          needs_interpreter: false,
          access_to_private_transportation: false,
          client_or_family_history_mental_illness: 'depression',
          cps_involvement: true,
          cps_involvement_active: true,
          dcyf_contact_name: 'Simpson',
          dcyf_contact_email: 'coolsimpson@gmail.com',
          dcyf_contact_phone_number: '808333999',
          section_8_voucher_lost: false,
        },
        {
          name: 'Goldberg',
          times_homeless_three_years: 1,
          total_time_homeless_three_years_years: 1,
          total_time_homeless_three_years_months: 0,
          total_time_homeless_past_year_years: 0,
          total_time_homeless_past_year_months: 10,
          previous_living_situation_non_human_habitation: true,
          previous_living_situation_emergency_shelter: false,
          previous_living_situation_unsheltered: true,
          previous_stay_length_years: 0,
          previous_stay_length_months: 10,
          needs_interpreter: false,
          access_to_private_transportation: false,
          client_or_family_history_mental_illness: 'depression',
          cps_involvement: false,
          cps_involvement_active: false,
          section_8_voucher_lost: false,
        },
        {
          name: 'Smith',
          times_homeless_three_years: 3,
          total_time_homeless_three_years_years: 1,
          total_time_homeless_three_years_months: 5,
          total_time_homeless_past_year_years: 0,
          total_time_homeless_past_year_months: 11,
          previous_living_situation_non_human_habitation: true,
          previous_living_situation_emergency_shelter: false,
          previous_living_situation_unsheltered: true,
          previous_stay_length_years: 0,
          previous_stay_length_months: 11,
          needs_interpreter: false,
          access_to_private_transportation: false,
          cps_involvement: false,
          cps_involvement_active: false,
          section_8_voucher_lost: false,
        },
      ]);
    });
};
