const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({

    title: {
        type:String,
        required: true 
    },
    
    text: { 
        type: String,
        required: true 
    },

    author: {
        type: String,
        required: true
    },


    timestamp: { 
        type: Date
    }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;