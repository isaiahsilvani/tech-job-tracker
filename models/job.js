const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    title: {
        type: String,
    },
    location: {
        type: String,
    },
    type: {
        type: String,
    },
    dateCreated: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model('Job', jobSchema)