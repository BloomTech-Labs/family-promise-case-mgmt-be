exports.up = function (knex) {
  return knex.schema.alterTable('clients', (tbl) => {
    tbl.integer('disabilities');
  });
}.createTable('disabilities', (tbl) => {
  tbl.increments().nonNullable().unique();
  tbl.integer('client_id').notNullable();
  tbl.string('disability');
});

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('disabilities')
    .dropTableIfExists('clients');
};
