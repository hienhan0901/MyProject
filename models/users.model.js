const db = require('../utils/db')

module.exports = {
    getAll() {
        return db('users')
    },

    getById(id) {
        return db('users').where('id', id)
    },

    getByUsername(username) {
        return db('users').where('username', username)
    },

    add(user) {
        return db('users').insert(user)
    },

    update() {

    },

    delete() {

    },

    async isUsernameTaken(username) {
        const existUser = await db('users').where('username', username)
        return existUser.length > 0 ? true : false
    }
}