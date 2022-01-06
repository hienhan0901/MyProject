var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.controller')
const authMdw = require('../middlewares/auth.middleware')

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', usersController.register)
router.get('/', authMdw.verifyAdmin, usersController.getAll)


module.exports = router;
