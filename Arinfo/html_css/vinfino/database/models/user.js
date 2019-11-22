const bcrypt = require('bcrypt'),
    mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'le nom est obligatoire']
    },

    email: {
        type: String,
        required: [true, "l'email est obligatoire"],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'le mot de passe est obligatoire']
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})
userSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, encrypted) => {
        user.password = encrypted
        next()
    })
})
module.exports = mongoose.model('user', userSchema)