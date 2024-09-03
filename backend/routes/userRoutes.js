const express = require('express')
const userController = require('../controller/userController')
const isAuthenticated = require('../middlewares/isAuthorized')
const userRouter = express.Router()

userRouter.post('/api/users/register', userController.register)
userRouter.post('/api/users/login', userController.login)
userRouter.get('/api/users/profile', isAuthenticated, userController.profile)

module.exports = userRouter 