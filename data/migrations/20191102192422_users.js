
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl=>{
      tbl.increments()
      tbl.text('name', 255).notNullable()
      tbl.integer('age').notNullable()
      tbl.text('username', 32)
      tbl.text('password', 56).notNullable()
      tbl.text('bio')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};

// knex migrate:latest
    // will create the table in the database....
    // once this is done no edititng...
