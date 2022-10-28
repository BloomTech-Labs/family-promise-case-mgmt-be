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

const updateClientsByHouseholdId = (id, changes) => {
  return db('clients').where({ household_id: id }).update(changes, '*');
};

const getGenderIdByInput = async (input) => {
  return db('genders').where({ name: input }).first;
};

const getRaceIdByInput = async (input) => {
  return db('races').where({ name: input }).first;
};

const getEthnicityByInput = async (input) => {
  return db('ethnicities').where({ name: input }).first;
};

const getEducationHistoryByInput = async (input) => {
  return db('education_histories').where({ client_id: input }).first;
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
  updateClientsByHouseholdId,
  getGenderIdByInput,
  getRaceIdByInput,
  getEthnicityByInput,
  getEducationHistoryByInput,
};
