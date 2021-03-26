const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    title: String,
    author: String,
    dateCreated: String,
    description: String
})

module.exports = mongoose.model('Message', messageSchema)