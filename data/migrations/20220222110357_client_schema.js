// I didn't make primary key and foregin key, becasue once we made these key we can't change the schema easily (if you want to know more about foregin key => https://github.com/github/gh-ost/issues/331#issuecomment-266027731)

exports.up = function (knex) {
  return knex.schema
    .createTable('locations', (tbl) => {
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
      tbl.string('deleted_at').defaultTo(knex.fn.now());
      tbl.string('created_at').defaultTo(knex.fn.now());
    })
    .createTable('households', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.string('name').notNullable();
      tbl.string('created_at').defaultTo(knex.fn.now());
    })

    .createTable('clients', (tbl) => {
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
      tbl.integer('finances_id');
      tbl.integer('insurance_id');
      tbl.integer('documents_id');
      tbl.integer('goals_id');
      tbl.string('created_at').defaultTo(knex.fn.now());
    })

    .createTable('genders', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.string('name').notNullable().unique();
    })

    .createTable('races', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.string('name').notNullable().unique();
    })

    .createTable('ethnicities', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.string('name').notNullable().unique();
    })
    .createTable('phone_numbers', (tbl) => {
      tbl.increments().notNullable().unique();
      //   tbl.integer('client_id').notNuwllable().unique();
      tbl.string('number', 10).notNullable().unique();
      tbl.string('phone_type');
      tbl.string('deleted_at').defaultTo(knex.fn.now());
      tbl.string('created_at').defaultTo(knex.fn.now());
    })
    .createTable('email_addresses', (tbl) => {
      tbl.increments().notNullable().unique();
      //   tbl.integer('client_id').notNuwllable().unique();
      tbl.string('email').notNullable().unique();
      tbl.string('email_type');
      tbl.boolean('allow_sms');
      tbl.string('deleted_at').defaultTo(knex.fn.now());
      tbl.string('created_at').defaultTo(knex.fn.now());
    })
    .createTable('education_histories', (tbl) => {
      tbl.increments().notNullable().unique();
      //   tbl.integer('client_id').notNuwllable().unique();
      tbl.string('school_name');
      tbl.string('level');
      tbl.string('start_date');
      tbl.string('end_date');
    })
    .createTable('finances', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.string('type_of_debt');
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
      tbl.string('medicare_number', 25);
      tbl.datetime('medicare_effective_date').defaultTo(knex.fn.now());
      tbl.string('medicaid_number', 25);
      tbl.datetime('medicaid_effective_date').defaultTo(knex.fn.now());
      tbl.string('private_insurance_company');
      tbl.integer('private_insurance_group_number');
      tbl.string('private_insurance_subscriber_number');
      tbl.datetime('private_insurance_effective_date').defaultTo(knex.fn.now());
      tbl
        .datetime('private_insurance_expiration_date ')
        .defaultTo(knex.fn.now());
      //tbl.string('employer_occupation')
      tbl.string('other_coverage');
      tbl.string('other_agencies');
    })
    .createTable('documents', (tbl) => {
      tbl.increments().notNullable().unique();
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
      tbl.string('referrals_name', 30).notNullable().unique();
      tbl.string('referrals_address');
      tbl.string('referrals_cell');
      tbl.string('referrals_home');
      tbl.string('referrals_work');
      tbl.string('referrals_email', 35).notNullable().unique();
      //   tbl.datetime('first_meeting_date').defaultTo(knex.fn.now());
    })
    .createTable('goals', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.string('goal_statement');
      tbl.string('goal_steps');
      tbl.date('goal_target_date');
      tbl.string('cm_task');
      tbl.timestamp('date_archived').defaultTo(knex.fn.now());
      tbl.string('notes');
      tbl.string('client_strength');
      tbl.string('client_obstacle');
      tbl.string('progress_summary');
    });
};

exports.down = function (knex) {
  return knex.schema
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
