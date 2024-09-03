const asyncHandler = require('express-async-handler')
const Item = require('../model/Item')
const User = require('../model/User')

const itemController = {
    list: asyncHandler(async(req,res) => {
        const items = await Item.find()
        res.send(items)

        if(!items) {
            res.json({
                message: 'Error retrieving items.'
            })
        }
    }),
    add: asyncHandler(async(req,res) => {
        const { itemName,price,quantity,description,type} = req.body

        if(!itemName || !price || !quantity || !type) {
            throw new Error('Please fill out all fields.')
        }

        const item = await Item.create({
            itemName,
            price,
            quantity,
            description,
            type
        })

        res.json({
            message: 'Product added',
            product: {
                id: item._id,
                itemName,
                price,
                quantity,
                description,
                type
            }
        })
    }),

    remove: asyncHandler(async(req,res) => {
        const { itemName } = req.body

        if(!itemName) {
            throw new Error('please fill out field')
        }

        const deletedItem = Item.deleteOne({itemName})
            .then(result => console.log('Item deleted', result))
            .catch(err => console.error('Error deleting document', err))

        if(deletedItem) {
            res.json({
                message: 'Item deleted.'
            })
        } else {
            res.json({
                message: 'Item not found.'
            })
        }
    }),

    update: asyncHandler(async(req,res) => {
        const {itemName,newItemName,price,quantity,description,type} = req.body

        const item = await Item.findOneAndUpdate(
            {
                itemName
            },
            {   
                itemName: newItemName,
                price,
                quantity,
                description,
                type
            },
            {
                new: true
            }
        ).then(result => {
            res.json({
                message: 'Item updated',
                result
            })
        })
        .catch(err => {
            res.json({
                message: 'Error updating item',
                error: err.message
           })
        })
    }),

    delete: asyncHandler(async(req,res) => {
        const {itemName} = req.body

        await Item.deleteOne({itemName})

        res.json({
            message: 'This item has been deleted'
        })
    })
}

module.exports = itemController
