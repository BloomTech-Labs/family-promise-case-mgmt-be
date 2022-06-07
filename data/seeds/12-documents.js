exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('documents')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('documents').insert([
        {
          client_id: 1,
          completed_hfca: {
            name: 'fileName',
            success: true,
            url: 'url',
            documentType: 'completed_hfca',
            extension: 'pdf',
          },
          valid_driver: JSON.stringify({
            name: 'fileName',
            success: true,
            url: 'url',
            documentType: 'valid_driver',
            extension: 'pdf',
          }),
          valid_social: JSON.stringify({
            name: 'fileName',
            success: true,
            url: 'url',
            documentType: 'valid_social',
            extension: 'pdf',
          }),
          dshs_wic_tanf_snap: JSON.stringify({
            name: 'fileName',
            success: true,
            url: 'url',
            documentType: 'dshs_wic_tanf_snap',
            extension: 'pdf',
          }),
          responsible_renters_course: JSON.stringify({
            name: 'fileName',
            success: true,
            url: 'url',
            documentType: 'responsible_renters_course',
            extension: 'pdf',
          }),
          birth_cert_for_children: JSON.stringify({
            name: 'fileName',
            success: true,
            url: 'url',
            documentType: 'birth_cert_for_children',
            extension: 'pdf',
          }),
          child_enrolled_school: JSON.stringify({
            name: 'fileName',
            success: true,
            url: 'url',
            documentType: 'child_enrolled_school',
            extension: 'pdf',
          }),
          childcare: JSON.stringify({
            name: 'fileName',
            success: true,
            url: 'url',
            documentType: 'childcare',
            extension: 'pdf',
          }),
        },
        // {
        //   client_id: 2,
        //   completed_hfca: true,
        //   valid_driver: true,
        //   valid_social: false,
        //   dshs_wic_tanf_snap: false,
        //   responsible_renters_course: true,
        //   birth_cert_for_children: true,
        //   child_enrolled_school: false,
        //   childcare: false,
        //   food_assistance: true,
        //   clothing_assistance: false,
        //   counseling_services: true,
        //   addiction_resources: false,
        //   mentor_programs: true,
        //   youth_services: false,
        //   budgeting: true,
        //   can_text_employment_opportunities: false,
        //   can_text_apartment_listings: true,
        //   can_text_career_fairs: false,
        //   can_add_referrals: true,
        //   referrals_name: 'Sally Smith',
        //   referrals_address: '55555 adam street, Phoneix, AZ 54592',
        //   referrals_cell: '8094567832',
        //   referrals_home: '900345765',
        //   referrals_work: '6487940234',
        //   referrals_email: 'sallysmith@gmail.com',
        // },
        // {
        //   client_id: 3,
        //   completed_hfca: true,
        //   valid_driver: true,
        //   valid_social: false,
        //   dshs_wic_tanf_snap: false,
        //   responsible_renters_course: true,
        //   birth_cert_for_children: true,
        //   child_enrolled_school: false,
        //   childcare: false,
        //   food_assistance: true,
        //   clothing_assistance: false,
        //   counseling_services: true,
        //   addiction_resources: false,
        //   mentor_programs: true,
        //   youth_services: false,
        //   budgeting: true,
        //   can_text_employment_opportunities: false,
        //   can_text_apartment_listings: true,
        //   can_text_career_fairs: false,
        //   can_add_referrals: true,
        //   referrals_name: 'Lisa smith',
        //   referrals_address: '22223 adam street, Phoneix, AZ 54992',
        //   referrals_cell: '9094567832',
        //   referrals_home: '978345765',
        //   referrals_work: '6539040234',
        //   referrals_email: 'lisasmith@gmail.com',
        // },
      ]);
    });
};
