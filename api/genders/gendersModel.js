const db = require('../../data/db-config');

const add = async (newGender) => {
  const [id] = await db('genders').insert(newGender);
  return findById(id);
};

const findAll = () => {
  return db('genders');
};

const findById = async (id) => {
  return db('genders').where({ id }).first();
};

const getIdbyName = async (name) => {
  return db('genders').select('gender_id').where({ name: name }).first();
};

module.exports = {
  add,
  findAll,
  findById,
  getIdbyName,
};
