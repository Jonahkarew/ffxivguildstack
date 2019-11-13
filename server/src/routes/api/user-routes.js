const router = require('express').Router();



const {
    register,
    login,
    retrieveMemberProfile,
    updateProfile
} = require ('../../controllers/controller.js')

// register member account
// full route should be http://localhost:3000/api/user/register
router
    .route('/register')
    .post(register)


// login to member account
// full route should be http://localhost:3000/api/user/login
router 
    .route('/login')
    .post(login)







// retrieve member profile
// full route should be http://localhost:3000/api/user/profile
router
    .route('/profile')
    .get(retrieveMemberProfile)


// update profile
router
    .route('/update/')
    .put(updateProfile)


module.exports = router