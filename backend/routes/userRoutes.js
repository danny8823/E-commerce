const express = require('express')
const userController = require('../controller/userController')
const isAuthenticated = require('../middlewares/isAuthorized')
const router = express.Router()

router.post('/api/users/register', userController.register)
router.post('/api/users/login', userController.login)
router.get('/api/users/profile', isAuthenticated, userController.profile)

module.exports = router 