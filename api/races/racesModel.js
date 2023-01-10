const db = require('../../data/db-config');

const add = async (newRace) => {
  const [id] = await db('races').insert(newRace);
  return findById(id);
};

const findAll = () => {
  return db('races');
};

const findById = async (id) => {
  return db('races').where({ id }).first();
};

const getIdbyName = async (name) => {
  return db('races').select('race_id').where({ name: name }).first();
};

module.exports = {
  add,
  findAll,
  findById,
  getIdbyName,
};
