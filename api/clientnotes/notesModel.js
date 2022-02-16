const db = require('../../data/db-config');

function get() {
  return db('client_notes');
}

module.exports = {
  get,
};
