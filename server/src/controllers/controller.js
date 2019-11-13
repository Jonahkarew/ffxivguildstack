const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Member } = require('../models');
const handle = require('../utils/promise-handler');

const secret = 'turtletigertater';

// registering function
const register = (req, res) => {
    console.log(req.body)

    const {email, password} = req.body;
    const member = new Member({email, password})


    member.save(err => {
        if (err){
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'There has been an error registering your account. Please try again later.'
            })
        }
        else{
            res.status(200).json({
                succes: true,
                message: 'Welcome to the guild!'
            })
        }
    })
}

// login function
const login = async (req, res) => {
    const { email, password } = req.body;

    const [ findMemberErr, memberInfo ] = await handle(Member.findOne({email}));
    
    if (findMemberErr){
        console.log(findMemberErr);
        res.status(500).json({
            error: "Internal server error, please try again later."
        })
    }
    else if (!memberInfo){
        res.status(401).json({
            error: "That email isn't in our database, please register, or try a differnet email."
        })
    }
    else {
        const [pwErr, same] = await handle(memberInfo.isCorrectPassword(password))
        if (pwErr){
            res.status(500).json({
                error: 'Internal Error handling password, please try again later.'
            })
        }
        else if (!same){
            res.status(401).json({
                error: 'That password is incorrect'
            })
        }
        else {
            const payload = {
                _id: memberInfo._id,
                email: memberInfo
            }
    
            const token = jwt.sign(payload, secret, {
                expiresIn: '12h'
            })

            res.cookie('token', token, {httpOnly: true}).status(200).json(token)
        }
    }
}

const retrieveMemberProfile = async(req, res) => {
    const [userErr, memberProfile] = await handle(Member.findById(req._id))

    if(userErr){
        res.status(500).json(userErr)
    }
    else{
        res.status(200).json(memberProfile)
    }
}

// create route to update user profile
const updateProfile = async(req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: 'Could not find requested content'
        })
    }
    Member.findByIdAndUpdate(req._id, {
        characterName: req.body.characterName,
        characterJob: req.body.characterJob
    },
    {new: true})
    .then(Member => {
        if(!Member){
            return res.status(404).send({
                message: 'Could not find a member with that id'
            })
        }
        res.send(Member)
    }).catch(err => {
        if(err) console.log(err)
    })
    console.log(req.body)
}



// export methods

module.exports = {
    register,
    login,
    retrieveMemberProfile,
    updateProfile
}