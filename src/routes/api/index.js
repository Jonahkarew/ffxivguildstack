const router = require('express').Router();
const userRoutes = require('./user-routes');
const postBlog = require('./post-routes');

router.use('/user', userRoutes);
router.use('/user', postBlog);

module.exports = router;