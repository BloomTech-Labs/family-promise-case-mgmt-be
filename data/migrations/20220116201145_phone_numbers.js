
exports.up = function(knex) {
    return knex.schema
    .createTable('phone_numbers', tbl => {
        tbl.increments()
        tbl.integer('client_id').references('id').inTable('clients')
        tbl.varChar('number', 10)
        tbl.string('phone_type')
        tbl.timestamp('deleted_at', {useTz: true})
        tbl.timestamp('created_at', {useTz: true})
})

};


exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('phone_numbers')
};
