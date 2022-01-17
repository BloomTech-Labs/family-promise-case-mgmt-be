exports.up = function (knex) {
  return knex.schema.createTable('locations', (t) => {
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
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('locations');
};
