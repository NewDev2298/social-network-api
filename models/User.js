const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {

    }
)

const User = model('application', userSchema);

module.exports = User;