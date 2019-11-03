const db = require('../data/dbConfig')

function find() {
    return db('users')
}
function findById(id) {
    return db('users')
        .where({ id })
        .first()
}
function add(user) {
    db('users')
        .insert(user)
        .then(ids => {
            return findById(ids[0])
        })
}
function update(user, id) {
    return db('users')
        .where({ id })
        .update(user)
}
function remove(id) {
    return db('users')
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