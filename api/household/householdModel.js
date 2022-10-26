const db = require('../../data/db-config');

const update = (id, changes) => {
  return db('clients').where({ id }).update(changes, '*');
};

// const updateEducationHistoryByClientId = (id, changes) => {
//   return db('education_histories').where({ client_id: id }).update(changes, '*');
// }; - Added to clientModel

const updateLocationsByHouseholdId = (id, changes) => {
  return db('locations').where({ household_id: id }).update(changes, '*');
};

const updateHouseholdByName = (id, changes) => {
  return db('households').where({ client_id: id }).update(changes, '*');
};

// const updateClientsByHouseholdId = (id, changes) => {
//   return db('clients').where({ household_id: id }).update(changes, '*');
// }; - Added to clientModel

const updateGenderByName = (name, changes) => {
  return db('genders').where({ name: name }).update(changes, '*');
};

const updateRaceByName = (name, changes) => {
  return db('races').where({ name: name }).update(changes, '*');
};

const updateEthnicityByName = (name, changes) => {
  return db('ethnicities').where({ name: name }).update(changes, '*');
};

// const updatePhoneNumbersByClientId = (id, changes) => {
//   return db('phone_numbers').where({ client_id: id }).update(changes, '*');
// }; - Added to clientModel

// const updateEmailByClientId = (id, changes) => {
//   return db('email_addresses').where({ client_id: id }).update(changes, '*');
// }; - Added to clientModel

module.exports = {
  update,
  // updateEducationHistoryByClientId,
  updateLocationsByHouseholdId,
  updateHouseholdByName,
  // updateClientsByHouseholdId,
  updateGenderByName,
  updateRaceByName,
  updateEthnicityByName,
  // updatePhoneNumbersByClientId,
  // updateEmailByClientId,
};
