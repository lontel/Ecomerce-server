const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.js')
const transactionController = require('../controllers/transaction.controller')

router.route('/')
    .post(auth(), transactionController.addTransaction)

module.exports = router