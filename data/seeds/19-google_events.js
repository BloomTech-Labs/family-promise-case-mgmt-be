exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('google_events')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('google_events').insert([
        {
          id: '1',
          calendarId: '1',
          title: 'Test Event',
          description: 'This is a test event',
          location: 'Test Location',
          start: '2020-03-27T00:00:00.000Z',
          end: '2020-03-27T01:00:00.000Z',
          attendees: '',
          createdAt: '2023-03-26T00:00:00.000Z',
          updatedAt: '2023-03-26T00:00:00.000Z',
        },
        {
          id: '2',
          calendarId: '1',
          title: 'Test Event 2',
          description: 'This is a test event 2',
          location: 'Test Location 2',
          start: '2023-03-29T00:00:00.000Z',
          end: '2023-03-29T01:00:00.000Z',
          attendees: '',
          createdAt: '2020-03-26T00:00:00.000Z',
          updatedAt: '2020-03-26T00:00:00.000Z',
        },
        {
          id: '3',
          calendarId: '1',
          title: 'Test Event 3',
          description: 'This is a test event 3',
          location: 'Test Location 3',
          start: '2023-03-31T00:00:00.000Z',
          end: '2023-03-31T01:00:00.000Z',
          attendees: '',
          createdAt: '2020-03-26T00:00:00.000Z',
          updatedAt: '2020-03-26T00:00:00.000Z',
        },
        {
          id: '4',
          calendarId: '1',
          title: 'Test Event 4',
          description: 'This is a test event 4',
          location: 'Test Location 4',
          start: '2023-04-02T00:00:00.000Z',
          end: '2023-04-02T01:00:00.000Z',
          attendees: '',
          createdAt: '2020-03-26T00:00:00.000Z',
          updatedAt: '2020-03-26T00:00:00.000Z',
        },
      ]);
    });
};
