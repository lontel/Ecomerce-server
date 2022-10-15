const express = require('express')
const brandController = require('../controllers/brand.controller')
const authRoutes = require('./auth.routes')
const userRoutes = require('./user.routes')
const brandRoutes = require('./brand.routes')
const productRoutes = require('./product.routes')
const siteRoutes = require('./site.routes')

const router = express.Router()


const routesIndex = [
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/users',
        route: userRoutes
    },
    {
        path: '/brands',
        route: brandRoutes
    },
    {
        path: '/products',
        route: productRoutes
    },
    {
        path: '/site',
        route: siteRoutes
    }
]

routesIndex.forEach((route) => {
    router.use(route.path, route.route)
})


module.exports = router
