
// eslint-disable-next-line func-names
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('uid').primary();
    table.string('username');
    table.string('password');
    table.string('first_name');
    table.string('last_name');
    table.string('title');
    table.string('email');
    table.timestamps();
  });
};

exports.down = (knex) => {
  return knex.schema
    .dropTable('users')
    .dropTable('mails');
};
