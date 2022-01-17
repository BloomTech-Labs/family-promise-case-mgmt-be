
exports.up = function(knex) {
    return knex.schema
    .createTable('email_adresses', tbl => {
        tbl.increments()
        .integer('client_id').references('id').inTable('clients')
        tbl.string('email')
        tbl.string('email_type')
        tbl.boolean('allow_sms')
        tbl.timestamp('created_at', {useTz: true})
        tbl.timestamp('deleted_at', {useTz: true})

})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('email_addresses')
};
