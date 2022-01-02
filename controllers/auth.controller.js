const authService = require('../services/auth.service')

module.exports = {
    async login(req, res) {
        if (!(req.body.username && req.body.password)) {
            return res.status(200).json({ status: 'failed' })
        }
        try {
            const logIn = await authService.login(req.body.username, req.body.password)
            res.json({ access_token: logIn })
        } catch (err) {
            res.status(200).json({ status: 'failed', msg: err })
        }
    }
} 