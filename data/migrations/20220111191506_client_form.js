
exports.up = function(knex) {
    return knex.schema
    .createTable('clients', function(tbl) {
        
        tbl.increments().references('client_id').inTable( 'client_notes').onDelete('RESTRICT').primary()
        tbl.foreign('clients_id')
        tbl.integer('household_id').notNullable().references('id').inTable('households').onDelete('RESTRICT')
        tbl.string('first_name',).notNullable()
        tbl.string('last_name').notNullable()
        tbl.varchar('ssn', 9).notNullable()
        tbl.boolean('is_hoh').notNullable()
        tbl.string('relation').notNullable()
        tbl.uuid('gender_id').references('id').inTable('genders').onDelete('RESTRICT')
        tbl.uuid('race_id').references('id').inTable('races').onDelete('RESTRICT')
        tbl.uuid('ethnicity_id').references('id').inTable('ethnicities').onDelete('RESTRICT')
        tbl.timestamp('created_at', {useTz: true})
    })
    
    .createTable('genders', tbl => {
        tbl.increments().references('gender_id').inTable('clients')
        tbl.foreign('gender_id')
        tbl.string('name')
    })

    .createTable('races', tbl => {
        tbl.increments().references('race_id').inTable('clients')
        tbl.string('name')
    })

    .createTable('ethnicities', tbl => {
        tbl.increments().references('ethnicity_id').inTable('clients')
        tbl.string('name')
    })

    


};

exports.down = function(knex) {
    return knex.schema
            .dropTableIfExists('ethnicities')
            .dropTableIfExists('races')
            .dropTableIfExists('genders')
            .dropTableIfExists('clients')
}