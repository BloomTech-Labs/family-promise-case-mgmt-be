exports.seed = function (knex) {
  return knex('client_notes')
    .del()
    .then(function () {
      return knex('client_notes').insert([
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Imperdiet nascetur. Sociosqu at condimentum primis taciti facilisis mollis orci pede parturient placerat pellentesque sociosqu phasellus suspendisse dignissim porta vulputate a libero mi eros, sit sagittis, turpis ultrices tincidunt senectus. Adipiscing conubia arcu ornare tempor primis, per iaculis odio sociis magna tortor sodales praesent dictumst. Dignissim et placerat duis venenatis fusce vivamus condimentum hendrerit justo egestas vitae curabitur parturient luctus duis varius et quis eget pretium habitasse magna consectetuer vel euismod feugiat lobortis gravida vivamus mattis sollicitudin. Mattis etiam sapien volutpat rutrum elit magna. Consectetuer Quam pretium arcu lacinia varius risus elit porttitor libero proin justo. Sociosqu aenean ultricies per.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Urna varius dolor pretium aenean nonummy semper Convallis pede. Pharetra imperdiet, consequat vulputate consequat duis faucibus ornare habitant torquent scelerisque sollicitudin praesent. Lorem proin eros magna est primis pulvinar volutpat suspendisse mollis malesuada platea metus netus litora sodales Libero venenatis.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Nullam, suspendisse. Vehicula aenean risus suscipit cras risus habitant aliquet.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Rhoncus imperdiet. Inceptos nascetur feugiat interdum elementum mollis diam massa vehicula dictum ac quis inceptos lobortis, tempor integer turpis fermentum vitae blandit rutrum per molestie venenatis eleifend elit vitae aptent.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Dolor lacus feugiat morbi tortor vulputate pretium nisl in luctus integer sem mi sociis vulputate vehicula varius. Platea nam volutpat.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Dolor lacus feugiat morbi tortor vulputate pretium nisl in luctus integer sem mi sociis vulputate vehicula varius. Platea nam volutpat.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Nibh hac. Taciti blandit dapibus ullamcorper. Maecenas sit netus diam.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Proin sollicitudin varius ultrices hac sem Pharetra nibh leo dapibus ligula placerat egestas consequat mi. Curae; curae; suscipit convallis tellus dictum aliquam diam orci ad. Nam risus eu quis massa, a praesent gravida nam iaculis hendrerit malesuada bibendum id phasellus.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Nibh hac. Taciti blandit dapibus ullamcorper. Maecenas sit netus diam.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Proin sollicitudin varius ultrices hac sem Pharetra nibh leo dapibus ligula placerat egestas consequat mi. Curae; curae; suscipit convallis tellus dictum aliquam diam orci ad. Nam risus eu quis massa, a praesent gravida nam iaculis hendrerit malesuada bibendum id phasellus.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Nibh hac. Taciti blandit dapibus ullamcorper. Maecenas sit netus diam.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Proin sollicitudin varius ultrices hac sem Pharetra nibh leo dapibus ligula placerat egestas consequat mi. Curae; curae; suscipit convallis tellus dictum aliquam diam orci ad. Nam risus eu quis massa, a praesent gravida nam iaculis hendrerit malesuada bibendum id phasellus.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Dolor lacus feugiat morbi tortor vulputate pretium nisl in luctus integer sem mi sociis vulputate vehicula varius. Platea nam volutpat.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Nibh hac. Taciti blandit dapibus ullamcorper. Maecenas sit netus diam.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Dolor lacus feugiat morbi tortor vulputate pretium nisl in luctus integer sem mi sociis vulputate vehicula varius. Platea nam volutpat.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Proin sollicitudin varius ultrices hac sem Pharetra nibh leo dapibus ligula placerat egestas consequat mi. Curae; curae; suscipit convallis tellus dictum aliquam diam orci ad. Nam risus eu quis massa, a praesent gravida nam iaculis hendrerit malesuada bibendum id phasellus.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '1',
        },
        {
          client_id: 1,
          source_view: 'caseview',
          message:
            'Nibh hac. Taciti blandit dapibus ullamcorper. Maecenas sit netus diam.',
          created_by: '2',
        },
        {
          client_id: 1,
          source_view: 'dashboard',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '2',
        },
        {
          client_id: 1,
          source_view: 'dashboard',
          message:
            'Dolor lacus feugiat morbi tortor vulputate pretium nisl in luctus integer sem mi sociis vulputate vehicula varius. Platea nam volutpat.',
          created_by: '2',
        },
        {
          client_id: 1,
          source_view: 'dashboard',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '2',
        },
        {
          client_id: 1,
          source_view: 'dashboard',
          message:
            'Nisi parturient tortor Congue Dictum. Adipiscing sit in risus. Etiam.',
          created_by: '2',
        },
        {
          client_id: 2,
          source_view: 'caseview',
          message:
            'Nibh hac. Taciti blandit dapibus ullamcorper. Maecenas sit netus diam.',
          created_by: '3',
        },
        { client_id: 2, source_view: 'caseview', message: '', created_by: '3' },
        {
          client_id: 2,
          source_view: 'caseview',
          message:
            'Nibh hac. Taciti blandit dapibus ullamcorper. Maecenas sit netus diam.',
          created_by: '3',
        },
        {
          client_id: 2,
          source_view: 'caseview',
          message:
            'Dolor lacus feugiat morbi tortor vulputate pretium nisl in luctus integer sem mi sociis vulputate vehicula varius. Platea nam volutpat.',
          created_by: '3',
        },
        {
          client_id: 2,
          source_view: 'caseview',
          message:
            'Proin sollicitudin varius ultrices hac sem Pharetra nibh leo dapibus ligula placerat egestas consequat mi. Curae; curae; suscipit convallis tellus dictum aliquam diam orci ad. Nam risus eu quis massa, a praesent gravida nam iaculis hendrerit malesuada bibendum id phasellus.',
          created_by: '3',
        },
        { client_id: 2, source_view: 'caseview', message: '', created_by: '3' },
        {
          client_id: 2,
          source_view: 'caseview',
          message:
            'Proin sollicitudin varius ultrices hac sem Pharetra nibh leo dapibus ligula placerat egestas consequat mi. Curae; curae; suscipit convallis tellus dictum aliquam diam orci ad. Nam risus eu quis massa, a praesent gravida nam iaculis hendrerit malesuada bibendum id phasellus.',
          created_by: '3',
        },
        {
          client_id: 2,
          source_view: 'caseview',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '3',
        },
        {
          client_id: 2,
          source_view: 'caseview',
          message:
            'Dolor lacus feugiat morbi tortor vulputate pretium nisl in luctus integer sem mi sociis vulputate vehicula varius. Platea nam volutpat.',
          created_by: '4',
        },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Nibh hac. Taciti blandit dapibus ullamcorper. Maecenas sit netus diam.',
          created_by: '5',
        },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Nisi parturient tortor Congue Dictum. Adipiscing sit in risus. Etiam.',
          created_by: '5',
        },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '5',
        },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Nibh hac. Taciti blandit dapibus ullamcorper. Maecenas sit netus diam.',
          created_by: '5',
        },
        { client_id: 3, source_view: 'caseview', message: '', created_by: '5' },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Dolor lacus feugiat morbi tortor vulputate pretium nisl in luctus integer sem mi sociis vulputate vehicula varius. Platea nam volutpat.',
          created_by: '5',
        },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '6',
        },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Proin sollicitudin varius ultrices hac sem Pharetra nibh leo dapibus ligula placerat egestas consequat mi. Curae; curae; suscipit convallis tellus dictum aliquam diam orci ad. Nam risus eu quis massa, a praesent gravida nam iaculis hendrerit malesuada bibendum id phasellus.',
          created_by: '6',
        },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Nisi parturient tortor Congue Dictum. Adipiscing sit in risus. Etiam.',
          created_by: '6',
        },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Proin sollicitudin varius ultrices hac sem Pharetra nibh leo dapibus ligula placerat egestas consequat mi. Curae; curae; suscipit convallis tellus dictum aliquam diam orci ad. Nam risus eu quis massa, a praesent gravida nam iaculis hendrerit malesuada bibendum id phasellus.',
          created_by: '6',
        },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Dolor lacus feugiat morbi tortor vulputate pretium nisl in luctus integer sem mi sociis vulputate vehicula varius. Platea nam volutpat.',
          created_by: '6',
        },
        {
          client_id: 3,
          source_view: 'caseview',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '6',
        },
        {
          client_id: 4,
          source_view: 'caseview',
          message:
            'Vehicula hac curae;. Pretium congue, et natoque ante lorem vivamus turpis magna commodo nisi. Sed sem mauris habitant sagittis nulla justo felis magna adipiscing pellentesque pede litora cum habitasse rhoncus.',
          created_by: '8',
        },
        {
          client_id: 4,
          source_view: 'caseview',
          message:
            'Nibh hac. Taciti blandit dapibus ullamcorper. Maecenas sit netus diam.',
          created_by: '8',
        },
        {
          client_id: 4,
          source_view: 'caseview',
          message:
            'Proin sollicitudin varius ultrices hac sem Pharetra nibh leo dapibus ligula placerat egestas consequat mi. Curae; curae; suscipit convallis tellus dictum aliquam diam orci ad. Nam risus eu quis massa, a praesent gravida nam iaculis hendrerit malesuada bibendum id phasellus.',
          created_by: '8',
        },
        {
          client_id: 5,
          source_view: 'caseview',
          message:
            'Proin sollicitudin varius ultrices hac sem Pharetra nibh leo dapibus ligula placerat egestas consequat mi. Curae; curae; suscipit convallis tellus dictum aliquam diam orci ad. Nam risus eu quis massa, a praesent gravida nam iaculis hendrerit malesuada bibendum id phasellus.',
          created_by: '8',
        },
      ]);
    });
};
