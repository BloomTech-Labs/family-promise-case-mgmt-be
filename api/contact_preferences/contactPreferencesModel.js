const db = require('../../data/db-config');

const add = async (client_id, preferences) => {
  await db('contact_preferences').insert({
    ...preferences,
    client_id: client_id,
  });
  return findById(client_id);
};

const findAll = () => {
  return db('contact_preferences');
};

const findById = async (client_id) => {
  return db('contact_preferences').where({ client_id }).first();
};

const update = (client_id, changes) => {
  return db('contact_preferences').where({ client_id }).update(changes, '*');
};

const remove = (client_id) => {
  return db('contact_preferences').where({ client_id }).del();
};

module.exports = {
  add,
  findById,
  findAll,
  update,
  remove,
};
