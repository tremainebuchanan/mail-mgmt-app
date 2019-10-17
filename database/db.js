/* eslint-disable import/order */
const config = require('../knexfile');
const knex = require('knex')(config);

module.exports = knex;

knex.migrate.latest([config]);
