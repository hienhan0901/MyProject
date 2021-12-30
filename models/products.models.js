const db = require('../utils/db')

// const getAll = function () {


module.exports = {
    getAll() {
        return db('products')
    },

    getById(id) {
        return db('products').where('id', id)
    },

    add() {

    },

    update() {

    },

    delete() {
        
    }
}