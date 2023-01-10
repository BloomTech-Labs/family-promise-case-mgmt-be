const db = require('../../data/db-config');

/* GET MODELS */

const findById = async (id) => {
  return db('household').where({ id }).first();
};

const findLocationByHouseholdId = async (id) => {
  return db('household').where({ id }).first();
};

const findHouseholdbyId = async (id) => {
  return db('households').where({ id }).first();
};

/* UPDATE MODELS */

const update = (id, changes) => {
  return db('clients').where({ id }).update(changes, '*');
};

const updateLocationsByHouseholdId = (id, changes) => {
  return db('locations').where({ household_id: id }).update(changes, '*');
};

const updateHouseholdById = (id, changes) => {
  return db('households').where({ id }).update(changes, '*');
};

const updateGenderByName = (name, changes) => {
  return db('genders').where({ name: name }).update(changes, '*');
};

const updateRaceByName = (name, changes) => {
  return db('races').where({ name: name }).update(changes, '*');
};

const updateEthnicityByName = (name, changes) => {
  return db('ethnicities').where({ name: name }).update(changes, '*');
};

module.exports = {
  update,
  updateLocationsByHouseholdId,
  updateHouseholdById,
  updateGenderByName,
  updateRaceByName,
  updateEthnicityByName,
  findById,
  findLocationByHouseholdId,
  findHouseholdbyId,
};
