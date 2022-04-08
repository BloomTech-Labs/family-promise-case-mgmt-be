//This is for adding updated households information

exports.up = function (knex) {
  return knex.schema.alterTable('households', (tbl) => {
    tbl.integer('times_homeless_three_years');
    tbl.integer('total_time_homeless_three_years_years');
    tbl.integer('total_time_homeless_three_years_months');
    tbl.integer('total_time_homeless_past_year_years');
    tbl.integer('total_time_homeless_past_year_months');
    tbl.boolean('previous_living_situation_non_human_habitation');
    tbl.boolean('previous_living_situation_emergency_shelter');
    tbl.boolean('previous_living_situation_unsheltered');
    tbl.integer('previous_stay_length_years');
    tbl.integer('previous_stay_length_months');
    tbl.boolean('needs_interpreter');
    tbl.boolean('access_to_private_transportation');
    tbl.string('client_or_family_history_physical_illness');
    tbl.string('client_or_family_history_mental_illness');
    tbl.string('client_or_family_history_personal_violence');
    tbl.string('client_or_family_history_substance_dependency');
    tbl.boolean('cps_involvement');
    tbl.boolean('cps_involvement_active');
    tbl.string('dcyf_contact_name');
    tbl.string('dcyf_contact_email');
    tbl.string('dcyf_contact_phone_number');
    tbl.boolean('section_8_voucher_lost');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('households');
};
