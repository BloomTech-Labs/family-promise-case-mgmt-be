exports.up = function (knex) {
  return knex.schema
  .createTable('locations', (t) => {
    t.increments('ID').notNullable().unique().primary();
    t.integer('household_id').notNullable();
    t.string('type');
    t.string('name');
    t.string('latlong');
    t.string('address1');
    t.string('address2');
    t.string('city');
    t.string('state');
    t.string('zip');
    t.timestamp('deleted_at');
    t.timestamp('created_at');
  })
  .createTable('households', (t) => {
    t.increments('ID').notNullable().unique().primary();
    t.string('name').notNullable();
    t.timestamp('created_at');
  })
  .createTable('clients', (t) => {
    t.increments('ID').notNullable().unique().primary();
    t.integer('household_id').notNullable();
    t.string('first_name').notNullable();
    t.string('last_name').notNullable();
    t.string('ssn').notNullable();
    t.boolean('is_hoh');
    t.string('relation');
    t.string('education_level');
    t.integer('gender_id');
    t.integer('ethnicity_id');
    t.timestamp('created_at');
  })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('clients')
    .dropTableIfExists('households')
    .dropTableIfExists('locations')
};
