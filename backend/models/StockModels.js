const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stockSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // bought: {
    //     type: Date,
    //     required: true
    // },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Stock', stockSchema)