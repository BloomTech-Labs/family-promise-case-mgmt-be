const db = require('../../data/db-config');

// meed help mocking this data for future reference

// FOR CLIENT ROUTES
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

// FOR THE CLIENT NOTES ROUTES
function get(client_id) {
  console.log('model working?');
  return db('client_notes').where({ client_id }).orderBy('created_at', 'desc');
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

// function notesUpdate(id, changes) {
//   return db('client_notes')
//     .where(id)
//     .update(changes)
//     .then((id) => {
//       return getById(id);
//     });
// }

// async function notesUpdate(id, changes) {
//   const note = await db('client_notes').where(id);
//   const updatedNote = {changes, ...note}
//   console.log("comparison of note and updatedNote", note)
//   return updatedNote;
// }

// async function notesUpdate(clientID, noteID, changes) {
//   const note = await db('client_notes').where(noteID);
//   // const updatedNote = {changes, ...note}
//   console.log("comparison of note", note)
//   return note;
// }

async function notesUpdate(clientID, noteID, changes) {
  console.log(`the client ID here, ${clientID}, is not currently being used.`);
  console.log(`the note ID here, ${noteID}, does it exist?`);
  const originalNote = await db('client_notes')
    .where('id', noteID)
    .catch((error) => console.error("Dang, didn't work.", error));
  // const updatedNote = {changes, ...originalNote}
  console.log('eventual changes', changes);
  console.log('the Original Note', originalNote);
  // we will need to update this eventually.
  return originalNote;
  // return updatedNote;
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
  add,
  findById,
  findAll,
  update,
  remove,
  get,
  getById,
  insert,
  notesUpdate,
  updateDelete,
};
