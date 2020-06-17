const router = require('express').Router();
const {   character, news, getId, newsTest } = require('../../controllers/fetchLodestone');

router
    .route('/news')
    .get(
        // requiredAuth, 
        news)


router
    .route('/charTest')
    .get(
        character
    )

router
        .route('/test')
        .get(newsTest)

module.exports = router