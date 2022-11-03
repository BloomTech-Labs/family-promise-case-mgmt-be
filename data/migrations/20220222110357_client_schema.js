// I didn't make primary key and foregin key, becasue once we made these key we can't change the schema easily (if you want to know more about foregin key => https://github.com/github/gh-ost/issues/331#issuecomment-266027731)

exports.up = function (knex) {
  return knex.schema
    .alterTable('locations', (tbl) => {
      tbl.dropColumn('created_at');
      tbl.dropColumn('deleted_at');
    })
    .alterTable('locations', (tbl) => {
      tbl.datetime('created_at').defaultTo(knex.fn.now());
      tbl.datetime('deleted_at');
    })
    .alterTable('households', (tbl) => {
      tbl.dropColumn('created_at');
    })
    .alterTable('households', (tbl) => {
      tbl.datetime('created_at').defaultTo(knex.fn.now());
    })
    .alterTable('clients', (tbl) => {
      tbl.dropColumn('created_at');
    })
    .alterTable('clients', (tbl) => {
      tbl.integer('phone_numbers_id');
      tbl.integer('email_addresses_id');
      tbl.integer('education_histories_id');
      tbl.integer('most_recent_employment_id');
      tbl.integer('finances_id');
      tbl.integer('insurance_id');
      tbl.integer('documents_id');
      tbl.integer('goals_id');
      tbl.datetime('created_at').defaultTo(knex.fn.now());
    })

    .alterTable('phone_numbers', (tbl) => {
      tbl.dropColumn('number');
      tbl.dropColumn('deleted_at');
      tbl.dropColumn('created_at');
    })
    .alterTable('phone_numbers', (tbl) => {
      tbl.string('number', 10).notNullable().unique();
      tbl.datetime('deleted_at');
      tbl.datetime('created_at').defaultTo(knex.fn.now());
    })
    .alterTable('email_addresses', (tbl) => {
      tbl.dropColumn('deleted_at');
      tbl.dropColumn('created_at');
    })
    .alterTable('email_addresses', (tbl) => {
      tbl.datetime('deleted_at');
      tbl.datetime('created_at').defaultTo(knex.fn.now());
    })
    .alterTable('education_histories', (tbl) => {
      tbl.dropColumn('start_date');
      tbl.dropColumn('end_date');
    })
    .alterTable('education_histories', (tbl) => {
      tbl.date('start_date');
      tbl.date('end_date');
    })

    .createTable('finances', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.boolean('history_of_evictions');
      tbl.boolean('history_of_landlord_debt');
      tbl.boolean('history_of_criminal_activity');
      tbl.boolean('history_of_poor_credit');
      tbl.boolean('rental_history');
      tbl.decimal('amount_of_student_debt');
      tbl.decimal('amount_of_medical_debt');
      tbl.decimal('amount_of_credit_card_debt');
      tbl.decimal('amount_of_auto_debt');
      tbl.boolean('no_credit');
    })
    .createTable('insurance', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.string('medicare_number', 25);
      tbl.datetime('medicare_effective_date');
      tbl.string('medicaid_number', 25);
      tbl.datetime('medicaid_effective_date');
      tbl.string('private_insurance_company');
      tbl.integer('private_insurance_group_number');
      tbl.string('private_insurance_subscriber_number');
      tbl.datetime('private_insurance_effective_date');
      tbl.datetime('private_insurance_expiration_date');
      tbl.string('employer_name');
      tbl.string('employee_occupation');
      tbl.string('other_coverage');
      tbl.string('other_agencies');
    })
    .createTable('documents', (tbl) => {
      tbl.integer('client_id').notNullable();
      tbl.jsonb('completed_hfca');
      tbl.jsonb('valid_driver');
      tbl.jsonb('valid_social');
      tbl.jsonb('dshs_wic_tanf_snap');
      tbl.jsonb('responsible_renters_course');
      tbl.jsonb('birth_cert_for_children');
      tbl.jsonb('child_enrolled_school');
      tbl.jsonb('childcare');
    })
    .createTable('contact_preferences', (tbl) => {
      tbl.integer('client_id').notNullable();
      tbl.boolean('food_assistance');
      tbl.boolean('clothing_assistance');
      tbl.boolean('counseling_services');
      tbl.boolean('addiction_resources');
      tbl.boolean('mentor_programs');
      tbl.boolean('youth_services');
      tbl.boolean('budgeting');
      tbl.boolean('can_text_employment_opportunities');
      tbl.boolean('can_text_apartment_listings');
      tbl.boolean('can_text_career_fairs');
    })
    .createTable('referrals', (tbl) => {
      tbl.increments('referral_id').notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.string('name');
      tbl.string('street_address');
      tbl.integer('apt');
      tbl.string('city');
      tbl.string('state');
      tbl.integer('zip');
      tbl.string('cell');
      tbl.string('home');
      tbl.string('work');
      tbl.string('email');
      tbl.date('first_meeting_date');
    })
    .createTable('goals', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.string('goal_statement');
      tbl.string('goal_steps');
      tbl.date('goal_target_date');
      tbl.string('cm_task');
      tbl.datetime('date_archived').defaultTo(knex.fn.now());
      tbl.string('notes');
      tbl.string('client_strength');
      tbl.string('client_obstacle');
      tbl.string('progress_summary');
    })
    .createTable('most_recent_employment', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.string('company_name');
      tbl.boolean('currently_employed');
      tbl.string('skill_set');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('most_recent_employment')
    .dropTableIfExists('goals')
    .dropTableIfExists('referrals')
    .dropTableIfExists('contact_preferences')
    .dropTableIfExists('documents')
    .dropTableIfExists('insurance')
    .dropTableIfExists('finances')
    .dropTableIfExists('education_histories')
    .dropTableIfExists('email_addresses')
    .dropTableIfExists('phone_numbers')
    .dropTableIfExists('ethnicities')
    .dropTableIfExists('races')
    .dropTableIfExists('genders')
    .dropTableIfExists('clients')
    .dropTableIfExists('households')
    .dropTableIfExists('locations');
};
