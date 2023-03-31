const db = require('../../data/db-config');

const findAll = () => {
  return db('google_events');
};

const findById = async (id) => {
  return db('google_events').where({ id }).first();
};

const add = async (calendarId, event) => {
  return db('google_events').insert(
    {
      ...event,
      calendarId: calendarId,
    },
    '*'
  );
};

const update = (id, changes) => {
  return db('google_events').where({ id }).update(changes, '*');
};

const remove = (id) => {
  return db('google_events').where({ id }).del();
};

module.exports = {
  add,
  findById,
  findAll,
  update,
  remove,
};
