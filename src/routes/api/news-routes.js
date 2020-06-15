const router = require('express').Router();
const {   character, news, getId } = require('../../controllers/fetchLodestone');

router
    .route('/news')
    .post(
        // requiredAuth, 
        news)


router
    .route('/charTest')
    .get(
        character
    )

module.exports = router