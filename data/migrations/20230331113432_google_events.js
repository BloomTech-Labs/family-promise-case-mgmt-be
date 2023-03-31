exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('google_events', function (table) {
      table
        .string('id')
        .notNullable()
        .unique()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('calendarId');
      table.string('title');
      table.string('description');
      table.string('location');
      table.string('start');
      table.string('end');
      table.string('attendees');
      table.datetime('createdAt');
      table.datetime('updatedAt');
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('google_events');
};
