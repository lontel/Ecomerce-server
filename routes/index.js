const express = require('express')
const authRoutes = require('./auth.routes')
const userRoutes = require('./user.routes')
const router = express.Router()


const routesIndex = [
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/users',
        route: userRoutes
    }
]

routesIndex.forEach((route) => {
    router.use(route.path, route.route)
})


module.exports = router
