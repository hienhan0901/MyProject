const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const usersModel = require('../models/users.model');
const { use } = require('../routes/users.route');

module.exports = {
    async login(username, password) {
        const model = await usersModel.getByUsername(username)
        const user = model[0]
        if (bcrypt.compareSync(password, user.password)) {
            const accessToken = jwt.sign(
                {
                    id: user.id,
                    role: user.role
                },
                'hienhan0901',
                {
                    expiresIn: 5 * 60
                })
            return accessToken
        }
        else throw 'wrong password'
    }
}