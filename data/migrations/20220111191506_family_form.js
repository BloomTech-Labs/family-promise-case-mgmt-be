
exports.up = function(knex) {
    return knex
    .createTable('family_form', function(tbl) {
        tbl.increments()
        tbl.string('Head of Household', 128).notNullable()
        tbl.string('Family members', 128).notNullable()
        tbl.integer('Family size').notNullable()
        tbl.string('Education level', 128).notNullable()
        tbl.integer('Social security number', 9).notNullable()
        tbl.string('Prior history of homlessness', 300)
        tbl.boolean('Employment')

    })

};

exports.down = function(knex) {
  
};
