exports.up = (knex) => {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').notNullable().unique().primary();
    table.string('email').notNullable();
    table.string('name').notNullable();
    table.string('role').notNullable();
    table.timestamps('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users');
};
