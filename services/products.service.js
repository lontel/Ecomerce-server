const httpStatus = require("http-status")
const { ApiError } = require("../middleware/apiError")
const { Product } = require("../models/product")


const addProduct = async (body) => {
    try {
        const product = new Product({
            ...body
        })
        await product.save()
        return product
    } catch (error) {
        throw error
    }
}

const getProductById = async (_id) => {
    try {
        const product = await Product.findById(_id).populate('brand')
        if (!product) throw new ApiError(httpStatus.NOT_FOUND, 'Product not found')
        return product
    } catch (error) {
        throw error
    }
}

const updateProduct = async (_id, body) => {
    try {
        const product = await Product.findOneAndUpdate(
            { _id },
            { "$set": body },
            { new: true }
        )
        if (!product) throw new ApiError(httpStatus.NOT_FOUND, 'Product not found')
        return product
    } catch (error) {
        throw error
    }
}

const deleteProduct = async (_id) => {
    try {
        const product = await Product.findByIdAndRemove(_id)
        if (!product) throw new ApiError(httpStatus.NOT_FOUND, 'Product not found')
        return product
    } catch (error) {
        throw error
    }
}

const getAllProducts = async (req) => {
    try {
        const products = await Product
            .find({})
            .populate('brand')
            .sort([
                [req.query.sortBy, req.query.order]
            ])
            .limit(parseInt(req.query.limit))
        if (!products) throw new ApiError(httpStatus.NOT_FOUND, 'Products not found')
        return products
    } catch (error) {
        throw error
    }
}


module.exports = { addProduct, getProductById, updateProduct, deleteProduct, getAllProducts }