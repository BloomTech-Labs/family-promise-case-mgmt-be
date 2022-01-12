
exports.up = function(knex) {
    return knex
    .createTable('family_form', function(tbl) {
        tbl.increments()
        tbl.string('head_of_household', 128).notNullable()
        tbl.string('family_members', 128).notNullable()
        tbl.integer('family_size').notNullable()
        tbl.string('education_level', 128).notNullable()
        tbl.integer('social_security_number', 9).notNullable()
        tbl.string('homeless_history', 300)
        tbl.boolean('employment')

    })

};

exports.down = function(knex) {
  
};
