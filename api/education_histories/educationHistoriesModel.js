const db = require('../../data/db-config');

const add = async (newEducationHistory) => {
  const [id] = await db('education_histories').insert(newEducationHistory);
  return findById(id);
};

const findAll = () => {
  return db('education_histories');
};

const findById = async (id) => {
  return db('education_histories').where({ id }).first();
};

module.exports = {
  add,
  findById,
  findAll,
};
