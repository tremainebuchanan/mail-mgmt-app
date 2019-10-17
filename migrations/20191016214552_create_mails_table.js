/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('mails', (table) => {
    table.increments('id').primary();
    table.string('sender');
    table.string('subject');
    table.string('recipient');
    table.string('org');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('mails');
};
