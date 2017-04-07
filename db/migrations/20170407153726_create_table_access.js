
exports.up = function(knex, Promise) {
  return knex.schema.createTable('access', function(table) {
    table.string('type').notNullable().comment('Access type');
    table.string('data').notNullable().comment('Access data');
    table.string('user').notNullable().comment('User');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('access');
};
