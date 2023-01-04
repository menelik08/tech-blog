const { User } = require('../models');

const users = [
    {
        'username': 'john123',
        'password': 'password1' 
    },
    {
        'username': 'Sam234',
        'password': 'password2'
    },
    {
        'username': 'Sally345',
        'password': 'password3'
    },
    {
        'username': 'Jane456',
        'password': 'password4'
    }
];

const seedUsers = () => User.bulkCreate(users);

module.exports = seedUsers;