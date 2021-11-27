const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    id: { type: String },

});

module.exports = mongoose.model('User', userSchema);