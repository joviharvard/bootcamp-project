exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', table => {
      table.uuid("id").primary()
      table.text("userId").notNull()
      table.text("content")  
      table.timestamp("createdAt").defaultTo(knex.fn.now()).notNull()
      table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNull()
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('posts')
  };
  