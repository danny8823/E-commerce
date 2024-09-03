const express = require('express')
const itemController = require('../controller/itemController')
const itemRouter = express.Router()

itemRouter.post('/api/items/add', itemController.add)
itemRouter.post('/api/items/remove', itemController.remove)
itemRouter.put('/api/items/update', itemController.update)
itemRouter.get('/api/items/list', itemController.list)

module.exports = itemRouter