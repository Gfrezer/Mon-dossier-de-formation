const gestionnaireDeContacts = require("../database/models/gestionnaireDeContacts");

module.exports = (req, res) => {
    let afficher = req.flash("afficher") || false;

    res.render("tableau", {
        afficher,
        gestionnaireDeContacts
    })

}