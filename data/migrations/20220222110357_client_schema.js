// I didn't make primary key and foregin key, becasue once we made these key we can't change the schema easily (if you want to know more about foregin key => https://github.com/github/gh-ost/issues/331#issuecomment-266027731)

exports.up = function (knex) {
  return knex.schema
    .createTable('clients', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('household_id').notNullable();
      tbl.string('first_name').notNullable();
      tbl.string('last_name').notNullable();
      tbl.string('ssn').notNullable();
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

    .createTable('gender', (tbl) => {
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
      tbl.string('number').notNullable().unique();
      tbl.string('phone_type');
      tbl.string('deleted_at').defaultTo(knex.fn.now());
      tbl.string('created_at').defaultTo(knex.fn.now());
    })
    .createTable('email_addresses', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.string('email').notNullable().unique();
      tbl.string('email_type');
      tbl.boolean('allow_sms');
      tbl.string('deleted_at').defaultTo(knex.fn.now());
      tbl.string('created_at').defaultTo(knex.fn.now());
    })
    .createTable('education_histories', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.string('school_name');
      tbl.string('level');
      tbl.string('start_date');
      tbl.string('end_date');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('clients')
    .dropTableIfExists('locations')
    .dropTableIfExists('households')
    .dropTableIfExists('gender');
};
