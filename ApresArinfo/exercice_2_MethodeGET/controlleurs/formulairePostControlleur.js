const Formulaire = require("../database/models/formulaire")


module.exports = (req, res) => {

    Formulaire.create(
        req.body, (error, user) => {
            res.redirect("formulaire")
        })
    console.log(req.body)
}