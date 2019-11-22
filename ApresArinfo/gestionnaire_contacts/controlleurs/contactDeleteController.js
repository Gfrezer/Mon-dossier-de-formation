const gestionnaireDeContacts = require("../database/models/gestionnaireDeContacts");

module.exports = (req, res) => {


    //methode post
    const nom = req.body.nom;




    gestionnaireDeContacts.supprimerContact(nom);
    //methode href

    res.redirect("/tableau");
}