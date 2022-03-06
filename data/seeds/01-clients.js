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
          education_level: 'college School',
          gender_id: 1,
          ethnicity_id: 1,
        }, // eslint-disable-line
        {
          household_id: 2,
          first_name: 'Homer',
          last_name: 'Simpson',
          ssn: '000272930',
          is_hoh: true,
          relation: 'Father',
          education_level: 'GED',
          gender_id: 1,
          ethnicity_id: 1,
        }, // eslint-disable-line
        {
          household_id: 3,
          first_name: 'Stan',
          last_name: 'Smith',
          ssn: '000273031',
          is_hoh: true,
          relation: 'Father',
          education_level: 'GED',
          gender_id: 1,
          ethnicity_id: 1,
        }, // eslint-disable-line
        {
          household_id: 4,
          first_name: 'Peter',
          last_name: 'Griffin',
          ssn: '000273132',
          is_hoh: true,
          relation: 'Father',
          education_level: 'High School',
          gender_id: 1,
          ethnicity_id: 1,
        }, // eslint-disable-line
        {
          household_id: 5,
          first_name: 'Bob',
          last_name: 'Belcher',
          ssn: '000273234',
          is_hoh: true,
          relation: 'Father',
          education_level: 'High School',
          gender_id: 1,
          ethnicity_id: 1,
        }, // eslint-disable-line
      ]);
    });
};
