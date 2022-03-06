// I didn't make primary key and foregin key, becasue once we made these key we can't change the schema easily (if you want to know more about foregin key => https://github.com/github/gh-ost/issues/331#issuecomment-266027731)

exports.up = function (knex) {
  return knex.schema
    .alterTable('locations', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('household_id').notNullable();
      tbl.string('type');
      tbl.string('name');
      tbl.string('latlong');
      tbl.string('address1');
      tbl.string('address2');
      tbl.string('city');
      tbl.string('state');
      tbl.string('zip');
      tbl.datetime('deleted_at');
      tbl.datetime('created_at').defaultTo(knex.fn.now());
    })
    .alterTable('households', (tbl) => {
      //We will verify to stakeholder next week!
      tbl.increments().notNullable().unique();
      tbl.string('name').notNullable();
      tbl.datetime('created_at').defaultTo(knex.fn.now());
    })

    .alterTable('clients', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('household_id').notNullable();
      tbl.string('first_name').notNullable();
      tbl.string('last_name').notNullable();
      tbl.string('ssn', 9).notNullable();
      tbl.boolean('is_hoh');
      tbl.string('relation');
      tbl.string('education_level');
      tbl.integer('gender_id');
      tbl.integer('race_id');
      tbl.integer('ethnicity_id');
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

    .createTable('genders', (tbl) => {
      //I have to discuss with Jake whether or not we need primary keys. If we don't, we do not have to alter the previous tables.
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.string('name').notNullable().unique();
    })

    .createTable('races', (tbl) => {
      //I have to discuss with Jake whether or not we need primary keys. If we don't, we do not have to alter the previous tables.
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.string('name').notNullable().unique();
    })

    .createTable('ethnicities', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.string('name').notNullable().unique();
    })
    .createTable('phone_numbers', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.string('number', 10).notNullable().unique();
      tbl.string('phone_type');
      tbl.datetime('deleted_at');
      tbl.datetime('created_at').defaultTo(knex.fn.now());
    })
    .createTable('email_addresses', (tbl) => {
      //I have to discuss with Jake whether or not we need primary keys. If we don't, we do not have to alter the previous tables.
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.string('email').notNullable().unique();
      tbl.string('email_type');
      tbl.boolean('allow_sms');
      tbl.datetime('deleted_at');
      tbl.datetime('created_at').defaultTo(knex.fn.now());
    })
    .alterTable('education_histories', (tbl) => {
      //I have to discuss with Jake whether or not we need primary keys. If we don't, we do not have to alter the previous tables.
      tbl.increments().notNullable().unique().primary();
      tbl.integer('client_id').notNullable();
      tbl.string('school_name');
      tbl.string('level');
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
      tbl.string('employer_occupation');
      tbl.string('other_coverage');
      tbl.string('other_agencies');
    })
    .createTable('documents', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.boolean('completed_hfca');
      tbl.boolean('valid_driver');
      tbl.boolean('valid_social');
      tbl.boolean('dshs_wic_tanf_snap');
      tbl.boolean('responsible_renters_course');
      tbl.boolean('birth_cert_for_children');
      tbl.boolean('child_enrolled_school');
      tbl.boolean('childcare');
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
      tbl.boolean('can_add_referrals');
      tbl.string('referrals_name', 30);
      tbl.string('referrals_address');
      tbl.string('referrals_cell');
      tbl.string('referrals_home');
      tbl.string('referrals_work');
      tbl.string('referrals_email', 35);
      tbl.datetime('first_meeting_date'); // can we assume that the client and manager met before? ask jake!!!
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
