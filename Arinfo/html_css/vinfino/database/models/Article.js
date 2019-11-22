const mongoose = require("mongoose")

const ArticleSchema = new mongoose.Schema({

    nom: String,
    prix: Number,
    millesime: String,
    image: String

})

const Article = mongoose.model("Article", ArticleSchema)
module.exports = Article