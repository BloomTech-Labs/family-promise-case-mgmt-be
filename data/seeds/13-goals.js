exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('goals')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('goals').insert([
        {
          client_id: 1,
          goal_statement:
            'Imperdiet nascetur. Sociosqu at condimentum primis taciti facilisis mollis orci pede parturient placerat pellentesque sociosqu phasellus suspendisse dignissim porta vulputate a libero mi eros, sit sagittis, turpis ultrices tincidunt senectus.',
          goal_steps:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
          goal_target_date: '2022-02-25',
          cm_task:
            'Imperdiet nascetur. Sociosqu at condimentum primis taciti facilisis mollis orci pede parturient placerat pellentesque sociosqu phasellus suspendisse dignissim porta vulputate a libero mi eros, sit sagittis, turpis ultrices tincidunt senectus.',
          date_archived: '2022-02-25T02:54:26Z',
          notes:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
          client_strength:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
          client_obstacle:
            'Imperdiet nascetur. Sociosqu at condimentum primis taciti facilisis mollis orci pede parturient placerat pellentesque sociosqu phasellus suspendisse dignissim porta vulputate a libero mi eros, sit sagittis, turpis ultrices tincidunt senectus.',
          progress_summary:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
        },
        {
          client_id: 2,
          goal_statement:
            'Imperdiet nascetur. Sociosqu at condimentum primis taciti facilisis mollis orci pede parturient placerat pellentesque sociosqu phasellus suspendisse dignissim porta vulputate a libero mi eros, sit sagittis, turpis ultrices tincidunt senectus.',
          goal_steps:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
          goal_target_date: '2022-03-25',
          cm_task:
            'Imperdiet nascetur. Sociosqu at condimentum primis taciti facilisis mollis orci pede parturient placerat pellentesque sociosqu phasellus suspendisse dignissim porta vulputate a libero mi eros, sit sagittis, turpis ultrices tincidunt senectus.',
          date_archived: '2022-03-25T02:54:26Z',
          notes:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
          client_strength:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
          client_obstacle:
            'Imperdiet nascetur. Sociosqu at condimentum primis taciti facilisis mollis orci pede parturient placerat pellentesque sociosqu phasellus suspendisse dignissim porta vulputate a libero mi eros, sit sagittis, turpis ultrices tincidunt senectus.',
          progress_summary:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
        },
        {
          client_id: 3,
          goal_statement:
            'Imperdiet nascetur. Sociosqu at condimentum primis taciti facilisis mollis orci pede parturient placerat pellentesque sociosqu phasellus suspendisse dignissim porta vulputate a libero mi eros, sit sagittis, turpis ultrices tincidunt senectus.',
          goal_steps:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
          goal_target_date: '2022-06-25',
          cm_task:
            'Imperdiet nascetur. Sociosqu at condimentum primis taciti facilisis mollis orci pede parturient placerat pellentesque sociosqu phasellus suspendisse dignissim porta vulputate a libero mi eros, sit sagittis, turpis ultrices tincidunt senectus.',
          date_archived: '2022-06-25T02:54:26Z',
          notes:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
          client_strength:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
          client_obstacle:
            'Imperdiet nascetur. Sociosqu at condimentum primis taciti facilisis mollis orci pede parturient placerat pellentesque sociosqu phasellus suspendisse dignissim porta vulputate a libero mi eros, sit sagittis, turpis ultrices tincidunt senectus.',
          progress_summary:
            'Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst.',
        },
      ]);
    });
};
