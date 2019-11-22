const gestionnaireDeContacts = require("../database/models/gestionnaireDeContacts");

module.exports = (req, res) => {


    //methode post

    const nom2 = req.params.nom;

    gestionnaireDeContacts.supprimerContact(nom2);
    //methode href

    res.redirect("/tableau");
}