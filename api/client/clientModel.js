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
function get(id) {
  return db('client_notes').where({ id }).orderBy('created_at', 'desc');
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

const updatePhoneNumbersById = (id, changes) => {
  return db('phone_numbers').where({ id: id }).update(changes, '*');
};

const updateEmailById = (id, changes) => {
  return db('email_addresses').where({ id: id }).update(changes, '*');
};

const updateEducationHistoryById = (id, changes) => {
  return db('education_histories')
    .where({ id: id })
    .update(changes, '*');
};

const updateInsuranceById = (id, changes) => {
  return db('insurace').where({ id: id }).update(changes, '*');
}



const getGenderIdById = async (id) => {
  return db('genders').where({ id: id }).first;
};

const getRaceIdById = async (id) => {
  return db('races').where({ id: id }).first;
};

const getEthnicityById = async (id) => {
  return db('ethnicities').where({ id: id }).first;
};

const getEducationHistoryById = async (id) => {
  return db('education_histories').where({ id: id }).first;
};

const getPhoneNumbersById = async (id) => {
  return db('phone_numbers').where({ id: id }).first;
};

const getEmailById = async (id) => {
  return db('email_addresses').where({ id: id }).first;
};

//Start of Insurance Model
const getMedicareById = async (id) => {
  return db('medicare_number').where({ id: id}).first;
}

const getMedicareDateById = async (id) => {
  return db('medicare_effective_date').where({ id: id}).first;
}

const getMedicaidNumberById = async (id) => {
  return db('medicaid_number').where({ id: id}).first;
}

const getMedicaidDateById = async (id) => {
  return db('medicaid_effective_date').where({ id: id}).first;
}

const getMedicaidExpDateById = async (id) => {
  return db('medicaid_expiration_date').where({ id: id}).first;
}

const getPrivateInsuranceCompanyById = async (id) => {
  return db('private_insurance_company').where({ id: id}).first;
}

const getPrivateInsuranceGroupNumberById = async (id) => {
  return db('private_insurance_group_number').where({ id: id}).first;
}

const getPrivateInsuranceSubscriberNumberById = async (id) => {
  return db('private_insurance_subscriber_number').where({ id: id}).first;
}

const getPrivateInsuranceEffectiveDateById = async (id) => {
  return db('private_insurance_effective_date').where({ id: id}).first;
}

const getPrivateInsuranceExpDateById = async (id) => {
  return db('private_insurance_expiration_date').where({ id: id}).first;
}

const getOtherCoverageById = async (id) => {
  return db('other_coverage').where({ id: id}).first;
}

const getOtherAgenciesById = async (id) => {
  return db('other_agencies').where({ id: id }).first;
}

//End of insurance model

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
  updatePhoneNumbersById,
  updateEmailById,
  updateEducationHistoryById,
  updateInsuranceById,
  getGenderIdById,
  getRaceIdById,
  getEthnicityById,
  getEducationHistoryById,
  getPhoneNumbersById,
  getEmailById,
  getMedicareById,
  getMedicareDateById,
  getMedicaidNumberById,
  getMedicaidDateById,
  getMedicaidExpDateById,
  getPrivateInsuranceCompanyById,
  getPrivateInsuranceGroupNumberById,
  getPrivateInsuranceSubscriberNumberById,
  getPrivateInsuranceEffectiveDateById,
  getPrivateInsuranceExpDateById,
  getOtherCoverageById,
  getOtherAgenciesById,
};
