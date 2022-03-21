exports.up = function (knex) {
  return knex.schema
    .alterTable('households', (tbl) => {
      tbl.dropColumn('created_at');
    })
    .alterTable('households', (tbl) => {
      tbl.datetime('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('households');
};
