
exports.up = function (knex) {
    return knex.schema.createTable('comments', tbl => {
        tbl.increments()
        tbl.integer('user_id')
            .references('id')
            .inTable('users')
            .notNull()
            .onDelete('cascade')
        tbl.integer('post_id')
            .references('id')
            .inTable('posts')
            .notNull()
            .onDelete('cascade')
        tbl.text('content', 250)
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('comments')
};
