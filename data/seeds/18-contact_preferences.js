exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('contact_preferences')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('contact_preferences').insert([
        {
          client_id: 1,
          food_assistance: true,
          clothing_assistance: false,
          counseling_services: true,
          addiction_resources: false,
          mentor_programs: true,
          youth_services: false,
          budgeting: true,
          can_text_employment_opportunities: false,
          can_text_apartment_listings: true,
          can_text_career_fairs: false,
        },
      ]);
    });
};
