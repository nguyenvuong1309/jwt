const mongoose = require('mongoose')
const userChema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email']
    },
    password: {
        type: String,
        required: [true, 'Please add a passsword']
    }
}, {
    Timestamps: true
})

module.exports = mongoose.model('User', userChema)