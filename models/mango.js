const mongoose = require('mongoose')

const mangoSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    image: {
        type: String,
    },
    origin: {
        type: String,
    },
    Notes: {
        type: String,
    }
});


module.exports = mongoose.model('Mango', mangoSchema, 'mango')
