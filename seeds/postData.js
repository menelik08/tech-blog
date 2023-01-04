const { Post } = require('../models');

const posts = [
    {
        'title': 'Coding',
        'post_text': "I love to code! It allows me to build really neat applications!",
        'user_id': 1
    },
    {
        'title': 'JavaScript',
        'post_text': "JavaScript is a fun but rather tough coding language to learn.",
        'user_id': 2
    },
    {
        'title': 'Pair Programming',
        'post_text': "I love pair programming. It's very helpful to have someone by your side when you're trying to overcome a challenging coding problem!",
        'user_id': 3
    },
    {
        'title': 'Full Stack Applications',
        'post_text': "It's so much fun learning how to build full stack applications!",
        'user_id': 4
    },
];

const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;