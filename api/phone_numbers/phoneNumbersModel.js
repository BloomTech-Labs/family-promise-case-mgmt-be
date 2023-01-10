const db = require('../../data/db-config');

const add = async (newPhoneNumber) => {
  const [id] = await db('phone_numbers').insert(newPhoneNumber);
  return findById(id);
};

const findAll = () => {
  return db('phone_numbers');
};

const findById = async (id) => {
  return db('phone_numbers').where({ id }).first();
};

module.exports = {
  add,
  findById,
  findAll,
};
