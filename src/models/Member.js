const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const { Schema } = mongoose;

const MemberSchema = new Schema({
    memberId: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\../, "Please provide a valid email address"]
    },
    password: {
        type: String,
        required: true
    },
    characterName: {
        type: String
    },
    characterTitle: {
        type: String
    },
    characterId: {
        type: String
    },
    characterLevel: {
        type: Number
    },
    characterWorld:{
        type: String
    },
    characterPicture:{
        type: String
    },
    characterJob: {
        type: String
    },
    gear: {
        weapon: {
            weaponName: {
                type: String
            },
            weaponIlvl: {
                type: Number
            }
        },
        offHand: {
            offHandName: {
                type: String
            },
            offHandIlvl: {
                type: Number
            }
        },
        head: {
            headName: {
                type: String
            },
            headIlvl: {
                type: Number
            }
        },
        chest: {
            chestName: {
                type: String
            },
            chestIlvl: {
                type: Number
            }
        },
        arms: {
            armsName: {
                type: String
            },
            armsIlvl: {
                type: Number
            }
        },
        belt: {
            beltName: {
                type: String
            },
            beltIlvl: {
                type: Number
            }
        },
        pants: {
            pantsName: {
                type: String
            },
            pantsIlvl: {
                type: Number
            }
        },
        shoes: {
            shoesName: {
                type: String
            },
            shoesIlvl: {
                type: Number
            }
        },
        earring: {
            earringName: {
                type: String
            },
            earringIlvl: {
                type: Number
            }
        },
        necklace: {
            necklaceName: {
                type: String
            },
            necklaceIlvl: {
                type: Number
            }
        },
        wrist: {
            wristName: {
                type: String
            },
            wristIlvl: {
                type: Number
            }
        },
        ring1: {
            ring1Name:{
                type: String
            },
            ring1Ilvl:{
                type: Number
            }
        },
        ring2: {
            ring2Name:{
                type: String
            },
            ring2Ilvl:{
                type: Number
            }
        }
    },
    stats: {
        attributes: {
            strength: {
                type: Number
            },
            dexterity: {
                type: Number
            },
            vitality: {
                type: Number
            },
            intelligence: {
                type: Number
            },
            mind: {
                type: Number
            },
        },
        subAttributes: {
            criticalHitRate: {
                type: Number
            },
            determination: {
                type: Number
            },
            directHitRate: {
                type: Number
            },
        },
        defensiveProperties:{
            defense:{
                type:Number
            },
            magicDefense:{
                type: Number
            }
        },
        physicalProperties:{
            attackPower:{
                type: Number
            },
            skillSpeed:{
                type: Number
            }
        },
        mentalProperties:{
            attackMagicPotency:{
                type: Number
            },
            healingMagicPotency:{
                type: Number
            },
            spellSpeed:{
                type: Number
            }
        },
        role: {
            tenacity: {
                type: Number
            },
            piety: {
                type: Number
            }
        }
    }
});

MemberSchema.pre('save', function createPassword(next) {
    if (this.isNew || this.isModified('password')){
        const document = this;

        bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
            if (err){
                next(err);
            }
            else{
                document.password = hashedPassword
                next();
            }
        });
    }
});

MemberSchema.methods.isCorrectPassword = function isCorrectPassword(password){
    const document = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, document.password, function compareCallback(err, same){
            if (err) {
                console.log(err);
                reject(err);
            }
            else{
                resolve(same)
            }
        })
    })
}

module.exports = mongoose.model('Member', MemberSchema)