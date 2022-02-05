const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    model: String,
    year: Number,
    color: String
})

module.exports = mongoose.model('cars', carSchema)