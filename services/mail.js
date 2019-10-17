const knexfile = require('../knexfile');

const knex = require('knex')(knexfile);

module.exports = {
  create: async (mail) => knex('mails').insert(mail),
  index: async () => knex('mails').select(),
};
