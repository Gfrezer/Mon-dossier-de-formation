const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema ({
    name: String,
    email: String,
    password: String

})

UserSchema.pre("save",function (next) {
    const user = this
    bcrypt.hash(user.password, 10 , (error, encrypted) =>{
        user.password = encrypted
        next()
    })
    
})


module.exports = mongoose.model("User",UserSchema)