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
  return db('clients').where({ id }).first();
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
