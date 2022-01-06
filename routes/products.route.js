const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products.controller')
const authMdw = require('../middlewares/auth.middleware')
const uploadMdw = require('../middlewares/upload.middleware')

router.get('/', productsController.getAll)
router.get('/:id', productsController.getById)
router.post('/', authMdw.verifyAdmin, uploadMdw.single('image'), productsController.createProduct)

module.exports = router