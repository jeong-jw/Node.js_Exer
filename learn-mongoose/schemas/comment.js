const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { objectId } } = Schema;
const commentSchema = new Schema({
    commenter: {
        type: ObjectIdm,
        required: true,
        ref: 'User',
    },
    comment: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Comment', commentSchema);