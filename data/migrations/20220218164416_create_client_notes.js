exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('client_notes', function (table) {
      table
        .uuid('id')
        .notNullable()
        .unique()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'));
      table.integer('client_id');
      table.string('source_view');
      table.text('message').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('deleted_at').defaultTo(null);
      table.string('created_by');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('client_notes');
};
