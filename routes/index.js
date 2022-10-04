const express = require('express')
const authRoutes = require('./auth.routes')
const router = express.Router()


const routesIndex = [
    {
        path: '/auth',
        route: authRoutes
    }
]

routesIndex.forEach((route) => {
    router.use(route.path, route.route)
})


module.exports = router
