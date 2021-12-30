const categoriesModel = require('../models/categories.model')

const getAll = async function (req, res) {
    try {
        const allCategories = await categoriesModel.getAll()
        res.json({
            data: allCategories,
            status: 'success'
        })
    } catch {
        res.status(200).json({ status: 'failed' })
    }
    // const list = await categoriesModel.getAll()
    // console.log( list)
    // res.json({})
}

const getById = async function (req, res) {
    try {
        const id = req.params.id
        const category = await categoriesModel.getById(id)
        res.json({
            data: category,
            status: 'success'
        })
    } catch {
        res.status(200).json({ status: 'failed' })
    }
}

module.exports = {
    getAll,
    getById
}