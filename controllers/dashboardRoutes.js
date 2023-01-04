const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
            include: {
                model: Comment,
                include: { model: User }
            }
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            logged_in: true
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (!postData) {
            res.status(404).json({ message: "No post found with this id!"});
            return;
        } else {
            const post = postData.get({ plain: true });

            res.render('edit-post', {
                post,
                logged_in: true
            });
        };

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/create', withAuth, (req, res) => {
    res.render('create-post');
});

module.exports = router;