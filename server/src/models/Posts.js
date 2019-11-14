const mongoose = require ('mongoose');

const { Schema } = mongoose


const PostSchema = new Schema({
    postContent: {
        type: String,
        required: true
    },
    postAuthor: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Posts', PostSchema)