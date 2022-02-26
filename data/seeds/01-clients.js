exports.seed = function (knex) {
  // eslint-disable-line
  return knex('clients')
    .truncate() // eslint-disable-line
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {
          household_id: 1,
          first_name: 'Joe',
          last_name: 'Goldberg',
          ssn: '000272829',
          is_hoh: true,
          relation: 'Father',
          education_level: 'High School',
          gender_id: 1,
          race_id: 1,
          ethnicity_id: 1,
          finances_id: 1,
          documents_id: 1,
          goals_id: 1,
        }, // eslint-disable-line
        {
          household_id: 2,
          first_name: 'Homer',
          last_name: 'Simpson',
          ssn: '000272930',
          is_hoh: true,
          relation: 'Father',
          education_level: 'GED',
          gender_id: 2,
          race_id: 2,
          ethnicity_id: 2,
          finances_id: 2,
          documents_id: 2,
          goals_id: 2,
        }, // eslint-disable-line
        {
          household_id: 3,
          first_name: 'Stan',
          last_name: 'Smith',
          ssn: '000273031',
          is_hoh: true,
          relation: 'Father',
          education_level: 'GED',
          gender_id: 3,
          race_id: 3,
          ethnicity_id: 3,
          finances_id: 3,
          documents_id: 3,
          goals_id: 3,
        }, // eslint-disable-line
        {
          household_id: 4,
          first_name: 'Peter',
          last_name: 'Griffin',
          ssn: '000273132',
          is_hoh: true,
          relation: 'Father',
          education_level: 'High School',
          gender_id: 4,
          race_id: 4,
          ethnicity_id: 4,
          finances_id: 4,
          documents_id: 4,
          goals_id: 4,
        }, // eslint-disable-line
        {
          household_id: 5,
          first_name: 'Bob',
          last_name: 'Belcher',
          ssn: '000273234',
          is_hoh: true,
          relation: 'Father',
          education_level: 'High School',
          gender_id: 5,
          race_id: 5,
          ethnicity_id: 5,
          finances_id: 5,
          documents_id: 5,
          goals_id: 5,
        }, // eslint-disable-line
      ]);
    });
};
