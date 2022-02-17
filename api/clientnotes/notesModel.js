const db = require('../../data/db-config');

function get() {
  return db('client_notes');
}

function getById(id) {
  return db('client_notes').where({ id }).first();
}

function insert() {
  return db('client_notes')
    .insert('notes')
    .then((id) => {
      return getById(id[0]);
    });
}

function update(id, changes) {
  return db('client_notes')
    .where(id)
    .update(changes)
    .then((id) => {
      return getById(id);
    });
}

function remove(id) {
  return db('client_notes').where('id', id).del();
}

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};
