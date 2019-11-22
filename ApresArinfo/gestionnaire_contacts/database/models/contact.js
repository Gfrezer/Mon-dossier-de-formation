module.exports = class Contact {
    constructor(id, nom, prenom, telephone) {
        this.id = "contact-" + id;
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
    }

}