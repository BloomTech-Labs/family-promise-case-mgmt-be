exports.seed = function (knex) {
  return knex('profiles')
    .del()
    .then(function () {
      return knex('profiles').insert([
        {
          id: '1',
          email: 'NedStark@email.com',
          name: 'Eddard',
          avatarUrl: 'https://avatarfiles.alphacoders.com/117/117583.jpg',
        },
        {
          id: '2',
          email: 'CatStark@email.com',
          name: 'Catelyn',
          avatarUrl: 'https://avatarfiles.alphacoders.com/124/124622.jpg',
        },
        {
          id: '3',
          email: 'RobbStark@email.com',
          name: 'Robb',
          avatarUrl: 'https://avatarfiles.alphacoders.com/117/117533.jpg',
        },
        {
          id: '4',
          email: 'QueenOfTheNorth@email.com',
          name: 'Sansa',
          avatarUrl: 'https://avatarfiles.alphacoders.com/189/189640.jpg',
        },
        {
          id: '5',
          email: 'AryaStark@email.com',
          name: 'Arya',
          avatarUrl: 'https://avatarfiles.alphacoders.com/166/166255.jpg',
        },
        {
          id: '6',
          email: 'OneEyedRaven@email.com',
          name: 'Bran',
          avatarUrl: 'https://avatarfiles.alphacoders.com/189/189650.jpg',
        },
        {
          id: '7',
          email: 'RickonStark@email.com',
          name: 'Rickon',
          avatarUrl: 'https://avatarfiles.alphacoders.com/124/124622.jpg',
        },
        {
          id: '8',
          email: 'NightsWatchman@email.com',
          name: 'Jon',
          avatarUrl: 'https://avatarfiles.alphacoders.com/225/225325.jpg',
        },
      ]);
    });
};
