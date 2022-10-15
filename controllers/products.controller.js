const { productService } = require('../services')


const productsController = {
    async addProduct(req, res, next) {
        try {
            const product = await productService.addProduct(req.body)
            res.json(product)
        } catch (error) {
            next(error)
        }
    },
    async getProductById(req, res, next) {
        try {
            const _id = req.params.id
            const product = await productService.getProductById(_id)
            res.json(product)
        } catch (error) {
            next(error)
        }
    },
    async updateProduct(req, res, next) {
        try {
            const _id = req.params.id
            const product = await productService.updateProduct(_id, req.body)
            res.json(product)
        } catch (error) {
            next(error)
        }
    },
    async deleteProduct(req, res, next) {
        try {
            const _id = req.params.id
            const product = await productService.deleteProduct(_id)
            res.json(product)
        } catch (error) {
            next(error)
        }
    },
    async getAllProducts(req, res, next) {
        try {
            const products = await productService.getAllProducts(req)
            res.json(products)
        } catch (error) {
            next(error)
        }
    },
    async paginateProducts(req, res, next) {
        try {
            const products = await productService.paginateProducts(req)
            res.json(products)
        } catch (error) {
            next(error)
        }
    },
}

module.exports = productsController



