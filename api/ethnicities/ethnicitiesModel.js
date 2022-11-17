const db = require('../../data/db-config');

const add = async (newRace) => {
  const [id] = await db('ethnicities').insert(newRace);
  return findById(id);
};

const findAll = () => {
  return db('ethnicitiess');
};

const findById = async (id) => {
  return db('ethnicitiess').where({ id }).first();
};

const getIdbyName = async (name) => {
  return db('ethnicities').select('id').where({ name: name }).first();
};

module.exports = {
  add,
  findAll,
  findById,
  getIdbyName,
};
