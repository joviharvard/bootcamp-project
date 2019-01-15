
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hobbies', table => {
    table.uuid("id").primary()
    table.text("userId").notNull()
    table.enu("hobby", ['SPORTS', 'ARTS', 'MUSIC', 'READING', 'TRAVEL', 'DINING', 'CODING'])
    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNull()
    table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNull()
  })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('hobbies')
};
