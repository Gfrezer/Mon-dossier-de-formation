const gestionnaireDeContacts = require("../database/models/gestionnaireDeContacts");

module.exports = (req, res) => {
    res.json(gestionnaireDeContacts);
}