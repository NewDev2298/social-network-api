const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: Schema.Types.String,
            ref: 'User',

        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

        reactions: [
            reactionSchema
        ],
    },
    {
        toJSON:{
            getters:true,
        },
        id: false
    }
)
thoughtSchema.methods.getTimeStamp=function() {
    return this.createdAt.toLocaleDateString('en-US')
}

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;