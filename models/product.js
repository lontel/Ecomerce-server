const mongoose = require('mongoose')
const Schema = mongoose.Schema
const aggregatePaginate = require('mongoose-aggregate-paginate-v2')

const productSchema = mongoose.Schema({
    model: {
        required: [true, 'You need a product model.'],
        type: String,
        unique: 1,
        maxlength: 250
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    category: {
        required: true,
        type: String
    },
    description: {
        required: [true, 'You need a description'],
        type: String,
        maxlength: 1000
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        required: true,
        type: Number,
        default: 0
    },
    itemSold: {
        type: Number,
        default: 0
    },
    shipping: {
        type: Boolean,
        required: [true, 'Specify if this product has free shipping']
    },
    images: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
})

productSchema.plugin(aggregatePaginate)

const Product = mongoose.model('Product', productSchema)
module.exports = { Product }