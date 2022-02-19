const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
    user: { 
        type: String,
        required: true
    },
    orderDate: { 
        type: Date, 
        default: Date.now 
    },
    items: { 
        type: Array, 
        default: [] 
    },
    quantity: {
        type: Number
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Not processed'
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;