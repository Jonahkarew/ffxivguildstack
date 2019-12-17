const router = require('express').Router();
const requiredAuth = require('../../middleware/authentication')


const {
    register,
    login,
    retrieveMemberProfile,
    updateProfile,
    getMembers
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
    .get(requiredAuth, retrieveMemberProfile)


// update profile
router
    .route('/update/')
    .put(requiredAuth, updateProfile)

// get all members for static page
router
    .route('/all')
    .get(getMembers)


module.exports = router