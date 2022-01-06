const productsModel = require('../models/products.models')

module.exports = {
    async getAll(req, res) {
        try {
            const allProducts = await productsModel.getAll()
            res.json({
                data: allProducts,
                status: 'success'
            })
        } catch {
            res.status(200).json({ status: 'failed' })
        }
    },
    async getById(req, res) {
        try {
            const id = req.params.id
            const product = await productsModel.getById(id)
            res.json({
                data: product,
                status: 'success'
            })
        } catch {
            res.status(200).json({ status: 'failed' })
        }
    },
    async createProduct(req, res) {
        try {
            const id = req.params.id
            const data = {
                name: req.body.name,
                price: req.body.price,
                image: req.file.filename,
            }
            const upload = await productsModel.add(id, data)
            res.json({
                data: upload,
                status: 'success'
            })
        } catch {
            res.status(200).json({ status: 'failed' })
        }
    },
}