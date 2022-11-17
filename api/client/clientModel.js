const db = require('../../data/db-config');

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

async function notesUpdate(clientID, noteID, changes) {
  console.log(`the client ID here, ${clientID}, is not currently being used.`);
  console.log(`the note ID here, ${noteID}, does it exist?`);
  const originalNote = await db('client_notes')
    .where('id', noteID)
    .catch((error) => console.error("Dang, didn't work.", error));
  console.log('eventual changes', changes);
  console.log('the Original Note', originalNote);
  return originalNote;
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

// FOR CLIENT INTAKE ROUTES

const updatePhoneNumbersByClientId = (id, changes) => {
  return db('phone_numbers').where({ client_id: id }).update(changes, '*');
};

const updateEmailByClientId = (id, changes) => {
  return db('email_addresses').where({ client_id: id }).update(changes, '*');
};

const updateEducationHistoryByClientId = (id, changes) => {
  return db('education_histories')
    .where({ client_id: id })
    .update(changes, '*');
};

const getGenderIdByClientId = async (id) => {
  return db('genders').where({ client_id: id }).first;
};

const getRaceIdByClientId = async (id) => {
  return db('races').where({ client_id: id }).first;
};

const getEthnicityByClientId = async (id) => {
  return db('ethnicities').where({ client_id: id }).first;
};

const getEducationHistoryByClientId = async (id) => {
  return db('education_histories').where({ client_id: id }).first;
};

const getPhoneNumbersByClientId = async (id) => {
  return db('phone_numbers').where({ client_id: id }).first;
};

const getEmailByClientId = async (id) => {
  return db('email_addresses').where({ client_id: id }).first;
};

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
  updatePhoneNumbersByClientId,
  updateEmailByClientId,
  updateEducationHistoryByClientId,
  getGenderIdByClientId,
  getRaceIdByClientId,
  getEthnicityByClientId,
  getEducationHistoryByClientId,
  getPhoneNumbersByClientId,
  getEmailByClientId,
};
