const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Member } = require('../models');
const handle = require('../utils/promise-handler');

const secret = 'turtletigertater';


const register = (req, res) => {
    console.log(req.body)

    const {email, password} = req.body;
    const Member = new Member({email, password})


    Member.save(err => {
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

const login = async (req, res) => {
    const { email, password } = req.body;

    const [ findUserErr, userInfo ] = await handle(Member.findOne({email}));
    if (findUserErr){
        console.log(findUserErr);
        res.status(500).json({
            error: "Internal server error, please try again later."
        })
    }
    else if (!userInfo){
        res.status(401).json({
            error: "That email isn't in our database, please register, or try a differnet email."
        })
    }
    else {
        
    }
}