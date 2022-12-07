const paypal = require('@paypal/checkout-server-sdk')
require('dotenv').config()

let clientId = process.env.PAYPAL_CLIENT_ID
let clientSecret = process.env.PAYPAL_CLIENT_SECRET
let enviroment = new paypal.core.SandboxEnvironment(clientId, clientSecret)
let client = new paypal.core.PayPalHttpClient(enviroment)

module.exports = { client }