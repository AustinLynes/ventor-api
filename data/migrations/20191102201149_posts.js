
exports.up = function (knex) {
    return knex.schema.createTable('posts', tbl => {
        tbl.increments()
        tbl.integer('user_id')
            .references('id')
            .inTable('users')
            .notNull()
            .onDelete('cascade')
        tbl.text('title', 120).notNullable()
        tbl.text('contents', 250).notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('posts')
};
