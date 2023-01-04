const { Comment } = require('../models');

const comments = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Great post!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Awesome!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "I completely agree!"
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "Absolutely!"
    }
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;