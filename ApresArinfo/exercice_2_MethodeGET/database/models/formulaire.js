const mongoose = require("mongoose")



const FormulaiSchema = new mongoose.Schema({

    email: String,
    password: String,
    address: String,
    address2: String,
    city: String,
    state: String,


})

const formu = mongoose.model("formu", FormulaiSchema);

module.exports = formu;