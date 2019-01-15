exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
      table.uuid("id").primary()
      table.text("name").notNull()
      table.text("email").notNull().unique()
      table.text("password").notNull()
      table.datetime("birthday")
      table.enu("concentration", ["STEM", "NON-STEM"])
      table.text("hometown")
      table.enu("house", ["RIVER", "YARD", "QUAD"])
      table.enu("gender", ["MALE", "FEMALE", "OTHER"])
      table.text("bio")
      table.text("picture")
      table.timestamp("createdAt").defaultTo(knex.fn.now()).notNull()
      table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNull()
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('users')
  };
  