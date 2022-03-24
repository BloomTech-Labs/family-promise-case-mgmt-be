exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ethnicities')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ethnicities').insert([
        { name: 'American Indian or Alaska Native' },
        { name: 'Asian' },
        { name: 'Black or African American' },
        { name: 'Native Hawaiian or Other Pacific Islander' },
        { name: 'White or Caucasian' },
        { name: 'Hispanic or Latino or Spanish Origin' },
        { name: 'Non-Resident Alien (of any race or ethnicity)' },
        { name: 'Multiracial or Biracial' },
      ]);
    });
};
