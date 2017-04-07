
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.string('uuid').primary().unique().notNullable().comment('User UUID');
    table.string('email').unique().notNullable().comment('User email, must present and unique');
    table.string('status').notNullable().comment('Account status');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
