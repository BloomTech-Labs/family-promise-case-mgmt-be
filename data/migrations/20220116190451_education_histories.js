
exports.up = function(knex) {

  return knex.schema
.createTable('education_histories', tbl => {
    tbl.increments()
    tbl.integer('client_id').references('id').inTable('clients')
    tbl.string('school_name')
    tbl.string('level')
    tbl.timestamp('start_date', {useTz: true})
    tbl.timestamp('end_date', {useTz: true})



})

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('education_histories')
  
};
