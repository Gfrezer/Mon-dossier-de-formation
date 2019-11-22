const gestionnaireDeContacts = require("../database/models/gestionnaireDeContacts");

module.exports = (req, res) => {
    const id = req.params.id;

    gestionnaireDeContacts.supprimerContactById(id);

    res.json("ok");

}