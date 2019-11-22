const gestionnaireDeContacts = require("../database/models/gestionnaireDeContacts");

module.exports = (req, res) => {

    const {
        nom,
        prenom,
        telephone
    } = req.body

    gestionnaireDeContacts.ajouterContact(nom, prenom, telephone);
    req.flash("afficher", true);
    res.redirect("/tableau");
}