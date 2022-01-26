const mongoose = require('mongoose')

// Creating the DB Schema
const PostSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    hashtag: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Exporting the DB Schema
module.exports = mongoose.model('posts', PostSchema)