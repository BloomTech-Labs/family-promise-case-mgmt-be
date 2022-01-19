
exports.up = function(knex) {
  return knex.schema
    .createTable('users', (t) => {
        t.increments('ID').notNullable().unique().primary();
        t.string('name').notNullable().unique();
        t.string('email').notNullable().unique();
        t.string('role').notNullable();
        t.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users');
};
