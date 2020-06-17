const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Member } = require('../models');
const handle = require('../utils/promise-handler');

const secret = 'turtletigertater';

// registering function
const register = (req, res) => {
    console.log(req.body)

    const { email, 
            password,
            characterName,
            characterJob,
            gear
        } = req.body;
    const member = new Member({ email, 
                                password,
                                characterName,
                                characterJob,
                                gear
                            })


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
                success: true,
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

const getMembers = async(req, res) => {
    let db = require('../models')

    db.Member.find({},{

    }).then(function(dbMember){
        res.json(dbMember)
    }).catch(function(err){
        if(err){
            console.log(err)
        }
    })
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
        characterLevel: req.body.characterLevel,
        characterWorld: req.body.characterWorld,
        characterPicture: req.body.characterPicture,
        characterJob: req.body.characterJob,
        gear: {
            weapon: {
                weaponName: req.body.gear.weapon.weaponName,
                weaponIlvl: req.body.gear.weapon.weaponIlvl
            },
            offHand: {
                offHandName: req.body.gear.offHand.offHandName,
                offHandIlvl: req.body.gear.offHand.offHandIlvl
            },
            head: {
                headName: req.body.gear.head.headName,
                headIlvl: req.body.gear.head.headIlvl
            },
            chest: {
                chestName: req.body.gear.chest.chestName,
                chestIlvl: req.body.gear.chest.chestIlvl
            },
            arms: {
                armsName: req.body.gear.arms.armsName,
                armsIlvl: req.body.gear.arms.armsIlvl
            },
            belt: {
                beltName: req.body.gear.belt.beltName,
                beltIlvl: req.body.gear.belt.beltIlvl
            },
            pants: {
                pantsName: req.body.gear.pants.pantsName,
                pantsIlvl: req.body.gear.pants.pantsIlvl
            },
            shoes: {
                shoesName: req.body.gear.shoes.shoesName,
                shoesIlvl: req.body.gear.shoes.shoesIlvl
            },
            earring: {
                earringName: req.body.gear.earring.earringName,
                earringIlvl: req.body.gear.earring.earringIlvl
            },
            necklace: {
                necklaceName: req.body.gear.necklace.necklaceName,
                necklaceIlvl: req.body.gear.necklace.necklaceIlvl
            },
            wrist: {
                wristName: req.body.gear.wrist.wristName,
                wristIlvl: req.body.gear.wrist.wristIlvl
            },
            ring1: {
                ring1Name: req.body.gear.ring1.ring1Name,
                ring1Ilvl: req.body.gear.ring1.ring1Ilvl
            },
            ring2: {
                ring2Name: req.body.gear.ring2.ring2Name,
                ring2Ilvl: req.body.gear.ring2.ring2Ilvl
            }

        },
        stats: {
            attributes: {
                strength: req.body.stats.attributes.strength,
                dexterity: req.body.stats.attributes.dexterity,
                vitality: req.body.stats.attributes.vitality,
                intelligence: req.body.stats.attributes.intelligence,
                mind: req.body.stats.attributes.mind,
            },
            subAttributes:{
                criticalHitRate: req.body.stats.subAttributes.criticalHitRate,
                determination: req.body.stats.subAttributes.determination,
                directHitRate: req.body.stats.subAttributes.directHitRate,
            },
            defensiveProperties:{
                defense: req.body.stats.defensiveProperties.defense,
                magicDefense: req.body.stats.defensiveProperties.magicDefense,
            },
            physicalProperties:{
                attackPower: req.body.stats.physicalProperties.attackPower,
                skillSpeed: req.body.stats.physicalProperties.skillSpeed
            },
            mentalProperties: {
                attackMagicPotency: req.body.stats.mentalProperties.attackMagicPotency,
                healingMagicPotency: req.body.stats.mentalProperties.healingMagicPotency,
                spellSpeed: req.body.stats.mentalProperties.spellSpeed,
            },
            role: {
                tenacity: req.body.stats.role.tenacity,
                piety: req.body.stats.role.piety,
            }
        }
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
    updateProfile,
    getMembers
}