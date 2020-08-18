const router = require('express').Router();
const userRoutes = require('./user-routes');
const postBlog = require('./post-routes');
const scrapeUser = require("./scrape-routes");

router.use('/user', userRoutes);
router.use('/user', postBlog);
router.use("/user", scrapeUser);

module.exports = router;