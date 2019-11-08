const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

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
    characterJob: {
        type: String
    },
    gear: {
        weapon: {
            type: String
        },
        offhand: {
            type: String
        },
        head: {
            type: String
        },
        chest: {
            type: String
        },
        arms: {
            type: String
        },
        belt: {
            type: String
        },
        pants: {
            type: String
        },
        shoes: {
            type: String
        },
        earring: {
            type: String
        },
        necklace: {
            type: String
        },
        wrist: {
            type: String
        },
        ring1: {
            type: String
        },
        ring2: {
            type: String
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