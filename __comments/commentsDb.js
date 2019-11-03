const db = require('../data/dbConfig')

function find() {
    return db.find('comments')
}
function findById(id) {
    return db.find('comments')
        .where({ id })
        .first()
}
function add(comment) {
    db('comments')
        .insert(comment)
        .then(ids => {
            return findById(ids[0])
        })
}
function update(comment, id) {
    return ('comments')
        .where({ id })
        .update(comment)
}
function remove(id) {
    return ('comments')
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