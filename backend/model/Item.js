const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            default: 0
        },
        description: {
            type: String,
            default: 'Product description'
        },
        type: {
            type: String,
            required: true
        }
    }
)   

module.exports = mongoose.model("Item", itemSchema)