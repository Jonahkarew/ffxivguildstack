const router = require('express').Router();
const requiredAuth = require('../../middleware/authentication');
const { postBlog, getAllPosts } = require('../../controllers/postController');

router
    .route('/postBlog')
    .post(
        // requiredAuth, 
        postBlog)


router
    .route('/getPosts')
    .get(
        getAllPosts
    )

module.exports = router