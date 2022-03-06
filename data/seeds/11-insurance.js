exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('insurance')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('insurance').insert([
        {
          client_id: 1,
          medicare_number: '1EG4-TE5-MH72',
          medicare_effective_date: '2022-02-25T02:54:26Z',
          medicaid_number: '11122333344',
          medicaid_effective_date: '2022-03-25T02:54:26Z',
          private_insurance_company: 'UnitedHealthCare',
          private_insurance_subscriber_number: '345222222',
          private_insurance_effective_date: '2022-02-25T02:54:26Z',
          private_insurance_expiration_date: '2025-02-25T02:54:26Z',
          employer_name: 'John School',
          employee_occupation: 'Doctor',
          other_coverage: '',
          other_agencies: '',
        },
        {
          client_id: 2,
          medicare_number: '1AAG4-TE5-MH72',
          medicare_effective_date: '2022-02-25T02:54:26Z',
          medicaid_number: '11122333344',
          medicaid_effective_date: '2022-03-25T02:54:26Z',
          private_insurance_company: 'UnitedHealthCare',
          private_insurance_subscriber_number: '345222222',
          private_insurance_effective_date: '2022-02-25T02:54:26Z',
          private_insurance_expiration_date: '2025-02-25T02:54:26Z',
          employer_name: 'McDonalds',
          employee_occupation: 'Doctor', //I need to ask to Derek.
          other_coverage: '',
          other_agencies: '',
        },
        {
          client_id: 3,
          medicare_number: '1EG4-TE5-MH72',
          medicare_effective_date: '2022-02-25T02:54:26Z',
          medicaid_number: '11122333344',
          medicaid_effective_date: '2022-03-25T02:54:26Z',
          private_insurance_company: 'UnitedHealthCare',
          private_insurance_subscriber_number: '345222222',
          private_insurance_effective_date: '2022-02-25T02:54:26Z',
          private_insurance_expiration_date: '2025-02-25T02:54:26Z',
          employer_name: 'American Express',
          employee_occupation: 'Doctor',
          other_coverage: '',
          other_agencies: '',
        },
      ]);
    });
};
