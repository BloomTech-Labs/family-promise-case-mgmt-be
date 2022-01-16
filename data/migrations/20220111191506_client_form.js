
exports.up = function(knex) {
    return knex.schema
    .createTable('clients', function(tbl) {
        tbl.increments().references('client_id').inTable('education_histories').onDelete('RESTRICT')
        tbl.int('household_id').notNullable().references('id').inTable('households').onDelete('RESTRICT')
        tbl.string('first_name',).notNullable()
        tbl.string('last_name').notNullable()
        tbl.int('ssn', 9).notNullable()
        tbl.boolean('is_hoh').notNullable()
        tbl.string('relation').notNullable()
       tbl.int('gender_id').references('id').inTable('genders').onDelete('RESTRICT')
        tbl.int('race_id').references('id').inTable('races').onDelete('RESTRICT')
        tbl.int('ethnicity_id').references('id').inTable('ethnicities').onDelete('RESTRICT')
        // says date time in the design but timestamp might work better for a created_at/deleted_at?
        tbl.timestamp('created_at', {useTz: true})
    })  

};

exports.down = function(knex) {
    return knex.schema
            .dropTableIfExists('family_form')
  
};
