const { Post } = require('../models');

const postData = [{
        title: 'Post 1',
        content: 'Post 1 content',
        user_id: 1

    },
    {
        title: 'Post 2',
        content: 'Post 2 content',
        user_id: 2
    },
    {
        title: 'Post 3',
        content: 'Post 3 content',
        user_id: 3
    },
    {
        title: 'Post 4',
        content: 'Post 4 content',
        user_id: 4

    },
    {
        title: 'Post 5',
        content: 'Post 5 content',
        user_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;