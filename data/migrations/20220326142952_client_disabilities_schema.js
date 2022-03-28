//this is for adding disability info into clients table and made disability table.
exports.up = function (knex) {
  return knex.schema
    .alterTable('clients', (tbl) => {
      tbl.integer('disabilities_id');
    })
    .createTable('disabilities', (tbl) => {
      tbl.increments().notNullable().unique();
      tbl.integer('client_id').notNullable();
      tbl.string('disability');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('disabilities')
    .dropTableIfExists('clients');
};
