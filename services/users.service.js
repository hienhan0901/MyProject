const bcrypt = require('bcryptjs');
const usersModel = require('../models/users.model')

module.exports = {
    async register(user) {
        // Check if username is taken
        if (await usersModel.isUsernameTaken(user.username)) {
            throw 'Username taken'
        }
        // Create
        try {
            user.password = bcrypt.hashSync(user.password, 10)
            const newUser = await usersModel.add(user)
            return newUser
        } catch {
            throw 'model failed'
        }
    }
}