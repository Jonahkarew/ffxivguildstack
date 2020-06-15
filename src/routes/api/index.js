const router = require('express').Router();
const userRoutes = require('./user-routes');
const postBlog = require('./post-routes');
const newsRoute = require('./news-routes')

router.use('/user', userRoutes);
router.use('/user', postBlog);
router.use('/user', newsRoute)

module.exports = router;