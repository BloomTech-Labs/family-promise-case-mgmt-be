const db = require('../../data/db-config');

const add = async (newEmailAddress) => {
  const [id] = await db('email_addresses').insert(newEmailAddress);
  return findById(id);
};

const findAll = () => {
  return db('email_addresses');
};

const findById = async (id) => {
  return db('email_addresses').where({ id }).first();
};

module.exports = {
  add,
  findById,
  findAll,
};
