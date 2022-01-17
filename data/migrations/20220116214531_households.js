
exports.up = function(knex) {
    return knex.schema
    .createTable('households', tbl => {
        tbl.increments().references('household_id').inTable('clients')
       .string('name')
       .timestamp('created_at', {useTz: true})

})
};

exports.down = function(knex) {
  
};
