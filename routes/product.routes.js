const express = require('express')
const { get } = require('mongoose')
const router = express.Router()
const productsController = require('../controllers/products.controller')
const auth = require('../middleware/auth')
const { addProductValidator } = require('../middleware/validations')
const formidableMiddleware = require('express-formidable')


router.post('/', auth('createAny', 'product'), addProductValidator, productsController.addProduct)

router.route('/product/:id')
    .get(productsController.getProductById)
    .patch(auth('updateAny', 'product'), productsController.updateProduct)
    .delete(auth('deleteAny', 'product'), productsController.deleteProduct)

router.get('/allProducts', productsController.getAllProducts)
router.post('/paginate/all', productsController.paginateProducts)

//upload images
router.post('/upload', auth('createAny', 'product'), formidableMiddleware(), productsController.picUpload)


module.exports = router
