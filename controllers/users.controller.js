const usersService = require('../services/users.service')

const register = async function (req, res, next) {
    const user = req.body

    if (!(user.username && user.password && user.email)) {
        return res.status(200).json({ status: 'failed' })
    }

    try {
        const data = await usersService.register(user)
        //console.log(data)
        res.json({
            id: data[0],
            status: 'success'
        })

    } catch (error) {
        res.status(200).json({ status: 'failed', msg: error })
    }
}

module.exports = {
    register
}