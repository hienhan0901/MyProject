const db = require('../utils/db')

// const getAll = function () {


module.exports = {
    getAll() {
        return db('categories')
    },

    getById(id) {
        return db('categories').where('id', id)
    },

    add() {

    },

    update() {

    },

    delete() {
        
    }
}