const db = require('../../data/db-config');

// meed help mocking this data for future reference

const add = async (newClient) => {
  const [id] = await db('clients').insert(newClient);

  return findById(id);
};

const findAll = () => {
  return db('clients');
};

const findById = async (id) => {
  const client = db('clients').where({ id }).first();

  client.gender = db('genders').where(client.gender_id, 'genders.id').first();

  return client;
};

const remove = (id) => {
  return db('clients').where({ id }).del();
};

const update = (id, changes) => {
  return db('clients').where({ id }).update(changes, '*');
};

module.exports = {
  add,
  findById,
  findAll,
  update,
  remove,
};
