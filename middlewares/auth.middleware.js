const jwt = require('jsonwebtoken')

module.exports = {
    verify(req, res, next) {
        if (!(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))) {
            return res.json({ status: 'failed (no token)' })
        }
        const token = req.headers.authorization.split(' ')[1]
        try {
            const payload = jwt.verify(token, 'hienhan0901');
            if (payload) next()
        } catch (err) {
            return res.json({ status: 'failed (unauthorized)' })
        }
    },
    verifyAdmin(req, res, next) {
        if (!(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))) {
            return res.json({ status: 'failed (no token)' })
        }
        const token = req.headers.authorization.split(' ')[1]
        try {
            const payload = jwt.verify(token, 'hienhan0901');
            if (payload.role === 'admin') {
                next()
            } else {
                return res.json({ status: 'failed (not admin)' })
            }
        } catch (err) {
            return res.json({ status: 'failed (unauthorized)' })
        }
    }
}