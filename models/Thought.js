const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
    {

    }
)

const Thought = model('application', thoughtSchema);

module.exports = Thought;