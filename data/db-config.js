require('dotenv').config();
const knex = require('knex');
const knexConfig = require('../knexfile');

let dbEnvironment = process.env.NODE_ENV || 'development';

/**
 * Gets correct knexfile configuration to build a knex instance based on the NODE_ENV
 * @param {object} knexConfig knexfile.js configuration
 * @param {string} dbEnvironment NODE_ENV or 'development' if NODE_ENV is not set
 * @returns {knex} knex instance
 */
function knexBuilder(knexConfig, dbEnvironment) {
  if (dbEnvironment == 'test') dbEnvironment = 'development';
  if (knexConfig[dbEnvironment]) return knex(knexConfig[dbEnvironment]);
  else
    throw new Error(
      `NODE_ENV is set to ${dbEnvironment} but configuration does not exist in knexfile.js`
    );
}

module.exports = knexBuilder(knexConfig, dbEnvironment);
