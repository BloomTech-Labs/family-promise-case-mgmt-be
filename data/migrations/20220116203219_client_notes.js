
exports.up = function(knex) {
    return knex.schema
    .createTable('client_notes', tbl => {
        tbl.increments()
        tbl.integer('client_id')
        .references('id').inTable('clients')
        tbl.string('source_view')
        tbl.string('message')
        tbl.string('created_by')
        tbl.timestamp('created_at', {useTz: true})
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('client_notes')
};
