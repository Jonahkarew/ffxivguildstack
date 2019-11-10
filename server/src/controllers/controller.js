var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
Member = mongoose.model('Member');

exports.register = function(req, res){
    var newMember = new Member(req.body);
    newMember.hashedPassword = bcrypt.hashSync(req.body.password, 10);
    newMember.save(function(err, Member){
        if (err){
            return res.status(400).send({
                message: err
            });
        }
        else{user.hashedPassword = undefined
        return res.json(user)}
    })
};

exports.login = function(req, res){
    Member.findOne({
        email: req.body.email
    }, function(err, member){
        if (err) throw err;
        else if(!member){
            res.status(401).json({message: 'Authentication failed, please try again.'})
        }
        else{
            return res.json({token: jwt.sign({email: member.email, name: member.characterName, _id: member._id})})
        }
    })
}

exports.loginRequired = function(req, res, next){
    if(req.member){
        next();
    }
    else {
        return res.status(401).json({message: "Unauthorized user."})
    }
}