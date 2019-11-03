const db = require('../data/dbConfig')

function find() {
    return db.find('posts')
}
function findById(id) {
    return db.find('posts')
        .where({ id })
        .first()
}
function add(post) {
    db('posts')
        .insert(post)
        .then(ids => {
            return findById(ids[0])
        })
}
function update(post, id) {
    return ('posts')
        .where({ id })
        .update(post)
}
function remove(id) {
    return ('posts')
        .where({ id })
        .del()
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}