const db = require('../../data/db-config');

function get() {
  return db('client_notes');
  //   add a descending order here
}

function getById(id) {
  return db('client_notes').where({ id }).first();
}

function insert(note) {
  return db('client_notes')
    .insert(note)
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

function updateDelete(id) {
  const changes = { deleted_at: Date.now() };
  return db('client_notes')
    .where(id)
    .update(changes)
    .then((id) => {
      return getById(id);
    });
}

module.exports = {
  get,
  getById,
  insert,
  update,
  updateDelete,
};
