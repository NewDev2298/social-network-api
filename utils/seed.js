const connection = require('../config/connection');
const { User } = require('../models/User');

const userSeed = [

    {
        'username': 'developer',
        'email': 'dev@email.com'
    },
    {
        'username': 'developer1',
        'email': 'dev2@email.com'
    },
    {
        'username': 'developer2',
        'email': 'dev1@email.com'
    },
]

connection.once('open', async() =>{
    await User.deleteMany()
    await User.collection.insertMany(userSeed)
})